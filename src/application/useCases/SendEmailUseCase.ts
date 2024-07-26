import { UserNotExists } from '@application/errors/UserNotExists';
import { sendEmail } from '@application/services/emailService';
import { isOneDayAway } from '@application/utils/isOneDayAway';
import { prismaClient } from '../libs/prismaClient';

interface IInput {
  userId: string;
}

interface IOutput {
  message: string;
}

export class SendEmailUseCase {
  async execute({ userId }: IInput): Promise<IOutput | null> {
    const user = await prismaClient.user.findUnique({
      where: {
        id: userId
      },
      include: {
        loanHistory: {
          include: {
            book: true
          }
        }
      }
    });

    if (!user) {
      throw new UserNotExists();
    }

    if (user.loanHistory.length === 0) {
      return null;
    }

    for (const loan of user.loanHistory) {
      const oneDay = isOneDayAway(String(loan.returnedIn));

      if (!oneDay || loan.returnedAtDate) {
        continue;
      }

      const emailOptions = {
        to: user.email,
        subject: 'Book Loan Reminder',
        text: `Oops! Time flies! Tomorrow is the last day for your loan of "${loan.book.title}". Please return it to make room for other readers.`,
      };

      try {
        await sendEmail(emailOptions);
      } catch (error) {
        console.error(`Failed to send email for loan ${loan.id}:`, error);
      }
    }

    return {
      message: 'Email sent',
    };
  }
}

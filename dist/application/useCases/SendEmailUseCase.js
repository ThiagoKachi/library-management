"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmailUseCase = void 0;
const UserNotExists_1 = require("@application/errors/UserNotExists");
const emailService_1 = require("@application/services/emailService");
const isOneDayAway_1 = require("@application/utils/isOneDayAway");
const prismaClient_1 = require("../libs/prismaClient");
class SendEmailUseCase {
    async execute({ userId }) {
        const user = await prismaClient_1.prismaClient.user.findUnique({
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
            throw new UserNotExists_1.UserNotExists();
        }
        if (user.loanHistory.length === 0) {
            return null;
        }
        for (const loan of user.loanHistory) {
            const oneDay = (0, isOneDayAway_1.isOneDayAway)(String(loan.returnedIn));
            if (!oneDay || loan.returnedAtDate) {
                continue;
            }
            const emailOptions = {
                to: user.email,
                subject: 'Book Loan Reminder',
                text: `Oops! Time flies! Tomorrow is the last day for your loan of "${loan.book.title}". Please return it to make room for other readers.`,
            };
            try {
                await (0, emailService_1.sendEmail)(emailOptions);
            }
            catch (error) {
                console.error(`Failed to send email for loan ${loan.id}:`, error);
            }
        }
        return {
            message: 'Email sent',
        };
    }
}
exports.SendEmailUseCase = SendEmailUseCase;

import { smtp } from '@application/libs/emailTransporter';

interface IEmailOptions {
  to: string;
  subject: string;
  text: string;
}

export async function sendEmail({ to, subject, text }: IEmailOptions): Promise<void> {
  const configEmail = {
    from: process.env.SMTP_USER,
    to,
    subject,
    text,
  };

  await smtp.sendMail(configEmail);
}

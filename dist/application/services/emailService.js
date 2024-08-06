"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = sendEmail;
const emailTransporter_1 = require("@application/libs/emailTransporter");
async function sendEmail({ to, subject, text }) {
    const configEmail = {
        from: process.env.SMTP_USER,
        to,
        subject,
        text,
    };
    await emailTransporter_1.smtp.sendMail(configEmail);
}

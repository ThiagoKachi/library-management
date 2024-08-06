"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOneDayAway = isOneDayAway;
function isOneDayAway(targetDateStr) {
    const currentDate = new Date();
    const targetDate = new Date(targetDateStr);
    const differenceInMillis = targetDate.getTime() - currentDate.getTime();
    const differenceInHours = differenceInMillis / (1000 * 60 * 60);
    return differenceInHours >= 24 && differenceInHours < 48;
}

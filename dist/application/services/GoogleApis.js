"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleApis = void 0;
const axios_1 = __importDefault(require("axios"));
const qs_1 = __importDefault(require("qs"));
const env_1 = require("../config/env");
class GoogleApis {
    static async getAccessToken({ code, redirectUri }) {
        const options = qs_1.default.stringify({
            client_id: env_1.env.GOOGLE_CLIENT_ID,
            client_secret: env_1.env.GOOGLE_CLIENT_SECRET,
            code,
            grant_type: 'authorization_code',
            redirect_uri: redirectUri,
        });
        const { data } = await axios_1.default.post('https://oauth2.googleapis.com/token', options, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return data.access_token;
    }
    static async getUserInfo(accessToken) {
        const { data } = await axios_1.default.get('https://www.googleapis.com/userinfo/v2/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {
            email: data.email,
            googleId: data.id,
            verifiedEmail: data.verified_email,
            firstName: data.given_name,
            lastName: data.family_name,
            avatar: data.picture,
        };
    }
    static async revokeAccessToken(accessToken) {
        await axios_1.default.post('https://oauth2.googleapis.com/revoke', qs_1.default.stringify({ token: accessToken }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
    }
}
exports.GoogleApis = GoogleApis;

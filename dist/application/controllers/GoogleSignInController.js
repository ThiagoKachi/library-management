"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleSignInController = void 0;
const zod_1 = require("zod");
const prismaClient_1 = require("../libs/prismaClient");
const GoogleApis_1 = require("../services/GoogleApis");
const schema = zod_1.z.object({
    code: zod_1.z.string().min(1),
});
class GoogleSignInController {
    static handle = async (request, reply) => {
        try {
            const result = schema.safeParse(request.body);
            if (!result.success) {
                return reply.status(400).send({ error: result.error.issues });
            }
            const { code } = result.data;
            const googleAccessToken = await GoogleApis_1.GoogleApis.getAccessToken({
                code,
                redirectUri: 'http://localhost:5173/callbacks/google',
            });
            const { verifiedEmail, ...userInfo } = await GoogleApis_1.GoogleApis.getUserInfo(googleAccessToken);
            await GoogleApis_1.GoogleApis.revokeAccessToken(googleAccessToken);
            if (!verifiedEmail) {
                return reply.status(401).send({
                    error: 'Google account is not verified.',
                });
            }
            const user = await prismaClient_1.prismaClient.user.upsert({
                where: { email: userInfo.email },
                create: userInfo,
                update: {
                    googleId: userInfo.googleId,
                },
            });
            const accessToken = await reply.jwtSign({ sub: user.id, role: user.role });
            return reply
                .code(200)
                .send({ accessToken });
        }
        catch (error) {
            console.log(error);
        }
    };
}
exports.GoogleSignInController = GoogleSignInController;

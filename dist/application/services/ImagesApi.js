"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesApis = void 0;
const env_1 = require("@application/config/env");
const axios_1 = __importDefault(require("axios"));
class ImagesApis {
    static async getImageUrl(fileKey) {
        const { data } = await axios_1.default.get(env_1.env.IMAGES_API_URL, {
            params: {
                fileKey
            }
        });
        return data.fileUrl;
    }
}
exports.ImagesApis = ImagesApis;

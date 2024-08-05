import { env } from '@application/config/env';
import axios from 'axios';

export class ImagesApis {
  static async getImageUrl(fileKey: string) {
    const { data } = await axios.get<{ fileUrl: string }>(env.IMAGES_API_URL, {
      params: {
        fileKey
      }
    });

    return data.fileUrl;
  }
}

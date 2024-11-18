import { Injectable } from "@nestjs/common";
import * as fs from 'fs';
import * as path from 'path'
@Injectable()
export class UploadLocalService {
    async upload(file: Express.Multer.File): Promise<{ url: string }> {
        const uploadPath = path.join(__dirname, '../uploads', file.originalname);
        fs.writeFileSync(uploadPath, file.buffer);
        return { url: `/upload/${file.originalname}` };
    }
}
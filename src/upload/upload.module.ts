import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadService } from './upload.service';
import { UploadFactory } from './upload.factory';
import { UploadLocalService } from './upload.local.service';
import { UploadS3Service } from './upload.s3.service';
import { FileEntity } from './file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  providers: [UploadService, UploadFactory, UploadLocalService, UploadS3Service],
  exports: [UploadService],
})
export class UploadModule {}

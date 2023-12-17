import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  InternalServerErrorException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('file')
export class FileController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          return cb(null, file.originalname);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file) {
    try {
      console.log('Plik odebrany i zapisany pomyślnie:', file);
      return { filename: file.filename };
    } catch (error) {
      console.error('Błąd podczas obsługi pliku:', error);
      throw new InternalServerErrorException('Błąd podczas obsługi pliku');
    }
  }
}

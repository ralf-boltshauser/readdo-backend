import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ListModule } from './list/list.module';
import { ColorModule } from './color/color.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:passwordpassword@track-app.tdie6.mongodb.net/readDo?retryWrites=true&w=majority',
    ),
    ListModule,
    ColorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

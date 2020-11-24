import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { productsMoudle } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    productsMoudle,
    MongooseModule.forRoot(
      'mongodb+srv://mongo:mongo@cluster0.dcom3.mongodb.net/products?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';
import { FileModule } from './file/file.module';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  // imports modules to make them globally accessible
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://vfray:4221@cluster0.q7ucb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}

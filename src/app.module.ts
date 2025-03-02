import { Module } from '@nestjs/common';
import { BovinModule } from './bovin/bovin.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    BovinModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

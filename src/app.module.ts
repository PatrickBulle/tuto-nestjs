import { Module } from '@nestjs/common';
import { BovinModule } from './bovin/bovin.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    BovinModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

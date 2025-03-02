import { Module } from '@nestjs/common';
import { BovinModule } from './bovin/bovin.module';

@Module({
  imports: [BovinModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

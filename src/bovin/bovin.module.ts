import { Module } from '@nestjs/common';
import { BovinController } from './bovin.controller';
import { BovinService } from './bovin.service';

@Module({
  controllers: [BovinController],
  providers: [BovinService],
})
export class BovinModule {}

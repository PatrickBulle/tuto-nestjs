import { Module } from '@nestjs/common';
import { BovinController } from './bovin.controller';
import { BovinService } from './bovin.service';
import { BovinRepository } from './bovin.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bovin } from 'src/entity/bovin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bovin])],
  controllers: [BovinController],
  providers: [BovinService, BovinRepository],
})
export class BovinModule {}

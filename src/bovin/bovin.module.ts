import { Module } from '@nestjs/common';
import { BovinController } from './bovin.controller';
import { BovinService } from './bovin.service';
import { BovinRepository } from './bovin.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BovinEntity } from 'src/entity/bovin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BovinEntity])],
  controllers: [BovinController],
  providers: [BovinService, BovinRepository],
})
export class BovinModule {}

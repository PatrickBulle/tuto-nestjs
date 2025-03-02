import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { BovinService } from './bovin.service';
import { Bovin } from 'src/entity/bovin';
import { BovinDto } from 'src/dto/bovin.dto';

@Controller('bovins')
export class BovinController {
  constructor(private readonly bovinService: BovinService) {}

  @Get()
  getBovins(): BovinDto[] {
    return this.bovinService
      .getBovins()
      .map((bovin: Bovin) => BovinDto.fromEntity(bovin));
  }

  @Get(':copaip/:nunati')
  getBovin(
    @Param('copaip') copaip: string,
    @Param('nunati') nunati: string,
  ): BovinDto | undefined {
    const bovin = this.bovinService.getBovin(copaip, nunati);

    if (bovin) {
      return BovinDto.fromEntity(bovin);
    }
    throw new NotFoundException(`Le bovin ${copaip}${nunati} n'existe pas`);
  }
}

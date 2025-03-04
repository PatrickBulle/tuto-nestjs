import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { BovinService } from './bovin.service';
import { BovinDto } from 'src/dto/bovin.dto';
import { Bovin } from 'src/models/bovin.model';

@Controller('bovins')
export class BovinController {
  constructor(private readonly bovinService: BovinService) {}

  @Get()
  async getBovins(): Promise<BovinDto[]> {
    const bovins = await this.bovinService.getBovins();

    return bovins.map((bovin: Bovin) => BovinDto.fromEntity(bovin));
  }

  @Get(':copaip/:nunati')
  async getBovin(
    @Param('copaip') copaip: string,
    @Param('nunati') nunati: string,
  ): Promise<BovinDto> {
    const bovin = await this.bovinService.getBovin(copaip, nunati);

    if (bovin) {
      return BovinDto.fromEntity(bovin);
    }
    throw new NotFoundException(`Le bovin ${copaip}${nunati} n'existe pas`);
  }
}

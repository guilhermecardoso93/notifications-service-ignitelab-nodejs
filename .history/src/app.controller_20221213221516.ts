/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notifications.findMany();
  }

  @Post()
  async create(@Body() body:any) {
    console.log(body)
    /*await this.prisma.notifications.create({
      data: {
        id: randomUUID(),
        content: 'Você tem um nova Solicitação de amizade!',
        category: 'social',
        recipientId: randomUUID(),
      },
    });*/
  }
}

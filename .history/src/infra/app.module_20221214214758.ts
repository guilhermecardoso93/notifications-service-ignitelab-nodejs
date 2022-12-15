import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/data.module';
import { HttpModule } from './http/dtos/http.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}

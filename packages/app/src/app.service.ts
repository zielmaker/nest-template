import { Injectable } from '@nestjs/common';
import PQueue from 'p-queue';

@Injectable()
export class AppService {
  private readonly queue = new PQueue();

  getHello(): string {
    return 'Hello World!';
  }
}

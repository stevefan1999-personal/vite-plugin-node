import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

if (import.meta.env.PROD) {
  void (async function main() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
  })();
}

export const viteNodeApp = NestFactory.create(AppModule);

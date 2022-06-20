import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors( {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: "Content-Type, Accept",
  });
  
  await app.listen(3000);
}
bootstrap();
// async function bootstrap() {
//   const logger = new Logger('MY APPLICATION LOGGER');
//   const app = await NestFactory.create(AppModule);
//   app.enableCors();
//   const server = await app.listen(process.env.PORT, process.env.HOST);
//   const io = new Socket(server);
//   logger.log('Server is listening at'+{process.env.PORT});
//   io.on('connection', (socket) => { logger.log('SOCKET CONNECTION ESTABLISHED');
//      socket.on('disconnect', () => { logger.log('User Disconnected'); });
//      socket.on('messageToServer', msg => { logger.log(`Message To Server ${msg}`);
//      io.emit('messageToClient', msg); }); });
//      }
//

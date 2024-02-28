import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Coffee, CoffeeSchema, EventSchema, Event } from './entities';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Coffee.name,
        schema: CoffeeSchema,
      },
      {
        name: Event.name,
        schema: EventSchema,
      },
    ]),
  ],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}

import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export class Event extends mongoose.Document {
  @Prop()
  type: string;

  @Prop({ index: true })
  name: string;

  @Prop(mongoose.SchemaTypes.Mixed)
  payload: Record<string, any>;
}

export const EventSchema = SchemaFactory.createForClass(Event);
EventSchema.index({ name: 1, type: -1 });
/**
 * In this example:
 * We passed a value of 1 (to name) which specifies that the index
 * should order these items in an Ascending order.
 *
 * We passed type a value of (negative) -1 which specifies that
 * The index should order these items in Descending order.
 */

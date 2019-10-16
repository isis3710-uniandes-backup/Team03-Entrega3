import { Mongo } from 'meteor/mongo';

export const DescuentoBD = new Mongo.Collection('descuento');
export const ObjectId = new Mongo.ObjectID;
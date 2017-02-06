import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'node-simple-schema';

const Orders = new Mongo.Collection('orders');

export const OrdersSchema = new SimpleSchema({
  first: {
    type: String,
    label: 'first',
  },
  last: {
    type: String,
    label: 'last',
  },
  email: {
    type: String,
    label: 'email',
  },
  total: {
    type: Number,
    label: 'total',
  },
  isShipped:{
    type: Boolean,
    label: 'isShipped',
  }
});

export default Orders;

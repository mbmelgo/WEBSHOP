import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'node-simple-schema';

const Products = new Mongo.Collection('products');

export const ProductSchema = new SimpleSchema({
  category_id:{
    type: String,
    label: 'Category ID',
  },
  name:{
    type: String,
    label: 'Name',
  },
  description:{
    type: String,
    label: 'Description',
    optional: true,
  },
  price:{
    type: Number,
    label: 'Price',
  },
  image:{
    type: String,
    label: 'Image',
    optional: true,
  },
  isFeatured:{
    type: Boolean,
    label: 'isFeatured',
    optional: true,
  },
  viewCount: {
    type: Number,
    label: 'viewCount',
  },
  createdBy:{
    type: String,
    label: 'Created By',
  },
  createdAt:{
    type: Date,
    label: 'Created At',
  },

});

export default Products;

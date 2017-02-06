import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'node-simple-schema';

const Categories = new Mongo.Collection('categories');

export const CategorySchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
  },
  image: {
    type: String,
    label: 'Image',
    optional: true,
  },
  createdBy: {
    type: String,
    label: 'Created By',
  },
  createdAt: {
    type: Date,
    label: 'Created At',
  },
});

export default Categories;

import {Products, Categories} from '/lib/collections/';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {

  Meteor.publish('mostViewedProducts', (limit) => {
    check(limit, Number);
    return Products.find({}, {sort: {viewCount: -1}, limit:limit});
  });

  Meteor.publish('featuredProducts', (limit) => {
    check(limit, Number);
    return Products.find({isFeatured: true},  {limit:limit});
  });

  Meteor.publish('allProducts', (limit) => {
    check(limit, Number);
    return Products.find({}, {limit: limit});

  });


  Meteor.publish('searchProduct', (searchTerm, limit) => {
    check(searchTerm, String);
    check(limit, Number);
    return Products.find({name: {$regex:searchTerm,$options:"i"}}, {limit:limit});
  });


  Meteor.publish('searchByCategory', (searchTerm, limit) => {
    check(searchTerm, String);
    check(limit, Number);
    if(searchTerm !== 'all'){
      return Products.find({category_id: searchTerm}, {limit:limit});
    }
    return Products.find({}, {limit:limit});

  });

  Meteor.publish('searchCategories', (searchTerm) => {
    check(searchTerm, String);
    return Categories.find({name: {$regex:searchTerm,$options:"i"}});
  });

  Meteor.publish('allCategories', () => {
    return Categories.find({});
  });


}

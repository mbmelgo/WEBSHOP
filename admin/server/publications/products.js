import {Products} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('findAllProducts', function (userId) {
    check(userId, String);
    return Products.find({createdBy: userId},{sort:{createdAt:-1}});
  });

  Meteor.publish('findLimitedProducts', function (userId, limit) {
    check(userId, String);
    check(limit, Number);
    return Products.find({createdBy: userId},{
      sort:{createdAt:-1},
      limit: limit
    });
  });

  Meteor.publish('findSpecificProduct', function (userId, productId) {
    check(userId, String);
    check(productId, String);
    return Products.find({createdBy: userId, _id: productId},{
      sort:{createdAt:-1},
    });
  });

  Meteor.publish('searchProducts', function (userId,limit,searchName) {
    check(userId, String);
    check(searchName, String);
    check(limit, Number);
    if(searchName === ' '){
      return Products.find({createdBy: userId}, {
        sort: {createdAt: -1},
        limit: limit
      });
    }

    return Products.find({createdBy: userId,name:{$regex:searchName,$options:"i"}},{sort:{createdAt:-1}, limit:limit});
  });
}

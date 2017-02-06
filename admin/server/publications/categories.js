import {Categories} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {

  Meteor.publish('findAllCategories', function (userId) {
    check(userId, String);
    return Categories.find({createdBy: userId}, {
      sort: {name: 1}
    });
  });

  Meteor.publish('findLimitedCategories', function (userId, limit) {
    check(userId, String);
    check(limit, Number);
    return Categories.find({createdBy: userId}, {
      sort: {name: 1},
      limit: limit
    });
  });

  Meteor.publish('searchCategories', function ( limit, searchName) {
    check(limit, Number);
    check(searchName, String);
    if(searchName === ' '){
      return Categories.find({}, {
        sort: {name: 1},
        limit: limit
      });
    }

    return Categories.find({name: {$regex:searchName,$options:"i"}}, {
      sort: {name: 1},
      limit: limit
    });
  });

  Meteor.publish('categoryList', function () {
    return Categories.find({}, {
      sort: {name: 1}
    });
  });

}

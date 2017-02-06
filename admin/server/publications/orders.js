import {Orders} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {

  Meteor.publish('findAllOrders', function () {
    return Orders.find({});
  });

  Meteor.publish('findAllShippedOrders', function () {
    return Orders.find({isShipped: true});
  });

  Meteor.publish('findAllUnshippedOrders', function () {
    return Orders.find({isShipped: false});
  });

  Meteor.publish('findLimitedOrders', function (limit) {
    check(limit, Number);
    return Orders.find({},{
      sort:{isShipped:1},
      limit:limit
    });
  });

  Meteor.publish('findSpecificOrders', function (_id) {
    check(_id, String)
    return Orders.find({_id:_id});
  });


}

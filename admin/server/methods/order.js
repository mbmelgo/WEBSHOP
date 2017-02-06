import {Orders} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Email} from 'meteor/email';
import {SSR} from  'meteor/meteorhacks:ssr';

export default function () {
  Meteor.methods({
    'order.shipOrder'(order) {
      check(order, {
        _id: String,
        first: String,
        last: String,
        email: String,
        total: Number,
        isShipped: Boolean,
      });

      const {_id, first, last, email, total, isShipped} = order;

      Orders.update(
        {_id:_id},
        { $set:
          {
            first: first,
            last: last,
            email: email,
            total: total,
            isShipped: isShipped
          }
        }
      );
    },

    'sendEmail'(to,from,subject,name){
      check(to, String);
      check(from, String);
      check(subject, String);
      check(name, String);

      this.unblock();

      const formData = {
        name: name,
        status: "Shipped"
      }

      SSR.compileTemplate('htmlEmail', Assets.getText('email.html'));
      
      Email.send({
         to: to,
         from: from,
         subject: subject,
         html: SSR.render('htmlEmail', formData),
      });
    }
  });
}

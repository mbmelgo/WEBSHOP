import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import {Email} from 'meteor/email';
import {SSR} from  'meteor/meteorhacks:ssr';

import {Orders} from '/lib/collections';


export default function () {
  Meteor.methods({
    'sendEmail'(formData) {
      check(formData, Object) //redundancy check
      formData.status = "Confirmed";

      SSR.compileTemplate('htmlEmail', Assets.getText('email.html'));

      Email.send({
        to: "rwr655@gmail.com",
        from: "Support <theshop6996@gmail.com>",
        subject: "Orders",
        html: SSR.render('htmlEmail', formData),
      });

    },

    'addUser'(formData){
      check(formData, Object)

      const {first, last, email, total} = formData;

      Orders.insert({
        first: first,
        last: last,
        email: email,
        total: total,
        isShipped: false,
      })
    }
  });
}

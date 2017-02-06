import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {

  Meteor.methods({
    'users.signup'(user) {
    check(user, Object);
    const {email, password,profile} = user;
    Accounts.createUser({email,password,profile});
    },
  });
}

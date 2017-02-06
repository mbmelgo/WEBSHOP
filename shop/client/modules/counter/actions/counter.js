import Cart from '../../core/libs/cart';
import {check} from 'meteor/check';
import validator from 'email-validator';

export default {

  removeItem({LocalState}, productID){
    Cart.remove({_id: productID});
  },

  clearCart(){
    Cart.remove({});
  },

  sendEmail({LocalState}, orderForm){

    check(orderForm, Object);
    // Meteor.call('sendEmail', orderForm); //remove on development
  },

  validateData({LocalState}, formData){
    check(formData, Object);

    const {first, last, email} = formData;

    if(first && last && validator.validate(email)){
      return true;
    }
  },

  registerBuyer({LocalState}, formData){
    check(formData, Object);
    Meteor.call('addUser', formData, function(err){
      if(err){
        return LocalState.set('Error', 'Error adding transaction');
      }
      formData.status = "Confirmed";
      Meteor.call('sendEmail', formData, function(err){
        if(err) return LocalState.set('Error', 'Error sending email');
      })
    });
  }


}

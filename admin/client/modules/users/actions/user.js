export default {

  create({Meteor, LocalState, FlowRouter},
          name, address, cardName, cardNumber, cardCVV, email, password){

    if(!name){return LocalState.set('SIGNUP_ERROR', 'Name is required.');}
    if(!address){return LocalState.set('SIGNUP_ERROR', 'Address is required.');}
    if(!cardName){return LocalState.set('SIGNUP_ERROR', 'Name on Card is required.');}
    if(!cardNumber){return LocalState.set('SIGNUP_ERROR', 'Credit Card Number is required.');}
    if(!cardCVV){return LocalState.set('SIGNUP_ERROR', 'Card Security Code is required.');}
    if(!email){return LocalState.set('SIGNUP_ERROR', 'Email is required.');}
    if(!password){return LocalState.set('SIGNUP_ERROR', 'Password is required.');}

    LocalState.set('SIGNUP_ERROR', null);

    var profile = {
      name: name,
      address: address,
      cardName: cardName,
      cardNumber: cardNumber,
      cardCVV: cardCVV
    };

    Meteor.call('users.signup', {email, password,profile} , (err) => {
      if(err){ return LocalState.set('SIGNUP_ERROR', err.message);}
      FlowRouter.go('/admin/');
    });

  },

  login({Meteor, LocalState, FlowRouter}, email, password){
    if(!email){return LocalState.set('LOGIN_ERROR', 'Email is required.');}
    if(!password){return LocalState.set('LOGIN_ERROR', 'Password is required.');}

    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(email,password, (err) => {
      if(err){return LocalState.set('LOGIN_ERROR', err.message);}
      FlowRouter.go('/admin/home/');
    });
    
  },



  clearErrors({LocalState}){
    return LocalState.set("SAVING_ERROR", null);
  }
}

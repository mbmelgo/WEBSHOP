export default {

  shipOrder({Meteor, LocalState, Collections, FlowRouter},order){
    if(!order){
      return LocalState.set('SHIP_ORDER_ERROR', 'Order is required.');
    }
    order.isShipped = true;

    Meteor.call('order.shipOrder', order, (err) =>{
      if(err){return LocalState.set('SHIP_ORDER_ERROR', err);}

      const {first, email, last} = order;
      const name = first + ' ' + last;

      Meteor.call('sendEmail', email, "Support <theshop6996@gmail.com>", 'Orders', name);
    });

  },


  loadMore({LocalState}){
    var orderLimit = LocalState.get('orderLimit');
    return LocalState.set('orderLimit', orderLimit+3);
  },

}

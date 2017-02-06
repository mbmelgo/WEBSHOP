import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Order from '../components/order.jsx';

export const composer = ({context, orderId}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const orderLimit = LocalState.get('orderLimit');

  LocalState.get('orderLimit') ? LocalState.set('orderLimit', orderLimit): LocalState.set('orderLimit', 3);

  if(Meteor.subscribe('findLimitedOrders',LocalState.get('orderLimit')).ready()){
    const orders = Collections.Orders.find({_id:orderId}).fetch();
    const orderDetails = orders[0];
    onData(null, {orderDetails});
  }
  
};

export const depsMapper = (context, actions) => ({
  shipOrder: actions.order.shipOrder,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Order);

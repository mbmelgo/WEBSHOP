import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import OrderList from '../components/order_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  LocalState.get('orderLimit') ?  LocalState.get('orderLimit'):  LocalState.set('orderLimit', 3);

  if(Meteor.subscribe('findLimitedOrders', LocalState.get('orderLimit')).ready()){
   var orderList;
   LocalState.get('orderList') ? orderList = LocalState.get('orderList') : orderList = Collections.Orders.find({},{sort:{isShipped:1}}).fetch();
   onData(null, {LocalState, orderList });
  }

};

export const depsMapper = (context, actions) => ({
  loadMore: actions.order.loadMore,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(OrderList);

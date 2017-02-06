import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Checkout from '../components/checkout';
import Cart from '../../core/libs/cart';
import {getTotalPrice} from '/client/global_helpers';

export const composer = ({context}, onData) => {
  const {LocalState} = context();

  LocalState.set('validData', false );
  LocalState.set('Error', '');

  const items = Cart.find({}).fetch(); // refactor into one function returning
  const total = getTotalPrice(items);    // object containing all attributes to shopping cart

  const cart = {items, total};

  onData(null, {cart, LocalState});
};

export const depsMapper = (context, actions) => ({
  removeItem: actions.counter.removeItem,
  sendEmail: actions.counter.sendEmail,
  validateData: actions.counter.validateData,
  clearCart: actions.counter.clearCart,
  registerBuyer: actions.counter.registerBuyer,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Checkout);

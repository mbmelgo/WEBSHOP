import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import FeatureWrapper from '../components/feature_wrapper';
import Cart from '../libs/cart';
import {getTotalPrice, getItemsLeft, sortEm} from '/client/global_helpers';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  LocalState.get("LIMIT") ? LocalState.get("LIMIT") : LocalState.set('LIMIT', 10);

  if(Meteor.subscribe('featuredProducts', LocalState.get("LIMIT")).ready() && Meteor.subscribe('allCategories').ready() ){
    const prods = Collections.Products.find({}).fetch();
    const categories = Collections.Categories.find({}).fetch().sort(sortEm);
    const items = Cart.find({}).fetch();
    const total = getTotalPrice(items);
    const left = getItemsLeft(items.length);
    const cart = {items, total, left};

    onData(null, {prods,categories, cart, LocalState});
  }
};

export const depsMapper = (context, actions) => ({
  loadMore: actions.product.loadMore,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FeatureWrapper);

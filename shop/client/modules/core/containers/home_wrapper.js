import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import HomeWrapper from '../components/home_wrapper';
import Cart from '../libs/cart';
import {getTotalPrice, getItemsLeft, sortEm} from '/client/global_helpers';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('allProducts', 0).ready() && Meteor.subscribe('allCategories').ready() ){
    const most_viewed = Collections.Products.find({}, {sort: {viewCount: -1}, limit:5}).fetch();
    const featured = Collections.Products.find({"isFeatured": true},  {limit:5}).fetch();
    const categories = Collections.Categories.find({}).fetch().sort(sortEm);
    const items = Cart.find({}).fetch(); // refactor into one function returning
    const total = getTotalPrice(items);    // object containing all attributes to shopping cart
    const left = getItemsLeft(items.length);
    const cart = {items, total, left};

    onData(null, {featured, most_viewed, categories, cart});
  }
};


export const depsMapper = (context) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(HomeWrapper);

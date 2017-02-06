import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import SearchWrapper from '../components/search_wrapper';
import Cart from '../libs/cart';
import {getTotalPrice, getItemsLeft, sortEm} from '/client/global_helpers';


export const composer = ({context, searchTerm}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  const query = searchTerm.searchTerm;

  LocalState.get("LIMIT") ? LocalState.get("LIMIT") : LocalState.set('LIMIT', 10);
  LocalState.get("CAT_LIMIT") ? LocalState.get("CAT_LIMIT") : LocalState.set('CAT_LIMIT', 5);

  if(Meteor.subscribe('searchProduct', query, LocalState.get("LIMIT")).ready() &&
        Meteor.subscribe('allCategories').ready()){

          const prod_result = Collections.Products.find({}).fetch();
          const cat_result = Collections.Categories.find({name: {$regex:query,$options:"i"}}, {limit: LocalState.get("CAT_LIMIT")}).fetch();
          const items = Cart.find({}).fetch(); // refactor into one function returning
          const total = getTotalPrice(items);    // object containing all attributes to shopping cart

          const categories = Collections.Categories.find({}).fetch().sort(sortEm);
          const left = getItemsLeft(items.length);
          const cart = {items, total, left};

          onData(null, {cart, categories, searchTerm, prod_result, cat_result, LocalState});
  }

};

export const depsMapper = (context, actions) => ({
  loadMore: actions.product.loadMore,
  loadMoreCategories: actions.product.loadMoreCategories,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SearchWrapper);

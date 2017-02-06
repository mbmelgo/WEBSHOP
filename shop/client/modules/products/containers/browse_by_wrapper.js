import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import BrowseByWrapper from '../components/browse_by_wrapper';
import Cart from '../../core/libs/cart';
import {getTotalPrice, getItemsLeft} from '/client/global_helpers';

export const composer = ({context, category}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  LocalState.get("LIMIT") ? LocalState.get("LIMIT") : LocalState.set('LIMIT', 10);

  const query = category.category;

  if(Meteor.subscribe('allCategories').ready()){
    const categories = Collections.Categories.find({}).fetch();
    let searchTerm = "all";

    if(query !== 'All'){
      const category = Collections.Categories.findOne({name : query});
      searchTerm = category._id;
    }

    if(Meteor.subscribe('searchByCategory', searchTerm,  LocalState.get("LIMIT")).ready()){
      const prods = Collections.Products.find({}).fetch();
      const items = Cart.find({}).fetch();
      const total = getTotalPrice(items);
      const left = getItemsLeft(items.length);
      const cart = {items, total, left};
      onData(null, {prods, categories, query, cart, LocalState});
    }
  }
};

export const depsMapper = (context, actions) => ({
  loadMore: actions.details.loadMore,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(BrowseByWrapper);

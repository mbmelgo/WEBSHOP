import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ListProduct from '../components/list_product.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const userId = Meteor.userId();
  LocalState.get('productLimit') ?  LocalState.get('productLimit') : LocalState.set('productLimit', 5);
  LocalState.get('searchProductName') ?  LocalState.get('searchProductName') : LocalState.set('searchProductName', " ");
  if(Meteor.subscribe('searchProducts', userId, LocalState.get('productLimit'),LocalState.get('searchProductName')).ready()){
    var products;
    LocalState.get('searchProductName') === ' ' ? products = Collections.Products.find({}).fetch():
      products = Collections.Products.find({name: {$regex:LocalState.get('searchProductName'),$options:"i"}}).fetch();
    onData(null, {products, LocalState});
  }
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  loadMore: actions.product.loadMore,
  search: actions.product.search,
  clearErrors: actions.product.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ListProduct);

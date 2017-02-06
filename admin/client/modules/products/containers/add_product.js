import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import AddProduct from '../components/add_product.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {Meteor,LocalState, Collections} = context();
  const error = LocalState.get('ADD_PRODUCT_ERROR');
  const userId = Meteor.userId();
  Meteor.subscribe('findAllCategories',userId);
  const categories = Collections.Categories.find({},{sort:{name:1}}).fetch();

  onData(null, {categories,error});

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  addProduct: actions.product.addProduct,
  clearAddProductErrors: actions.product.clearAddProductErrors,
  cancel: actions.product.cancel,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AddProduct);

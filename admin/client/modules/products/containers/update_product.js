import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import UpdateProduct from '../components/update_product.jsx';

export const composer = ({context, productId, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const userId = Meteor.userId();
  const error = LocalState.get('UPDATING_PRODUCT_ERROR');
  if(Meteor.subscribe('findSpecificProduct', userId, productId).ready()){
    if(Meteor.subscribe('findAllCategories',userId).ready()){
      const product = Collections.Products.find({_id:productId}).fetch();
      const productDetails = product[0];
      const categories = Collections.Categories.find({}).fetch();
      onData(null, {productDetails, categories,error});
    }
  }
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  updateProduct: actions.product.updateProduct,
  clearUpdateProductErrors: actions.product.clearUpdateProductErrors,
  cancel: actions.product.cancel,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UpdateProduct);

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Product from '../components/product.jsx';

export const composer = ({context, clearErrors, productId}, onData) => {
  const {Meteor, Collections} = context();
  const userId = Meteor.userId();

  if(Meteor.subscribe('findSpecificProduct', userId, productId).ready()){
    if(Meteor.subscribe('findAllCategories',userId).ready()){
      const product = Collections.Products.find({_id:productId}).fetch();
      const productDetails = product[0];
      var categories;
      var category;
      if(productDetails){
        categories = Collections.Categories.find({_id:productDetails.category_id}).fetch();
        category = categories[0];
      }
      onData(null, {clearErrors,productDetails,category});
    }
  }

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  removeProduct: actions.product.removeProduct,
  clearErrors: actions.category.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Product);

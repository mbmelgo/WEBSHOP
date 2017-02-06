import {useDeps, composeAll, composeWithTracker} from 'mantra-core';


import Details from '../components/details';

export const composer = ({context, productID}, onData) => {
  const {Meteor, Collections} = context();
  const id = productID.productID;
  if(Meteor.subscribe('allProducts', 0).ready()){
  const product = Collections.Products.findOne({_id: id});
  onData(null, {product});}
};

export const depsMapper = (context, actions) => ({
  addToCart: actions.details.addToCart,
  addAndCheckout: actions.details.addAndCheckout,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Details);

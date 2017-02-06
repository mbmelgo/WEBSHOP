import Cart from '../../core/libs/cart';

export default {
  addToCart({LocalState,FlowRouter}, name, price){
    Cart.insert({name: name, price: price}); //change later; workingg
    FlowRouter.go('/');
  },

  addAndCheckout({FlowRouter}, name, price){
    Cart.insert({name: name, price: price}); //change later; workingg
    FlowRouter.go('/checkout');
  },

  search({FlowRouter}, query){
    if(!query) FlowRouter.go('/');
    else FlowRouter.go(`/search/${query}`);
  },

  loadMore({LocalState}){
    const prev_limit = LocalState.get('LIMIT');
    return LocalState.set('LIMIT', prev_limit + 5 );
  }
}

export default {

  search({FlowRouter}, query){
    if(!query) FlowRouter.go('/');
    else FlowRouter.go(`/search/${query}`);
  },

  loadMore({LocalState}){
    const prev_limit = LocalState.get('LIMIT');
    return LocalState.set('LIMIT', prev_limit + 5 );
  },

  loadMoreCategories({LocalState}){
    const prev_limit = LocalState.get('CAT_LIMIT');
    return LocalState.set('CAT_LIMIT', prev_limit + 5);
  }
}

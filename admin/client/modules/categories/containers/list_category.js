import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ListCategory from '../components/list_category.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  LocalState.get('categoryLimit') ?  LocalState.get('categoryLimit') :  LocalState.set('categoryLimit', 3);
  LocalState.get('searchName') ?  LocalState.get('searchName') : LocalState.set('searchName', " ");

  if(Meteor.subscribe('searchCategories', LocalState.get('categoryLimit'),LocalState.get('searchName')).ready()){
    var categories;
    LocalState.get('searchName') === ' ' ? categories = Collections.Categories.find({}).fetch() :
      categories = Collections.Categories.find({name: {$regex:LocalState.get('searchName'),$options:"i"}}).fetch();
    onData(null, {clearErrors,categories, LocalState});
  }
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  loadMore: actions.category.loadMore,
  search:actions.category.search,
  clearErrors: actions.category.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ListCategory);

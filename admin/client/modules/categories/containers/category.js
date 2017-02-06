import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Category from '../components/category.jsx';

export const composer = ({context, clearErrors, categoryId}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const userId = Meteor.userId();
  const categoryLimit = LocalState.get('categoryLimit');

  LocalState.get('categoryLimit') ? LocalState.get('categoryLimit'): LocalState.set('categoryLimit', 5);

  if(Meteor.subscribe('findLimitedCategories', userId, LocalState.get('categoryLimit')).ready()){
    const category = Collections.Categories.find({_id:categoryId}).fetch();
    const categoryDetails = category[0];
    onData(null, {clearErrors,categoryDetails});
  }

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  removeCategory: actions.category.removeCategory,
  clearErrors: actions.category.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Category);

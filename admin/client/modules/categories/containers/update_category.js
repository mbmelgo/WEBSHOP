import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import UpdateCategory from '../components/update_category.jsx';

export const composer = ({context, categoryId,clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const userId = Meteor.userId();
  const error = LocalState.get('UPDATING_CATEGORY_ERROR');
  if(Meteor.subscribe('findAllCategories', userId).ready()){
    const category = Collections.Categories.find({_id:categoryId}).fetch();
    const categoryDetails = category[0];
    onData(null, {categoryDetails,error});
  }
  return
};

export const depsMapper = (context, actions) => ({
  updateCategory: actions.category.updateCategory,
  clearUpdateCategoryErrors: actions.category.clearUpdateCategoryErrors,
  cancel: actions.category.cancel,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UpdateCategory);

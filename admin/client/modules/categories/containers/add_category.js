import {useDeps, composeAll, composeWithTracker} from 'mantra-core';
import AddCategory from '../components/add_category.jsx';

export const composer = ({context,clearErrors}, onData) => {
  const {Meteor, LocalState} = context();
  const error = LocalState.get('ADD_CATEGORY_ERROR');

  Meteor.subscribe('findAllCategories', Meteor.userId());
  onData(null, {error});

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  addCategory: actions.category.addCategory,
  cancel: actions.category.cancel,
  clearAddCategoryErrors: actions.category.clearAddCategoryErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AddCategory);

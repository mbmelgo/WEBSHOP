import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import HomeWrapper from '../components/home_wrapper.jsx';

export const composer = ({context}, onData) => {
  // const {Meteor, Collections} = context();
  onData(null, {});
};

export const depsMapper = (context) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(HomeWrapper);

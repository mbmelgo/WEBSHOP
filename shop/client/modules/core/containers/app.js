import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import App from '../components/app';

export const composer = ({context}, onData) => {
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  search: actions.product.search,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(App);

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Featured from '../components/featured';

export const composer = ({context}, onData) => {

  onData(null);
};

export const depsMapper = (context) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Featured);

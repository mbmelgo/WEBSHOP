import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import SideDir from '../components/side_dir';

export const composer = ({context}, onData) => {

  onData(null, {});
};

export const depsMapper = (context) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SideDir);

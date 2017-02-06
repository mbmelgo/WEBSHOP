import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import App from '../components/app.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, FlowRouter} = context();
  const user = Meteor.users.findOne({_id: Meteor.userId()})
  onData(null, {user, FlowRouter});
};

export const depsMapper = (context) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(App);

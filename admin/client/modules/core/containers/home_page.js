import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import HomePage from '../components/home_page.jsx';

export const composer = ({context}, onData) => {
  const {Meteor} = context();
  const userId = Meteor.userId();
  const users = Meteor.users.find({_id:userId}).fetch();
  const userDetails = users[0];
  if(userDetails){
    const {emails, profile} = userDetails;
    const adminDetails = {
      name: profile.name,
      address: profile.address,
      email: emails[0].address
    }
    onData(null, {adminDetails});
  }
};

export const depsMapper = (context) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(HomePage);

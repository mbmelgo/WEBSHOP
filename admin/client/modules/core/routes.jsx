import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './containers/app.js';
import HomeWrapper from './components/home_wrapper.jsx';

import HomePage from './containers/home_page.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);



  FlowRouter.route('/admin/home', {
    name: 'home.admin',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<HomeWrapper content={<HomePage />}/>)
      });
    }
  });

  if(Meteor.userId()){
    FlowRouter.go('/admin/home/');
  }

  FlowRouter.route('/', {
    action() {
      FlowRouter.go('/admin/');
    }
  });

}

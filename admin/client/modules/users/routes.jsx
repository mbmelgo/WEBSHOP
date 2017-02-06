import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/containers/app.js';
import SignUp from './containers/sign_up.js';
import Login from './containers/login.js';
import Error404 from '../core/components/error_404.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/admin/signup', {
    name: 'admin.signup',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<SignUp />)
      });
    }
  });

  FlowRouter.route('/admin/', {
    name: 'admin.login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />)
      });
    }
  });
  
  FlowRouter.notFound = {
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Error404 />)
      });
    }
  };

}

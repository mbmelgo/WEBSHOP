import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/containers/app';
import Home from './containers/checkout'

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/checkout', {
    name: 'checkout',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });
}

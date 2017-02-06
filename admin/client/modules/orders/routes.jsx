import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/app.jsx';
import HomeWrapper from '/client/modules/core/components/home_wrapper.jsx';

import ListOrder from '/client/modules/orders/containers/order_list.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  if(!Meteor.userId()){
    FlowRouter.go('/admin/');
  }

  FlowRouter.route('/admin/list/order', {
    name: 'list.order',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<HomeWrapper content={<ListOrder />} />)
      });
    }
  });

}

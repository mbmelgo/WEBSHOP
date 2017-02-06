import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/containers/app';
import CategoryList from './containers/browse_by_wrapper';
import Home from './containers/details';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/products/:productID', {
    name: 'details',
    action(productID) {
      mount(MainLayoutCtx, {
        content: () => (<Home productID={productID} />)
      });
    }
  });

  FlowRouter.route('/browseBy/:category', {
    name: 'view-by-category',
    action(category) {
      mount(MainLayoutCtx, {
        content: () => (<CategoryList category={category} />)
      });
    }
  });
}

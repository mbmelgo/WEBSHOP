import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/containers/app.js';
import HomeWrapper from '/client/modules/core/components/home_wrapper.jsx';

import AddProduct from '/client/modules/products/containers/add_product.js';
import ListProduct from '/client/modules/products/containers/list_product.js';
import Product from '/client/modules/products/containers/product.js'
import UpdateProduct from '/client/modules/products/containers/update_product.js'

export default function (injectDeps, {FlowRouter, Meteor}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  if(!Meteor.userId()){
    FlowRouter.go('/admin/');
  }

  FlowRouter.route('/admin/add/product', {
    name: 'add.product',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<HomeWrapper content={<AddProduct />} />)
      });
    }
  });

  FlowRouter.route('/admin/list/product', {
    name: 'list.product',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<HomeWrapper content={<ListProduct />} />)
      });
    }
  });


  FlowRouter.route('/admin/view/product/:productId', {
    name: 'details.product',
    action(productId) {
      mount(MainLayoutCtx, {
        content: () => (<HomeWrapper content={<Product productId={productId.productId}/>} />)
      });
    }
  });

  FlowRouter.route('/admin/update/product/:productId', {
    name: 'update.product',
    action(productId) {
      mount(MainLayoutCtx, {
        content: () => (<HomeWrapper content={<UpdateProduct productId={productId.productId}/>} />)
      });
    }
  });
}

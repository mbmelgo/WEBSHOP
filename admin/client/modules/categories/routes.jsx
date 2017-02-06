import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/containers/app.js';
import HomeWrapper from '/client/modules/core/containers/home_wrapper.js';

import AddCategories from '/client/modules/categories/containers/add_category.js';
import ListCategories from '/client/modules/categories/containers/list_category.js';
import Category from '/client/modules/categories/containers/category.js'
import UpdateCategory from '/client/modules/categories/containers/update_category.js'

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  if(!Meteor.userId()){
    FlowRouter.go('/admin/');
  }

  FlowRouter.route('/admin/add/category', {
    name: 'add.category',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<HomeWrapper content={<AddCategories />} />)
      });
    }
  });

  FlowRouter.route('/admin/list/category', {
    name: 'list.category',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<HomeWrapper content={<ListCategories />} />)
      });
    }
  });


  FlowRouter.route('/admin/view/category/:categoryId', {
    name: 'details.category',
    action(categoryId) {
      mount(MainLayoutCtx, {
        content: () => (<HomeWrapper content={<Category categoryId={categoryId.categoryId}/>} />)
      });
    }
  });

  FlowRouter.route('/admin/update/category/:categoryId', {
    name: 'update.category',
    action(categoryId) {
      mount(MainLayoutCtx, {
        content: () => (<HomeWrapper content={<UpdateCategory categoryId={categoryId.categoryId}/>} />)
      });
    }
  });
}

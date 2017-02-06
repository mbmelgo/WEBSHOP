import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './containers/app';
import Home from './containers/home_wrapper';
import FeaturedList from './containers/feature_wrapper';
import MViewedList from './containers/mviewed_wrapper';
import SearchResult from './containers/search_wrapper';

import Error404 from './components/err_404';


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/products/featured', {
    name: 'featured',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<FeaturedList />)
      });
    }
  });

  FlowRouter.route('/products/most-viewed', {
    name: 'most-viewed',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<MViewedList />)
      });
    }
  });

  FlowRouter.route('/search/:searchTerm', {
    name: 'search',
    action(searchTerm) {
      mount(MainLayoutCtx, {
        content: () => (<SearchResult searchTerm={searchTerm} />)
      });
    }
  });

  FlowRouter.notFound = {
    name: 'not-found',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Error404/>)
      });
    }
  }

}

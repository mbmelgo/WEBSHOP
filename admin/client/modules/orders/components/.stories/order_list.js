import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import OrderList from '../order_list.jsx';

storiesOf('orders.OrderList', module)
  .add('default view', () => {
    return (
      <OrderList />
    );
  })

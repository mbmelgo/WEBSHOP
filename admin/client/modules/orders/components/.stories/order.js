import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Order from '../order.jsx';

storiesOf('orders.Order', module)
  .add('default view', () => {
    return (
      <Order />
    );
  })

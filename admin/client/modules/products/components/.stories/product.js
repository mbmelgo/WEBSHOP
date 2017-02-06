import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Product from '../product.jsx';

storiesOf('products.Product', module)
  .add('default view', () => {
    return (
      <Product />
    );
  })

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ListProduct from '../list_product.jsx';

storiesOf('products.ListProduct', module)
  .add('default view', () => {
    return (
      <ListProduct />
    );
  })

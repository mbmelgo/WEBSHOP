import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import AddProduct from '../add_product.jsx';

storiesOf('products.AddProduct', module)
  .add('default view', () => {
    return (
      <AddProduct />
    );
  })

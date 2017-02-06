import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import UpdateProduct from '../update_product.jsx';

storiesOf('products.UpdateProduct', module)
  .add('default view', () => {
    return (
      <UpdateProduct />
    );
  })

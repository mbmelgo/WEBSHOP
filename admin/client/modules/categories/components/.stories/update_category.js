import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import UpdateCategory from '../update_category.jsx';

storiesOf('categories.UpdateCategory', module)
  .add('default view', () => {
    return (
      <UpdateCategory />
    );
  })

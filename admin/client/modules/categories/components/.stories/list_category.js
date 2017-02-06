import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ListCategory from '../list_category.jsx';

storiesOf('categories.ListCategory', module)
  .add('default view', () => {
    return (
      <ListCategory />
    );
  })

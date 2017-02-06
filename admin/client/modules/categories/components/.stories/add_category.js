import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import AddCategory from '../add_category.jsx';

storiesOf('categories.AddCategory', module)
  .add('default view', () => {
    return (
      <AddCategory />
    );
  })

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Category from '../category.jsx';

storiesOf('categories.Category', module)
  .add('default view', () => {
    return (
      <Category />
    );
  })

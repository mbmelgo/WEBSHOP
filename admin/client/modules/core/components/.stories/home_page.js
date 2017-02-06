import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import HomePage from '../home_page.jsx';

storiesOf('core.HomePage', module)
  .add('default view', () => {
    return (
      <HomePage />
    );
  })

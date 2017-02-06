import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import HomeWrapper from '../home_wrapper.jsx';

storiesOf('core.HomeWrapper', module)
  .add('default view', () => {
    return (
      <HomeWrapper />
    );
  })

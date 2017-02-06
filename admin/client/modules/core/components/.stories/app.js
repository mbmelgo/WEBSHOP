import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import App from '../app.jsx';

storiesOf('core.App', module)
  .add('default view', () => {
    return (
      <App />
    );
  })

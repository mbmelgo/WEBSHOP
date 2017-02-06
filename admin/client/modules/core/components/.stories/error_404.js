import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Error404 from '../error_404.jsx';

storiesOf('core.Error404', module)
  .add('default view', () => {
    return (
      <Error404 />
    );
  })

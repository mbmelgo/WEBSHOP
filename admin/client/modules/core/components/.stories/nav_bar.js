import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import NavBar from '../nav_bar.jsx';

storiesOf('core.NavBar', module)
  .add('default view', () => {
    return (
      <NavBar />
    );
  })

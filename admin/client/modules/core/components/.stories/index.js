
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import nav_bar from './nav_bar';
import nav_bar from './nav_bar';
import home from './home';
import error_404 from './error_404';
import app from './app';
import app from './app';
import nav_bar from './nav_bar';
import nav_bar from './nav_bar';
import app from './app';
import home from './home';
import nav_bar from './nav_bar';
import home_wrapper from './home_wrapper';
import home_page from './home_page';
import home_page from './home_page';

storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>My First Button</button>
  ))
  .add('with no text', () => (
    <button></button>
  ));

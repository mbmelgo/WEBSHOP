import { configure, setAddon, addDecorator } from '@kadira/storybook';
import { disable } from 'react-komposer';

disable();

function loadStories() {
  require('../client/modules/orders/components/.stories/index.js');
  require('../client/modules/categories/components/.stories/index.js');
  require('../client/modules/products/components/.stories/index.js');
  require('../client/modules/users/components/.stories/index.js');
  // require as many as stories you need.
  require('../client/modules/core/components/.stories/index.js');
}

configure(loadStories, module);

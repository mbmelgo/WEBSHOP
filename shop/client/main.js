import {createApp} from 'mantra-core';
import initContext from './configs/context';
import {DocHead} from 'meteor/kadira:dochead';

// modules
import coreModule from './modules/core';
import productsModule from './modules/products';
import counterModule from './modules/counter';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(productsModule);
app.loadModule(counterModule);
app.init();


var title = "theShop";
DocHead.setTitle(title);

var gaScript = '/script/custom.js';
DocHead.loadScript(gaScript);

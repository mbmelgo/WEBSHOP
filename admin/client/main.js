import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import usersModule from './modules/users';
import productsModule from './modules/products';
import categoriesModule from './modules/categories';
import ordersModule from './modules/orders';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(usersModule);
app.loadModule(productsModule);
app.loadModule(categoriesModule);
app.loadModule(ordersModule);
app.init();

/* eslint no-console: "off" */

import Koa from 'koa';
import Router from 'koa-router';
import globals from './globals';
import secure from './secure';
import sessions from './sessions';
import bodyParser from './bodyParser';
import views from './views';
import helpers from './helpers';
import routes from './routes';
// import devTools from './dev-tools';

const app = new Koa();

const router = new Router();

/* Set global state */
globals(app);

/* setup session management */
sessions(app);

/* setup security measures */
secure(app, router);

/* setup body parser */
bodyParser(app);

/* setup templates */
views(app);

helpers(app);

/* setup routes */
routes(app, router);

app.listen(process.env.NODE_PORT, () => {
  console.log(`Server running at port ${process.env.NODE_PORT}`);
});

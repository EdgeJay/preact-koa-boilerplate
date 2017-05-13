import Router from 'koa-router';
import LandingController from '../controllers/LandingController';

export default function landing(router) {
  const r = new Router();

  r.get('', LandingController.getLanding);
  r.get('foo', LandingController.getLanding);
  r.get('counter', LandingController.getLanding);

  router.use('/', r.routes(), r.allowedMethods());
}

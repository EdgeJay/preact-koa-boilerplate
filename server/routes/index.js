import landing from './landing';

export default function routes(app, router) {
  landing(router);

  app.use(router.routes());
  app.use(router.allowedMethods());
}

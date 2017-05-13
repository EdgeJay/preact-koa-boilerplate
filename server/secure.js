import helmet from 'koa-helmet';
import csrf from 'koa-csrf';

export default function secure(app, router) {
  app.use(helmet());
  csrf(app);

  router.use(async (ctx, next) => {
    ctx.state.csrf = ctx.csrf;
    await next();
  });
}

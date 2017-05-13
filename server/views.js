import path from 'path';
import co from 'co';
import convert from 'koa-convert';
import _views from 'koa-views';

export default function views(app) {
  /* Template rendering using dustjs */
  app.use(convert(_views(path.resolve(__dirname, 'templates'), {
    cache: process.env.NODE_ENV === 'production',
    map: {
      html: 'dust',
    },
  })));

  /* wrap generator function into Promise */
  app.use(async (ctx, next) => {
    ctx.render = co.wrap(ctx.render.bind(ctx));
    await next();
  });
}

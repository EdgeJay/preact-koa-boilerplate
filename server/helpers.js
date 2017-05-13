import convert from 'koa-convert';
import userAgent from 'koa-useragent';

export default function helpers(app) {
  // detect client user agents
  app.use(convert(userAgent()));

  // JSON helper
  app.use(async (ctx, next) => {
    ctx.json = ({ body, code = 200, simple = false }) => {
      ctx.body = body;
      ctx.type = simple ? 'application/json;charset=utf-8' : 'application/vnd.api+json;charset=utf-8';
      ctx.status = code;
    };

    await next();
  });

  // Error catcher
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      if (err.name === 'ApiError') {
        const body = err.render();
        const code = body.errors[0].statusCode;
        ctx.json({ body, code });
      }
    }
  });
}

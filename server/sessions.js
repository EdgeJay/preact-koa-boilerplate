// import session from 'koa-generic-session';
// import redisStore from 'koa-session-ioredis';
// import convert from 'koa-convert';

export default function sessions(app) { // eslint-disable-line
  /*
  app.keys = [process.env.NODE_SECRET]; // needed for signed cookies

  app.use(convert(session({
    store: redisStore({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    }),
    key: process.env.COOKIE_NAME,
    prefix: process.env.SESSION_PREFIX,
    ttl: null, // if null ttl will follow cookie.maxAge
    cookie: {
      maxAge: 60 * 60 * 24 * 1000, // 1 day in ms
    },
  }, app)));
  */
}

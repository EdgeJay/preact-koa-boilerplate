import parser from 'koa-bodyparser';
import convert from 'koa-convert';

export default function bodyParser(app) {
  app.use(convert(parser()));
}

export default function globals(app) {
  app.use(async (ctx, next) => {
    ctx.state.assetServer = `http://${process.env.ASSETS_SERVER}`;
    ctx.state.jsAssetServer = process.env.NODE_ENV === 'development' && process.env.USE_WEBPACK_DEV_SERVER === 'true' ? `http://${process.env.WEBPACK_DEV_SERVER_URL}` : ctx.state.assetServer;
    ctx.state.jsAssetSuffix = process.env.NODE_ENV === 'production' ? '.min.js' : `.js?r=${Date.now()}`;
    await next();
  });
}

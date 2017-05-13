export default async (ctx, next) => {
  if (['POST', 'PUT', 'PATCH', 'DELETE'].indexOf(ctx.method.toUpperCase()) !== -1) {
    try {
      ctx.assertCSRF(ctx.request.body);
      ctx.state.csrfPassed = true;
    } catch (err) {
      ctx.state.csrfPassed = false;
    }

    await next();
  }
};

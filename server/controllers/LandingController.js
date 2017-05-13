export default class LandingController {
  static async getLanding(ctx) {
    await ctx.render('index');
  }
}

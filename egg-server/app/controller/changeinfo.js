const Controller = require('egg').Controller;

class Changeinfo extends Controller {
    async changeinfoList(ctx) {
        console.log(ctx, "这是什么")
        const {
            username,
            signature,
            email
        } = ctx.request.body
        const result = await ctx.service.changeinfo.changeinfoList(username, signature, email)
        ctx.body = {
            code: 1
        }
    }
    async changefile(ctx) {
        console.log(ctx.request.files);
        ctx.body = {
            code: 1
        }
    }
}
module.exports = Changeinfo
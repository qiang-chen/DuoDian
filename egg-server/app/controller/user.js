const Controller = require('egg').Controller;

class User extends Controller {
        async getinfo(ctx){
            const {user}=ctx.request.body
            const result=await ctx.service.user.getinfo(user)
            ctx.body={
               code:1,
               result
            }
        }
}
module.exports = User
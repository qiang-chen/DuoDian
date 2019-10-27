const Controller = require('egg').Controller;

class Order extends Controller {
        async getorderList(ctx){
            const {id,username}=ctx.request.body
            const result=await ctx.service.order.getorderList(id,username)
            ctx.body={
                id,
                result
            }
        }
}
module.exports = Order
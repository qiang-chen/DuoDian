// eslint-disable-next-line strict
const Controller = require("egg").Controller;

class classController extends Controller {
    async getproList() {
        const { ctx } = this;
        const result = await ctx.service.classfy.getproList();
        ctx.body = {
            code: 1,
            result
        };
    }

    async getallList() {
        const { ctx } = this;
        const { id } = ctx.request.body;
        const result = await ctx.service.classfy.getallList(id);
        ctx.body = {
            code: 1,
            result
        };
    }

    async getheadList() {
        const { ctx } = this;
        const { id } = ctx.request.body;
        const result = await ctx.service.classfy.getheadList(id);
        ctx.body = {
            code: 1,
            result
        };
    }

    async getsubprolist() {
        const { ctx } = this;
        const { id } = ctx.request.body;
        const result = await ctx.service.classfy.getsubprolist(id);
        ctx.body = {
            code: 1,
            result
        };
    }

    async changenumfn() {
        const { ctx } = this;
        const { num, type, id, m_id } = ctx.request.body;
        await ctx.service.classfy.changenumfn(num * 1, type * 1, id * 1);
        const result = await ctx.service.classfy.getallList(m_id);
        ctx.body = {
            code: 1,
            result
        };
    }
}

module.exports = classController;

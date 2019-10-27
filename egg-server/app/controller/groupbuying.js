"use strict";

const Controller = require("egg").Controller;

class groupbuyingController extends Controller {
    async groupbuyingList() {
        const { ctx } = this;
        const result = await ctx.service.groupbuying.groupbuying();
        ctx.body = {
            code: 1,
            result
        };
    }
    async groupbuyingId() {
        const { ctx } = this;
        const { id } = ctx.request.body;
        const result = await ctx.service.groupbuying.groupbuyingListId(id);
        ctx.body = {
            code: 1,
            result
        };
    }

    async addcarFn() {
        const { ctx } = this;
        const { id } = ctx.request.query;
        const result = await ctx.service.groupbuying.addcarFn(id);
        ctx.body = {
            code: 1,
            msg: "成功",
            result
        };
    }
}

module.exports = groupbuyingController;

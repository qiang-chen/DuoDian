"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        const result = await ctx.service.home.swiperFn();
        ctx.body = {
            code: 1,
            msg: "成功",
            result
        };
    }
    // 列表
    async list() {
        const { ctx } = this;
        const result = await ctx.service.home.listFn();
        ctx.body = {
            code: 1,
            msg: "成功",
            result
        };
    }
    // 加入购物车
    async addcarFn() {
        const { ctx } = this;
        const { num, id } = ctx.request.body;
        const result = await ctx.service.home.addcarFn(num, id);
        ctx.body = {
            code: 1,
            msg: "成功",
            result
        };
    }
    async tabFn() {
        const { ctx } = this;
        const { index, msg } = ctx.request.body;
        console.log(msg, 'msg');
        const result = await ctx.service.home.tabFn(index, msg);
        ctx.body = {
            code: 1,
            msg: "成功",
            result
        };
    }
}

module.exports = HomeController;

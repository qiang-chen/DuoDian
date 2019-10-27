'use strict';

const Controller = require('egg').Controller;

class SearchController extends Controller {
    async memu() {
        const { ctx } = this;
        const { seacrchtext } = ctx.request.query;
        const result = await ctx.service.search.memu(seacrchtext)
        ctx.body = {
            code: 1,
            result
        }
    }
}

module.exports = SearchController;

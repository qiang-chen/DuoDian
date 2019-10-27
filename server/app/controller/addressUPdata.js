'use strict';
const { Controller } = require('egg');

class address extends Controller {
  async getAddressList(ctx) {
    const result = await ctx.service.addressUPdata.getAddressList();
    ctx.body = {
      code: 1,
      result,
    };
  }
  async delAddressList(ctx) {
    await ctx.service.addressUPdata.delAddressList(ctx.request.body);
    ctx.body = {
      code: 1,
      msg: '删除成功',
    };
  }
  async updateAddressList(ctx) {
    await ctx.service.addressUPdata.updateAddressList(ctx.request.body);
    ctx.body = {
      code: 1,
      msg: '修改成功',
    };
  }
}
module.exports = address;

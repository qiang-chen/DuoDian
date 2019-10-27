'use strict';
const Service = require('egg').Service;
class Search extends Service {
  async search() {
    const results = await this.app.mysql.select('search');
    return results;
  }
  async allshop() {
    const results = await this.app.mysql.select('allshop');
    return results;
  }
  async getShopTypeList() {
    const results = await this.app.mysql.select('allshoptype');
    return results;
  }
}

module.exports = Search;

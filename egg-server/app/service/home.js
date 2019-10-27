/* eslint-disable no-unused-vars */
// eslint-disable-next-line strict
const Service = require('egg').Service;

class professionService extends Service {
  async swiperFn() {
    const $sql = 'select * from swiper';
    const result = await this.app.mysql.query($sql);
    return result;
  }
  async listFn() {
    const $sql = 'select * from productlist';
    const result = await this.app.mysql.query($sql);
    return result;
  }
  async addcarFn(num, id) {
    const $sql = `update productlist set num = 1,type=1 where id=${id}`;
    const result = await this.app.mysql.query($sql);
    return result;
  }
  async tabFn(index, msg) {
    // const $sql = `select * from productlist where m_id = ${index} `;
    const $sql = `select * from productlist where m_id = ${index} limit 0 , 10`;
    const result = await this.app.mysql.query($sql);
    return result;
  }
}

module.exports = professionService;

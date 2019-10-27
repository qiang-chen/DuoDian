const Service = require('egg').Service;

class shopCarService extends Service {
    async getShopCarData() {
        const $sql = 'select * from productlist where type = 1';
        const result = await this.app.mysql.query($sql);
        return result;
    }

    async updateBuyCount(num, id) {
        let $sql = `update productlist set num = ${num} where id = ${id}`;
        const result = await this.app.mysql.query($sql);
        return result;
    }

    async deleteShop(id) {
        let $sql = `update productlist set type = 0 where id = ${id}`;
        const result = await this.app.mysql.query($sql);
        return result;
    }
    async getUserAds() {
        let $sql = 'select * from count where type = "true"';
        const result = await this.app.mysql.query($sql);
        return result;
    }

    async updateUserMsg(name, phone, address, id) {
        let $sql = `update count set name = "${name}",phone = ${phone},address = "${address}" where id = ${id}`
        const result = await this.app.mysql.query($sql);
        return result;
    }
}

module.exports = shopCarService;
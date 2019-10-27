const Service = require("egg").Service;

class groupbuyingService extends Service {
    async groupbuying() {
        let results = await this.app.mysql.select("productlist");
        return results;
    }
    async groupbuyingListId(id) {
        let $sql=`SELECT * FROM productlist WHERE id = ${id}`
        let results = await this.app.mysql.query($sql);
        return results;
    }
    async addcarFn(id) {
        const $sql = `update productlist set num = 1,type=1 where id=${id}`;
        const result = await this.app.mysql.query($sql);
        return result;
      }
}

module.exports = groupbuyingService;

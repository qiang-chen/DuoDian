// eslint-disable-next-line strict
const Service = require("egg").Service;

class professionService extends Service {
    async getList() {
        let results = await this.app.mysql.select("profession");
        return results;
    }
    async clickProfession(id) {
        let results = await this.app.mysql.get("profession", { id });
        return results;
    }
    async getDate() {
        let results = await this.app.mysql.select("count");
        return results;
    }
    async updateAddress(obj) {
        let { name, phone, ind, address } = obj;
        const $sql = `Update count set name='${name}',address='${address}',phone='${phone}' where id='${ind}'`;
        await this.app.mysql.query($sql);
    }
    async addAddress(obj) {
        let { name, address, phone } = obj;
        console.log(obj);
        const $sql = "insert into `count` (name,address,phone) values (?,?,?)";
        await this.app.mysql.query($sql, [name, address, phone]);
    }
    async AddressSearch(value){
        console.log(value)
        const $sql = "select * from `count` where address like ('%'+?+'%')";
        console.log(await this.app.mysql.query($sql,[value]))
        return await this.app.mysql.query($sql,[value]);
    }
    async defaultAddress(obj){
        let {id} = obj.data
        const $sql1 = `Update count set type='false'`;
        await this.app.mysql.query($sql1);
        const $sql2 = `Update count set type='true' where id='${id}'`;
        await this.app.mysql.query($sql2);
    }
    async information(){
        const $sql = "select * from location_address"
        return await this.app.mysql.query($sql)
    }
}

module.exports = professionService;

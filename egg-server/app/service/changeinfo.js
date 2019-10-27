const Service = require("egg").Service;
class Changeinfo extends Service{
    async changeinfoList(username,signature,email) {
            const $sql = "update `info` set username=?,signature=? where emailcode=?";
            const data = await this.app.mysql.query($sql,[username,signature,email]);
            return data;
    }
}   
module.exports=Changeinfo
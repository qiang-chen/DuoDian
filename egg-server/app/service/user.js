const Service = require("egg").Service;
class User extends Service{
    async getinfo(user) {
            const $sql = "select * from info where emailcode=?";
            const data = await this.app.mysql.query($sql,[user]);
            return data;
    }
}   
module.exports=User
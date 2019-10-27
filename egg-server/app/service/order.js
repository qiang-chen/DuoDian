const Service = require("egg").Service;
class Order extends Service{
    async getorderList(id,username) {
        if(Number(id)){
            const $sql = "select * from `order` where type=? and user=?";
            const data = await this.app.mysql.query($sql,[id,username]);
            return data;
        }else{
            const $sql = "select * from `order` where user=?";
            const data = await this.app.mysql.query($sql,[username]);
            return data; 
        }   
    }
}   
module.exports=Order
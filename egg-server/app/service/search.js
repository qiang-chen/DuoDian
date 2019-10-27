const Service = require('egg').Service;

class SearchService extends Service {
    async memu(text) {
        let $sql=`SELECT * FROM productlist  where title LIKE "%${text}%"`
        let results = await this.app.mysql.query($sql);
        return results
    }

   
}

module.exports = SearchService;
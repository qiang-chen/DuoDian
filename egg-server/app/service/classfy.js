const Service = require("egg").Service;

class classfyService extends Service {
    async getproList() {
        const $sql = `select * from mainclass`;
        const data = await this.app.mysql.query($sql);
        return data;
    }

    async getallList(id) {
        const $sql = `select * from mainclass,productlist,subclass where productlist.m_id=${id} and mainclass.m_id=productlist.m_id and subclass.s_id=productlist.s_id`;
        const data = await this.app.mysql.query($sql);
        return data;
    }

    async getheadList(id) {
        const $sql = `select * from mainclass,subclass where subclass.m_id=${id} and mainclass.m_id=subclass.m_id`;
        const data = await this.app.mysql.query($sql);
        return data;
    }
    async getsubprolist(id) {
        const $sql = `select * from mainclass,productlist,subclass where productlist.s_id=${id} and mainclass.m_id=productlist.m_id and subclass.s_id=productlist.s_id`;
        const data = await this.app.mysql.query($sql);
        return data;
    }
    async changenumfn(num, types, id) {
        const $sql = `update productlist set num=${num},type=${types} where productlist.id=${id}`;
        const data = await this.app.mysql.query($sql);
        return data;
    }
}

module.exports = classfyService;

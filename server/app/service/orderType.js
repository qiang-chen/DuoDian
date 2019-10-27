'use strict';

const Service = require('egg').Service;

class orderTypeService extends Service {
    /**
         * 获取所有订单
         */
    async getAllOrder() {
        const $sql = 'select * from allOrder';
        const result = await this.app.mysql.query($sql);
        return result
    }
    /**
        * 获取待支付
        */
    async getUnpaidOrder() {
        const $sql = 'select * from allOrder where order_type=1';
        const result = await this.app.mysql.query($sql);
        return result
    }
    /**
        * 获取待发货
        */
    async getDeliverOrder() {
        const $sql = 'select * from allOrder where order_type=2';
        const result = await this.app.mysql.query($sql);
        return result
    }
    /**
        * 获取待发货
        */
    async getDonDeliverOrder() {
        const $sql = 'select * from allOrder where order_type=3';
        const result = await this.app.mysql.query($sql);
        return result
    }
    /**
        * 获取未评价
        */
    async getNotEvalOrder() {
        const $sql = 'select * from allOrder where order_type=4';
        const result = await this.app.mysql.query($sql);
        return result
    }
}

module.exports = orderTypeService;

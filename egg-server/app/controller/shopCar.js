const Controller = require("egg").Controller;

class shopCarController extends Controller {
    async getShopCarData() {
        const result = await this.ctx.service.shopCar.getShopCarData();
        this.ctx.body = {
            code: 1,
            result
        }
    }

    async updateBuyCount() {
        const { num, id } = this.ctx.request.query;
        const result = await this.ctx.service.shopCar.updateBuyCount(num, id);
        this.ctx.body = {
            code: 1,
            msg: 'update success!',
            result
        }
    }

    async deleteShop() {
        const { id } = this.ctx.request.query;
        const result = await this.ctx.service.shopCar.deleteShop(id);
        this.ctx.body = {
            code: 1,
            msg: 'update success!',
            result
        }
    }

    async getUserAds() {
        const result = await this.ctx.service.shopCar.getUserAds();
        this.ctx.body = {
            code: 1,
            result
        }
    }

    async orderType() {
        const { price, title, img, type, num, orderTime, user } = this.ctx.request.query;
        const result = await this.app.mysql.insert('order',
            {
                price: `${price}`,
                title: `${title}`,
                img: `${img}`,
                type: `${type}`,
                num: `${num}`,
                orderTime: `${orderTime}`,
                user: `${user}`
            })
        this.ctx.body = {
            code: 1,
            msg: 'add success!',
            result
        }
    }

    async updateUserMsg() {
        const { name, phone, address, id } = this.ctx.request.query;
        const result = await this.ctx.service.shopCar.updateUserMsg(name, phone, address, id);
        this.ctx.body = {
            code: 1,
            msg: 'update success!',
            result
        }
    }
};

module.exports = shopCarController;

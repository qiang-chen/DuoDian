"use strict";

const Controller = require("egg").Controller;

class professionController extends Controller {
    async getList() {
        const { ctx } = this;
        const result = await ctx.service.profession.getList();
        ctx.body = {
            code: 1,
            result
        };
    }
    async clickProfession() {
        const { ctx } = this;
        const { id } = ctx.request.query;
        const result = await ctx.service.profession.clickProfession(id);
        ctx.body = {
            code: 1,
            result
        };
    }
    async getDate() {
        const result = await this.ctx.service.profession.getDate();
        this.ctx.body = result;
    }
    async updateAddress() {
        let obj = this.ctx.request.body.params.obj;
        console.log(this.ctx.request.body.params);
        await this.ctx.service.profession.updateAddress(obj);
        this.ctx.body = {
            code: 1
        };
    }
    async addAddress() {
        let obj = this.ctx.request.body.params;
        await this.ctx.service.profession.addAddress(obj);
        this.ctx.body = {
            code: 1
        };
    }
    async AddressSearch(){
        let value = this.ctx.request.query
        const result = await this.ctx.service.profession.AddressSearch(value.value)
        this.ctx.body = {
            code: 1
        };
    }
    async defaultAddress(){
        let obj = this.ctx.request.body
        await this.ctx.service.profession.defaultAddress(obj)
        this.ctx.body = {
            code: 1
        };
    }
    async information(){
        const result = await this.ctx.service.profession.information()
        this.ctx.body={
            result
        }
    }
}

module.exports = professionController;

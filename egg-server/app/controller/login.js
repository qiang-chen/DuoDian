const Controller = require("egg").Controller;

class UserController extends Controller {
    // 获取验证码
    async getAuthCode() {
        let { val } = this.ctx.request.body;
        var Num = "";
        for (var i = 0; i < 5; i++) {
            Num += Math.floor(Math.random() * 10);
        }
        const authCode = Num;

        const email = val; // 接收者的邮箱
        const subject = "验证码";
        const text = "验证码";
        const html = `<h2>${authCode}</h2>`;

        const has_send = await this.service.login.sendMail(
            email,
            subject,
            text,
            html
        );

        if (has_send) {
            const result = await this.ctx.service.login.verifyPhone(val);
            if (result.length === 0) {
                await this.ctx.service.login.registery(val, authCode);
            } else {
                const { id } = result[0];
                await this.ctx.service.login.saveAuthCode(authCode, id);
            }
            this.ctx.status = 200;
            this.ctx.body = {
                code: 1,
                msg: "发送成功"
            };
            return;
        }
        this.ctx.status = 401;
        this.ctx.body = {
            code: 0,
            msg: "发送失败"
        };
    }
    // 登录
    async login() {
        const { phone, authCode } = this.ctx.request.body;
        const result = await this.ctx.service.login.login(phone, authCode);
        if (result.length) {
            const { id } = result[0];
            const token = await this.ctx.helper.creatToken(id);
            await this.ctx.service.login.saveToken(token, id);
            this.ctx.status = 200;
            this.ctx.body = {
                code: 1,
                uid: id,
                token,
                msg: "登录成功!"
            };
        } else {
            this.ctx.status = 401;
            this.ctx.body = {
                code: 0,
                msg: "验证码错误!"
            };
        }
    }
    async addUser() {
        const {emailcode} = this.ctx.request.body;
        const result = await this.ctx.service.login.addUser(
            emailcode
        )
        this.ctx.body = {
            code:1,
            mag:"添加成功！",
        }
    }
}

module.exports = UserController;

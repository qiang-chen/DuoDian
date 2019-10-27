const { Service } = require('egg');
const nodemailer = require('nodemailer');
const user_email = '849104995@qq.com';
const auth_code = 'lupouuljowlvbbaf';

const transporter = nodemailer.createTransport({
    service: 'qq',
    secureConnection: true,
    // port: 25,
    host: 'smtp.qq.com',
    auth: {
        user: user_email, // 账号
        pass: auth_code // 授权码
    }
});

class UserService extends Service {
    async sendMail(email, subject, text, html) {
        const mailOptions = {
            from: '校园超市<849104995@qq.com>', // 发送者,与上面的user一致
            to: email, // 接收者,可以同时发送多个,以逗号隔开
            subject, // 标题
            text, // 文本
            html
        };

        try {
            await transporter.sendMail(mailOptions);
            return true;
        } catch (err) {
            return false;
        }
    }
    // 报存验证码
    async saveAuthCode(authCode, id) {
        const $sql = 'update login set authCode=? where id=?';
        const result = await this.app.mysql.query($sql, [authCode, id]);
        return result;
    }

    // 注册
    async registery(phone, authCode) {
        const $sql = 'insert into login (phone,authCode) values (?,?)';
        const result = await this.app.mysql.query($sql, [phone, authCode]);
        return result;
    }

    // 登录
    async login(phone, authCode) {
        const $sql = 'select * from login where phone=? and authCode=?';
        const result = await this.app.mysql.query($sql, [phone, authCode]);
        return result;
    }

    // 查找手机号
    async verifyPhone(phone) {
        const $sql = 'select * from login where phone=? ';
        const result = await this.app.mysql.query($sql, [phone]);
        return result;
    }

    async verify(uid) {
        const $sql = 'select token from login where id=?';
        const result = await this.app.mysql.query($sql, [uid]);
        return result[0].token;
    }

    // 保存token
    async saveToken(token, id) {
        const $sql = 'update login set token=?,authCode="" where id=?';
        const result = await this.app.mysql.query($sql, [token, id]);
        return result[0];
    }

    async addUser(username) {
        const result = await this.app.mysql.insert('info',{emailcode:username})
        return result
    }
}



module.exports = UserService;
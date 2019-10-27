import React, { Component } from "react";
import "./index.scss";
import Header from "components/header/index";
import axios from "axios";

interface Istate {
    count: number;
    val: string;
    flag: boolean;
    time: number;
    vals: string;
    arrs: any;
}

class LoginComponents extends Component<any, Istate> {
    constructor(props: any) {
        super(props);
        const obj: any = {
            count: 0,
            val: "",
            flag: false,
            time: 1800,
            vals: "",
            arrs: []
        };
        this.state = obj;
    }
    tiao(e: any) {
        let { arrs } = this.state;
        let arr: any = document.querySelectorAll(".k");
        this.setState(
            {
                count: this.state.count + 1
            },
            () => {
                if (this.state.count > 4) {
                    return;
                }
                arr[this.state.count].focus();
            }
        );
        arrs.push(e.target.value);
        arr.forEach((item: any, index: any) => {
            this.setState({
                vals: item
            });
        });
    }

    times() {
        let countdown: any = document.getElementById("countdown");
        let { time } = this.state;
        setInterval(() => {
            time = time - 1;
            let second = time % 60;
            countdown.innerHTML = second;
            if (second === 1) {
                // let mask: any = document.getElementById("mask");
                // mask.style.display = "none";
                // this.setState({
                //     val: ""
                // });
                window.location.reload(true);
                return false;
            }
        }, 1000);
    }

    handleChange(e: any) {
        this.setState({
            val: e.target.value
        });
    }

    shows() {
        let mask: any = document.getElementById("mask");
        mask.style.display = "none";
        this.setState({
            val: ""
        });
        window.location.reload(true);
    }

    render() {
        let { flag, val } = this.state;
        return (
            <div className='wrap'>
                <Header title='校园超市'></Header>
                <main className='main'>
                    <h3>邮箱号登录</h3>
                    <div className='inputBox'>
                        <input
                            type='email'
                            placeholder='邮箱号'
                            value={this.state.val}
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className='btnBox'>
                        <button
                            type='button'
                            className='code'
                            onClick={() => {
                                this.change();
                            }}>
                            获取验证码
                        </button>
                        <p className="del" onClick={() => {
                            this.props.history.push("/home")
                        }}>取消登录</p>
                    </div>
                </main>
                <div className={flag ? "showYes mask" : "mask"} id='mask'>
                    <div className='codeBox'>
                        <h3>请输入验证码</h3>
                        <b className='b' id='b' onClick={this.shows.bind(this)}>
                            x
                        </b>
                        <p>
                            5位短信验证码已发送至<span>{val}</span>
                        </p>
                        <div className='inputBoxs'>
                            <input
                                type='text'
                                maxLength={1}
                                className='k'
                                onChange={(e: any) => {
                                    this.tiao(e);
                                }}
                            />
                            <input
                                type='text'
                                className='k'
                                maxLength={1}
                                onChange={(e: any) => {
                                    this.tiao(e);
                                }}
                            />
                            <input
                                type='text'
                                className='k'
                                maxLength={1}
                                onChange={(e: any) => {
                                    this.tiao(e);
                                }}
                            />
                            <input
                                type='text'
                                className='k'
                                maxLength={1}
                                onChange={(e: any) => {
                                    this.tiao(e);
                                }}
                            />
                            <input
                                type='text'
                                className='k'
                                maxLength={1}
                                onChange={(e: any) => {
                                    this.tiao(e);
                                }}
                            />
                        </div>
                        <div className='countaDown'>
                            <span id='countdown'></span>秒后可重新发送
                        </div>
                        <div className='signIn'>
                            <button
                                type='button'
                                onClick={this.jump.bind(this)}>
                                登录
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    jump() {
        let { vals, arrs, val } = this.state;
        if (vals === "") {
            alert("请输入验证码");
            return;
        }
        axios
            .post("/login", { phone: val, authCode: arrs.join("") })
            .then(res => {
                if (res.data.code === 1) {
                    this.props.history.push(`/main/mine?${res.data.token}`);
                    alert(res.data.msg);
                }
                if (res.data.code === 0) {
                    alert(res.data.msg);
                    return false;
                }
            });
        window.localStorage.setItem("user",val)
        axios.post("/addUser",{emailcode:window.localStorage.getItem("user")}).then(res => {
            console.log(res)
        })
    }
    change() {
        let phone = this.state.val;
        this.times();
        if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(phone)) {
            alert("邮箱输入有误");
            return false;
        } else {
            this.setState({
                flag: true
            });
        }
        axios.post("/getAuthCode", { val: this.state.val }).then(res => {
            if (res.data.code === 1) {
                alert(res.data.msg);
            }
        });
    }
}

export default LoginComponents;

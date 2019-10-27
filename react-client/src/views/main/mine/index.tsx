/*
 * @Author: YFY
 * @Date: 2019-10-14 19:15:47
 * @Last Modified by: 田欣
 * @Last Modified time: 2019-10-20 20:57:13
 */

import React, { Component } from "react";
import Header from "components/header";
import "./index.scss";
import "assets/font/iconfont.css";
import { Modal, WhiteSpace, WingBlank,Button} from "antd-mobile";
import api from'api/index';

const operation = Modal.operation;
const imgs = require("assets/img/timg.jpg");

const alert = Modal.alert;
export class mine extends Component<any, any> {
    state = {
        info:{}
    };
    componentDidMount() {
        if (!window.localStorage.getItem("user")) {
            this.props.history.push("/login");
        }
        api.postinfo({user:window.localStorage.getItem('user')}).then(res=>{
            this.setState({
                info:res.result[0]
            })
        })
    }
    
   showAlert = () => {
        const alertInstance = alert('退出登录', '不再逛逛吗？？？', [
          { text: '留下来', onPress: () => console.log('cancel'), style: 'default' },
          { text: '去意已决', onPress: () =>{
              window.localStorage.clear()
              this.props.history.push('/login')
            } },
        ]);
        setTimeout(() => {
          // 可以调用close方法以在外部close
          console.log('auto close');
          alertInstance.close();
        }, 500000);
      };
    render() {
        const{info}=this.state
        return (
            <div className='mine'>
                <Header title='校园超市'></Header>
                <div className='top'>
                    <div className='top1'>
                        
                        <div className='left'>  
                             <h2 style={{display:'inline-block',overflow:'hidden',width:'200px',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>{info.username?info.username:`用户${window.localStorage.getItem('user')}`}</h2> 
                            <span style={{display:'inline-block',overflow:'hidden',width:'200px',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>{info.signature?info.signature:'这个人很懒什么都没有留下'}</span>
                        </div>  
                        <WingBlank size='lg'>
                        <WhiteSpace size='lg' />
                            <div className='right'>
                                <img
                                    src={imgs}
                                    alt=''
                                    onClick={() =>
                                        operation([
                                            {
                                                text: "更改个人信息",
                                                onPress: () =>
                                                    this.props.history.push(
                                                        "/changeinfo"
                                                    )
                                            }
                                        ])
                                    }
                                />
                            </div>
                            <WhiteSpace size='lg' />
                        </WingBlank>
                    </div>
                </div>
                <div className='card'>
                    <div className='t'>
                        <h3>我的订单</h3>
                        <p onClick={() => this.all.bind(this)(0)}>查看全部></p>
                    </div>
                    <div className='bottom'>
                        <ul>
                            <li>
                                <dl onClick={() => this.pay.bind(this)(1)}>
                                    <dt className='iconfont icon-qianbao'></dt>
                                    <dd>代付款</dd>
                                </dl>
                            </li>
                            <li>
                                <dl
                                    onClick={() =>
                                        this.distribution.bind(this)(2)
                                    }>
                                    <dt className='iconfont icon-gongzuojilu'></dt>
                                    <dd>代配送</dd>
                                </dl>
                            </li>
                            <li>
                                <dl onClick={() => this.shipment.bind(this)(3)}>
                                    <dt className='iconfont icon-daishouhuo-01'></dt>
                                    <dd>已发货</dd>
                                </dl>
                            </li>
                            <li>
                                <dl
                                    onClick={() =>
                                        this.afterSales.bind(this)(4)
                                    }>
                                    <dt className='iconfont icon-31'></dt>
                                    <dd>退款售后</dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='card2'>
                    <ul>
                        <li>
                            <span>我的优惠券</span>{" "}
                            <p
                                className='red'
                                onClick={this.goyouhui.bind(this)}>
                                {info.discountcoupon}张未使用
                            </p>
                        </li>
                        <li  onClick={() =>
                                        operation([
                                            {
                                                text: "符合国家ISO标准"
                                               
                                            }
                                        ])
                                    }>资质规则</li>
                        <li>
                            <span>联系客服</span>{" "}
                            <a href='tel:19800333152'>123-123-123</a>
                        </li>
                    </ul>
                   
                </div>
                <WingBlank size="lg">
                        <Button onClick={this.showAlert} style={{width:'300px',background:'red',marginTop:'50px',color:'white'}}>退出登录</Button>
                </WingBlank>
            </div>
        );
    }
    pay(str: any) {
        this.props.history.push(`/main/order/${str}`);
    }
    distribution(str: any) {
        this.props.history.push(`/main/order/${str}`);
    }
    shipment(str: any) {
        this.props.history.push(`/main/order/${str}`);
    }
    afterSales(str: any) {
        this.props.history.push(`/main/order/${str}`);
    }
    all(str: any) {
        this.props.history.push(`/main/order/${str}`);
    }
    goyouhui() {
        this.props.history.push("/youhui");
    }
}

export default mine;

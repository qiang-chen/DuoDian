import React, { Component } from "react";
import Swiper from "./swiper/index";
import Fenx from "./fenx/index";
import Goum from "./goum/index";
import Shangp from "./shangp/index";
import { NavLink } from "react-router-dom";
import Cain from "./cain/index";
import api from "api/index";
import "./index.scss";
import "assets/font/iconfont.css";

export default class index extends Component {
    state = {
        count: 0,
        detailobj: null,
        imgList: "",
        price:''
    };

    getChildrenMsg(result: any, msg: any) {
        this.setState({
            count: msg
        });
    }
    componentDidMount() {
        const id = this.props.location.state.index;
        api.postDetaillist({ id }).then(res => {
            this.setState(
                {
                    detailobj: res.result,
                    imgList: res.result[0].imgList
                },
                () => {
                    console.log(this.state.detailobj, this.state.imgList);
                    this.state.detailobj.map((item,index)=>{
                        this.setState({
                            price:item.price
                        },()=>{
                            console.log(this.state.price,'item')
                        })
                    })
                }
            );
        });
    }
    render() {
        const { detailobj, imgList } = this.state;
        return (
            <div className='group'>
                <div className='group-wrap'>
                    <div className='group-header'>
                        <h3>商品详情</h3>
                    </div>
                    <div className='group-main'>
                        <Swiper imgList={imgList}></Swiper>
                        <Fenx detailobj={detailobj}></Fenx>
                        <div className='group-xiaob'>
                            <h3>//小编推荐//</h3>
                            <span>
                                源自海南自建果园，源头空运直供，实现从采摘到您的拨开享用仅时隔12小时，真正让您在遥远的北方依
                            </span>
                        </div>
                        <Goum></Goum>
                        <Shangp {...this.props}></Shangp>
                        <Cain {...this.props} parent={this}></Cain>
                    </div>
                    <div className='group-footer'>
                        <div className='group-l'>
                            <div className='l-l'>
                                <span>
                                    <i className='iconfont icon-shouye'></i>
                                </span>
                                <span className='active'>
                                    <NavLink to='/main/home'>首页</NavLink>
                                </span>
                            </div>
                            <div className='l-r'>
                                <span>
                                    <i className='iconfont icon-gouwuche'></i>
                                    <span>
                                        {this.state.count ? (
                                            <b>{this.state.count}</b>
                                        ) : null}
                                    </span>
                                </span>
                                <span className='active'>
                                    <NavLink to='/main/castShopCar'>
                                        购物车
                                    </NavLink>
                                </span>
                            </div>
                        </div>
                        <div className='group-r'>
                            <div
                                className='r-r'
                                onClick={() => {
                                    this.props.history.push("/sureCast", {
                                        // castData:this.state.detailobj,imgdata:this.state.imgList
                                        shopData: this.state.detailobj,
                                        total: this.state.price
                                    });
                                }}>
                                直接购买
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

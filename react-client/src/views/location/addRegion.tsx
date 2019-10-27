import React, { Component } from "react";
import { Icon } from "antd-mobile";
import "./addRegionCss/index.css";
import "assets/font/iconfont.css";
import LocationItem from "components/location/locationItem";
import ItemInfo from "components/location/itemInfo";
import BScroll from "better-scroll";
import axios from "axios";
import {
    Toast,
    Modal,
    Button,
    WingBlank,
    WhiteSpace,
    InputItem
} from "antd-mobile";

export default class addRegion extends Component {
    state = {
        Date: [],
        name: "",
        phone: "",
        address: "",
        hasError: false,
        isShow: false,
        newArr:[]
    };
    showToast() {
        let { name, phone, address } = this.state;
        if (name && phone && address) {
            console.log(this.state);
            axios
                .post("/addAddress", {
                    params: {
                        name: this.state.name,
                        address: this.state.address,
                        phone: this.state.phone
                    }
                })
                .then(({ data }) => {
                    console.log(data);
                    if (data.code == 1) {
                        axios.get("/getDate").then(({ data }) => {
                            this.setState({
                                Date: data
                            });
                        });
                        this.setState({
                            isShow: false
                        });
                        Toast.info("添加成功", 1);
                    } else {
                        Toast.info("添加失败", 1);
                    }
                });
        } else {
            alert("请输入有效值");
        }
    }
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info("Please enter 11 digits");
        }
    };
    onChange = value => {
        if (value.replace(/\s/g, "").length < 11) {
            this.setState({
                hasError: true
            });
        } else {
            this.setState({
                hasError: false
            });
        }
        this.setState({
            phone: value
        });
    };
    onChange1 = value => {
        this.setState({
            name: value
        });
    };
    onChange2 = value => {
        this.setState({
            address: value
        });
    };
    componentDidMount() {
        const wrapper: any = document.querySelector(".count");
        //选中DOM中定义的 .wrapper 进行初始化
        const scroll: any = new BScroll(wrapper, {
            click: true, // better-scroll 默认会阻止浏览器的原生 click 事件
            scrollY: true //开启竖向滚动
        });
        axios.get("/getDate").then(({ data }) => {
            this.setState({
                Date: data
            });
        });
    }
    render() {
        return (
            <div className='box'>
                <div
                    style={{
                        height: "45px",
                        background: "#eee",
                        lineHeight: "45px",
                        textAlign: "center",
                        borderBottom: "1px solid #ccc"
                    }}>
                    校园超市
                </div>
                <div className='main1'>
                    <p className='search'>
                        <span>北京<i className="iconfont icon-angle-right"></i></span>
                        <input type='text' placeholder='请输入收货地址' onChange={(e)=>{
                            e.persist()
                            let value:any = e.target.value
                             // axios.get("/AddressSearch",{
                            //     params:{
                            //         value:str
                            //     }
                            // }).then(({data})=>{
                            //     console.log(data)
                            // })
                            let arr:any = this.state.Date.filter((item,index)=>{
                               if(item.name.indexOf(value)!=-1){
                                   return item
                               }else if(item.address.indexOf(value)!=-1){
                                   return item
                               }else if(item.phone.indexOf(value)!=-1){
                                    return item
                               }
                            })
                            this.setState({
                                newArr:arr
                            })
                        }}/>
                        <Icon type='search' className='Icon' />
                    </p>
                    <p
                        style={{
                            marginTop: "10px",
                            borderTop: "10px solid #eee"
                        }}
                        className='p'
                        onClick={() => {
                            this.props.history.push("/locationNow");
                        }}>
                        <i className='iconfont icon-address'></i> 定位到当前位置
                    </p>
                    <div className='count'>
                        <div>
                            {
                                this.state.newArr.length?
                                this.state.newArr.map((item, index) => {
                                    return (
                                        <ItemInfo
                                            data={item}
                                            history={this.props.history}
                                            key={index}
                                        />
                                    );
                                }):this.state.Date.map((item, index) => {
                                    return (
                                        <ItemInfo
                                            data={item}
                                            history={this.props.history}
                                            key={index}
                                        />
                                    );
                                })
                        }
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        height: "45px",
                        background: "#eee",
                        textAlign: "center",
                        lineHeight: "45px",
                        color: "red"
                    }}
                    onClick={() => {
                        this.setState({
                            isShow: true
                        });
                    }}>
                    <i className='iconfont icon-jia'></i>添加地址
                </div>
                {this.state.isShow && (
                    <div
                        className='shade'
                        onClick={e => {
                            e.persist();
                            if (e.target.className == "shade") {
                                this.setState({
                                    isShow: false
                                });
                            }
                        }}>
                        <div className='son'>
                            <InputItem
                                type='text'
                                placeholder='请输入你的姓名'
                                onChange={this.onChange1}
                                value={this.state.name}>
                                {" "}
                                姓名
                            </InputItem>
                            <InputItem
                                type='phone'
                                placeholder='请输入你的手机号'
                                error={this.state.hasError}
                                onErrorClick={this.onErrorClick}
                                onChange={this.onChange}
                                value={this.state.phone}>
                                手机号码
                            </InputItem>
                            <InputItem
                                type='text'
                                placeholder='请输入你的地址'
                                onChange={this.onChange2}
                                value={this.state.address}>
                                {" "}
                                地址
                            </InputItem>
                            <Button type="primary" onClick={this.showToast.bind(this)}>
                                确认提交
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

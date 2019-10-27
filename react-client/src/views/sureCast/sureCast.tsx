import React, { Component } from "react";
import "./index.scss";
import bianji from "assets/img/bianji.png";
import axios from "axios";
import { Modal } from "antd-mobile";
import DataPicker from "components/castShopCar/dataPicker";

const alert = Modal.alert;

export default class sureCast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopData: [],
            userMsg: [],
            totalPrice: "",
            orderTime: "",
            beizhu: ''
        };
    }
    componentDidMount() {
        this.setState({
            shopData: this.props.history.location.state.shopData,
            totalPrice: this.props.history.location.state.total
        });
        axios.get("/shopCar/getUserAds").then(({ data }) => {
            console.log(data);
            this.setState(
                {
                    userMsg: data.result
                },
                () => {
                    console.log(this.state.userMsg);
                }
            );
        });
        if (!window.localStorage.getItem("user")) {
            this.props.history.push("/login");
        }
    }

    sureCastFn() {
        if (sessionStorage.getItem('pickerTime')) {
            alert("支付", "确认付款", [
                {
                    text: "取消",
                    onPress: () => {
                        this.state.shopData.map((item, index) => {
                            axios
                                .get(
                                    `/shopCar/orderType?price=${item.price}&title=${item.title}&img=${item.imgUrl}&type=1&num=${item.num}&orderTime=${sessionStorage.getItem('pickerTime')}&user=${localStorage.getItem('user')}`
                                )
                                .then(res => { });
                        });
                        this.props.history.push("/main/order");
                    }
                },
                {
                    text: "确定",
                    onPress: () => {
                        {
                            this.state.shopData.map((item, index) => {
                                axios
                                    .get(
                                        `/shopCar/orderType?price=${item.price}&title=${item.title}&img=${item.imgUrl}&type=2&num=${item.num}&orderTime=${sessionStorage.getItem('pickerTime')}&user=${localStorage.getItem('user')}`
                                    )
                                    .then(res => { });
                            });
                            this.props.history.push("/main/order");
                        }
                    }
                }
            ]);
        } else {
            alert("日期", "请选择配送日期", [
                {
                    text: "取消",
                    onPress: () => { }
                },
                {
                    text: "确定",
                    onPress: () => { }
                }
            ]);
        }

    }

    resvies(msg) {
        let ordertimes = msg
            .toLocaleDateString()
            .split("/")
            .join("-");
        this.setState({
            orderTime: ordertimes
        });
    }

    bianjiFn(item) {
        this.props.history.push("/bianji", item.id);
    }

    render() {
        return (
            <div className='sureCast'>
                {console.log(this.state.orderTime, "45211")}
                <header>
                    <div className='topheader'>
                        <span
                            onClick={() => {
                                this.props.history.push("/main/castShopCar");
                            }}>
                            返回
                        </span>
                        <span>订单确认</span>
                        <span></span>
                    </div>
                </header>
                <section>
                    {this.state.userMsg.map((item, index) => {
                        return (
                            <div className='userAddress' key={index}>
                                <div className='userMsg'>
                                    <span>
                                        {item.name} {item.phone}
                                    </span>
                                    <span
                                        style={{
                                            color: "gray",
                                            fontSize: "13px",
                                            marginTop: "5px"
                                        }}>
                                        {item.address}
                                    </span>
                                </div>
                                <div
                                    className='bianji'
                                    onClick={this.bianjiFn.bind(this, item)}>
                                    <img src={bianji} alt='' />
                                </div>
                            </div>
                        );
                    })}
                    <div className='peisongfangshi'>
                        <span>配送方式</span>
                        <span>多点配送</span>
                    </div>

                    <DataPicker onChildTime={this.resvies.bind(this)} />

                    <div className='peisongfangshi'>
                        <span>在线支付</span>
                        <span className='duicon'>√</span>
                    </div>
                    <div className='youuhi'>
                        <span>
                            优惠券/优惠码{" "}
                            <span
                                className='selectTime'
                                onClick={() => {
                                    this.props.history.push("/youhui");
                                }}>
                                select
                            </span>{" "}
                        </span>
                    </div>
                    <div className='beizhu'>
                        <span>备注</span>
                        <input type='text' placeholder='请输入备注信息' value={this.state.beizhu} onChange={(e) => {
                            this.setState({
                                beizhu: e.target.value
                            })
                        }} />
                    </div>
                    <div className='dingdanPrice'>
                        <span className='ddPSpan'>订单价格</span>
                        <span className='shangpinjine'>
                            <div>
                                <span>商品金额</span>
                                <span>￥{this.state.totalPrice}</span>
                            </div>
                            <div>
                                <span>促销优惠</span>
                                <span>￥0.00</span>
                            </div>
                            <div>
                                <span>基础运费</span>
                                <span>￥0.00</span>
                            </div>
                        </span>
                        <span className='nowPrice'>
                            <span>实际支付</span>
                            <span>￥{this.state.totalPrice}</span>
                        </span>
                    </div>
                    <>
                        {this.state.shopData.map((item, index) => {
                            return (
                                <div className='carList'>
                                    <div className='articleImg'>
                                        <div className='img'>
                                            <img src={item.imgUrl} alt='' />
                                        </div>
                                    </div>
                                    <div className='rightMsg'>
                                        <span>{item.title}</span>
                                        <span className='guige'>
                                            规格:1.2kg/盒
                                        </span>
                                        &nbsp;
                                        <div className='artcPrice'>
                                            <span>
                                                <span className='newPrice'>
                                                    ￥{item.price}{" "}
                                                </span>
                                                <span className='oldPrice'>
                                                    ￥{item.oldPrice}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        <div className='peisongfangshi'>
                            <span>发票</span>
                            <span>如何开发票？</span>
                        </div>
                    </>
                </section>
                <footer>
                    <div className='bottomLis'>
                        <div className='lastPrice'>
                            <span>
                                总价:{" "}
                                <span
                                    style={{
                                        color: "#f57f31",
                                        fontWeight: "bold"
                                    }}>
                                    ￥{this.state.totalPrice}
                                </span>
                            </span>
                            <span>
                                <div
                                    className='castBtn'
                                    onClick={this.sureCastFn.bind(this)}>
                                    提交订单
                                </div>
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

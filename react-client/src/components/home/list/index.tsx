import React, { Component } from "react";
import "./index.scss";
import Iconshop from "../iconShop/index";
import Axios from "axios";
import { Toast, WhiteSpace, WingBlank, Button } from "antd-mobile";
// import { inject, observer } from "mobx-react";

// @inject("List")
// @observer

export default class index extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            dataList: "",
            count: "",
            num: 0,
            some: 5
        };
    }
    successToast() {
        Toast.success("join success !!!", 1);
    }
    componentDidMount() {
        let somes = this.context;
        Toast.loading("Loading...", 30, () => {
            // console.log("Load complete !!!");
        });
        setTimeout(() => {
            Toast.hide();
        }, 1000);
    }
    // static getDerivedStateFromProps(nextProps: any) {
    //     // console.log(nextProps, '新生命在周期的改变');
    //     return {
    //         dataList: nextProps.List.listData
    //     };
    // }

    // componentWillReceiveProps(props: any) {
    //     // console.log(props, 'props的更新');
    // }

    addCar(type: any, id: any) {
        this.setState(
            {
                count: ++this.state.num
            }
        );
        Axios.post("/home/addcar", { id: id, num: this.state.count }).then(
            res => {}
        );
    }
    detailFn(index: any) {
        this.props.props.props.history.push({
            pathname: "/groupbuying",
            state: { index }
        });
    }
    loadFn() {
        this.setState(
            {
                some: this.state.some + 5
            }
        );
        this.props.clickFn(this.state.some)
    }
    render() {
        return (
                <div>
                    {
                        this.props.list && this.props.list.map((item: any, index: any) => {
                            return (
                                <div className='carList' key={index}>
                                    <div className='articleImg'>
                                        <div className='img'>
                                            <img src={item.imgUrl} alt='' />
                                        </div>
                                    </div>
                                    <div
                                        className='rightMsg'
                                        onClick={this.detailFn.bind(
                                            this,
                                            item.id
                                        )}>
                                        <span>{item.title}</span>
                                        <span className='guige'>
                                            规格:{item.spec}kg/盒
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
                                    <div
                                        className='addcar'
                                        onClick={this.addCar.bind(
                                            this,
                                            item.type,
                                            item.id
                                        )}>
                                        <WingBlank>
                                            <WhiteSpace />
                                            <Button
                                                className='button'
                                                onClick={this.successToast.bind(
                                                    this
                                                )}>
                                                <Iconshop></Iconshop>
                                            </Button>
                                        </WingBlank>
                                    </div>
                                </div>
                            );
                        })}
                    {/* <div onClick={this.loadFn.bind(this)}>点击加载更多</div> */}
                </div>
        );
    }
    value(value: any) {
        throw new Error("Method not implemented.");
    }
}

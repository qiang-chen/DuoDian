import React, { Component } from "react";
// import "../mock/index";
import axios from "axios";
import "assets/font/iconfont.css";

interface Iprops {
    parent: any;
}
export default class index extends Component<Iprops> {
    constructor(props: any) {
        super(props);
    }
    state = {
        count: 0,
        dataList: ""
    };
    componentDidMount() {
        axios.get("/home/list").then(res => {
            this.setState({
                dataList: res.data.result
            });
        });
    }
    addCar(type: any, id: any) {
        axios.post("/home/addcar", { id: id }).then(res => {});
    }
    detailFn(index: any) {
        this.props.history.push({ pathname: "/groupbuying", state: { index } });
    }
    gouw() {
        this.setState({
            count: ++this.state.count
        });
        this.props.parent.getChildrenMsg(this, this.state.count);
    }
    addcarFn(item){
        axios.get(`/groupbuying/addcarFn?id=${item.id}`)
    }
    render() {
        return (
            <div className='group-cain'>
                <h3>猜你喜欢</h3>
                <div className='cain-box'>
                    {this.state.dataList &&
                        this.state.dataList.map((item: any, index: any) => {
                            return (
                                <dl
                                    key={index}
                                    onClick={this.detailFn.bind(
                                        this,
                                        item.index
                                    )}>
                                    <dt>
                                        <img src={item.imgUrl} alt=''/>
                                    </dt>
                                    <dd>
                                        <p>{item.title}</p>
                                        <div>
                                            <span>
                                                <p className='newPrice'>
                                                    ￥{item.price}
                                                </p>
                                                <p className='oldPrice'>
                                                    ￥{item.oldPrice}
                                                </p>
                                            </span>
                                            <span onClick={() => this.gouw()}>
                                                <i className='iconfont icon-gouwuche' onClick={this.addcarFn.bind(this,item)}></i>
                                            </span>
                                        </div>
                                    </dd>
                                </dl>
                            );
                        })}
                </div>
            </div>
        );
    }
}

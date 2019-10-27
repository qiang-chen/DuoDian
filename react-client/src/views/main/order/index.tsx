import React, { Component } from "react";
import Header from "components/header";
import { Tabs, WhiteSpace, Badge } from "antd-mobile";
import api from "api/index";
import "./index.scss";

const tabs = [
    { title: <Badge text={0}>全部</Badge> },
    { title: <Badge text={0}>待付款</Badge> },
    { title: <Badge text={0}>待配送</Badge> },
    { title: <Badge>已发货</Badge> },
    { title: <Badge>退款售后</Badge> }
];
export class Order extends Component<any, any> {
    state = {
        list: [],
        tobList: []
    };
    componentDidMount() {
        api.postorderList({
            id: Number(this.props.location.pathname.split("/")[3]),
            username:window.localStorage.getItem('user')
        }).then(res => {
            this.setState({
                list: res.result
            });
        });
    }
    render() {
        const { list } = this.state;
        return (
            <div className='wrap'>
                <Header title='校园超市'></Header>
                <div className='main'>
                    <Tabs
                        tabs={tabs}
                        initialPage={Number(
                            this.props.location.pathname.split("/")[3]
                        )}
                        onChange={(tab, index) => {
                            api.postorderList({ id: index , username:window.localStorage.getItem('user')}).then(res => {
                                this.setState({
                                    list: res.result
                                });
                            });
                        }}
                        onTabClick={(tab, index) =>
                            api.postorderList({ id: index, username:window.localStorage.getItem('user') }).then(res => {
                                this.setState({
                                    list: res.result
                                });
                            })
                        }>
                        <div
                            style={{
                                paddingLeft: "20px",
                                paddingRight: "20px",
                                paddingTop: "20px",
                                height: "580px",
                                backgroundColor: "#fff"
                            }}>
                            <ul>
                                {list.map((item: any, index: any) => {
                                    return (
                                        <li key={index}>
                                            <dl>
                                                <dt>
                                                    <img
                                                        src={item.img}
                                                        alt=''
                                                    />
                                                </dt>
                                                <dd>
                                                    <span>
                                                        {item.title}X{item.num}
                                                    </span>
                                                    <span
                                                        style={{
                                                            color: "red"
                                                        }}>
                                                        ￥{item.price}
                                                    </span>
                                                </dd>
                                            </dl>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </Tabs>
                    <WhiteSpace />
                </div>
            </div>
        );
    }
}

export default Order;

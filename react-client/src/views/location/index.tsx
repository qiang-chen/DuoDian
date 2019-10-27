import React, { Component } from "react";
import "./indexCss/index.css";
import { Icon } from "antd-mobile";
import BMap from "BMap";
import LocationItem from "components/location/locationItem";
import axios from "axios";

export default class index extends Component {
    state = {
        data: "",
        all: "",
        isShow: false
    };
    dingWei(obj) {
        var map = new BMap.Map("orderDetailMap"); // 创建Map实例
        var point = new BMap.Point(obj.x, obj.y);
        map.centerAndZoom(point, obj.scale); // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true); //启用滚轮放大缩小，默认禁用
        map.enableDragging(); //开启拖拽
        map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
        //缩放
        var navigationControl = new BMap.NavigationControl({
            // 靠左上角位置
            anchor: BMAP_ANCHOR_TOP_LEFT,
            // LARGE类型
            type: BMAP_NAVIGATION_CONTROL_LARGE,
            // 启用显示定位
            enableGeolocation: true
        });
        map.addControl(navigationControl);
        //标注
        var marker = new BMap.Marker(point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    }
    componentDidMount() {
        //获取所有的地址数据
        axios.get("/location_address").then(({ data }) => {
            let obj = data.result.filter(item => {
                return item.type == "true";
            })[0];
            this.setState({
                data: obj,
                all: data.result
            });
            this.dingWei(obj);
        });
    }
    render() {
        let { data, all } = this.state;
        return (
            <div className='box' style={{ height: "100%" }}>
                {/* 头部 */}
                <div
                    style={{
                        width: "100%",
                        height: "45px",
                        textAlign: "center",
                        lineHeight: "45px"
                    }}>
                    校园超市
                </div>

                <div
                    style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                    {/* 中间定位 */}
                    <div
                        style={{
                            height: "255px",
                            position: "relative",
                            background: "#eee"
                        }}>
                        <div className='search'>
                            <span
                                onClick={e => {
                                    e.persist();
                                    this.setState({
                                        isShow: !this.state.isShow
                                    });
                                }}>
                                {data && data.name ? data.name : "八维"}＞
                            </span>

                            <input type='text' placeholder='请输入收货地址' />
                            <Icon type='search' className='Icon' />
                            {this.state.isShow && (
                                <ul className='ul'>
                                    {all &&
                                        all.map((item, index) => {
                                            if (item.type == "false") {
                                                return (
                                                    <li
                                                        key={item.id}
                                                        onClick={e => {
                                                            e.persist();
                                                            console.log(
                                                                e.target
                                                                    .innerText
                                                            );
                                                            let New: any = all.map(
                                                                item => {
                                                                    if (
                                                                        item.name ==
                                                                        e.target
                                                                            .innerText
                                                                    ) {
                                                                        return {
                                                                            ...item,
                                                                            type:
                                                                                "true"
                                                                        };
                                                                    } else {
                                                                        return {
                                                                            ...item,
                                                                            type:
                                                                                "false"
                                                                        };
                                                                    }
                                                                }
                                                            );
                                                            console.log(New);
                                                            let obj = New.filter(
                                                                item => {
                                                                    return (
                                                                        item.type ==
                                                                        "true"
                                                                    );
                                                                }
                                                            )[0];
                                                            this.setState(
                                                                {
                                                                    all: New,
                                                                    isShow: false,
                                                                    data: obj
                                                                },
                                                                () => {
                                                                    this.dingWei(
                                                                        this
                                                                            .state
                                                                            .data
                                                                    );
                                                                }
                                                            );
                                                        }}>
                                                        {item.name}
                                                    </li>
                                                );
                                            }
                                        })}
                                </ul>
                            )}
                        </div>
                        <div
                            id='orderDetailMap'
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                zIndex: 0
                            }}></div>
                    </div>
                    {/* 地址列表 */}
                    <div
                        style={{
                            flex: "1",
                            overflow: "auto",
                            paddingLeft: "15px",
                            paddingRight: "15px"
                        }}>
                        <LocationItem history={this.props.history} />
                        <LocationItem history={this.props.history} />
                        <LocationItem history={this.props.history} />
                        <LocationItem history={this.props.history} />
                        <LocationItem history={this.props.history} />
                        <LocationItem history={this.props.history} />
                    </div>
                </div>
            </div>
        );
    }
}

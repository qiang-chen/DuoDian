/*
 * @Author: sunmiao
 * @Date: 2019-10-11 20:24:28
 * @Last Modified by: lly
 * @Last Modified time: 2019-10-18 13:33:30
 */

import { Carousel, WingBlank } from "antd-mobile";
import React, { Component } from "react";
import "./index.scss";
import api from "api/index";

class swiper extends React.Component<any, any, any> {
    state = {
        datas: [],
        imgHeight: "176",
        swiper_list: ""
    };
    componentDidMount() {
        setTimeout(() => {
            api.swiperList().then((res: any) => {
                let a: { result: any[] } = res.result;
                this.setState({
                    datas: res.result
                });
            });
        }, 100);
    }

    render() {
        return (
            <WingBlank>
                <Carousel autoplay={false} infinite>
                    {this.state.datas.map((val: any) => (
                        <a
                            key={val}
                            // href='http://www.alipay.com'
                            style={{
                                display: "inline-block",
                                width: "100%",
                                height: this.state.imgHeight
                            }}>
                            <img
                                src={val.list_img}
                                alt=''
                                style={{ width: "100%", verticalAlign: "top" }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event("resize"));
                                    this.setState({ imgHeight: "auto" });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}

export default swiper;

import React, { Component } from "react";
import "./locationItem.css";

export default class locationItem extends Component {
    render() {
        return (
            <div
                className='itemContent'
                onClick={() => {
                    this.props.history.push("/main/home");
                }}>
                <p>北京市八维研修学院传媒学院</p>
                <p className='small'>
                    北京市海淀区唐家岭东路与唐家岭交叉路口东南100米
                </p>
            </div>
        );
    }
}

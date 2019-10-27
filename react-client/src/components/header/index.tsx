import React, { Component } from "react";
import "./index.scss";
import "assets/font/iconfont.css";

interface Hprops {
    title: string;
}

class header extends Component<Hprops> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return <div className='header'><span onClick={this.goup} className='iconfont icon-xiangzuo'></span>{this.props.title}<span></span></div>;
    }
    goup() {
        window.history.go(-1)

    }
}

export default header;

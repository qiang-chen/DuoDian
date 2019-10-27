import React, { Component } from "react";
import axios from "axios";
import "../mock/index";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    chakan() {
        console.log(111);
    }
    componentWillMount() {
        axios.get("/data").then(res => {
            this.setState({
                data: res.data
            });
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div className='group-goum'>
                <div className='goum-top'>
                    <span>购买记录</span>
                    <span>
                        共<p>22</p>人购买
                    </span>
                </div>
                <div className='goum-bottom'>
                    <div className='goum-t'>
                        {data.map((item, index) => {
                            return (
                                <dl key={index}>
                                    <dt>
                                        <span>
                                            <img src={item.img} alt='' />
                                        </span>
                                        <span>
                                            <h3>{item.title}</h3>
                                            <p>{item.rili}</p>
                                        </span>
                                    </dt>
                                    <dd>
                                        <span>
                                            购买<p>1</p>件
                                        </span>
                                    </dd>
                                </dl>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

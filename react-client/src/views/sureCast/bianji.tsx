import React, { Component } from 'react'
import './bianji.scss'
import axios from 'axios'

export default class bianji extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameVal: '',
            phoneVal: '',
            addressVal: ''
        }
    }


    render() {
        return (
            <div className="bianji">
                <header>
                    <div className="topheader">
                        <span onClick={
                            () => {
                                this.props.history.goBack()
                            }
                        }>返回</span>
                        <span style={{fontSize:"18px"}}>编辑</span>
                        <span></span>
                    </div>
                </header>
                <section>
                    <div className="main">
                        <div className="name">
                            <span>姓名：</span>
                            <input type="text" placeholder='请输入姓名'
                                value={this.state.nameVal}
                                onChange={(e) => {
                                    this.setState({
                                        nameVal: e.target.value
                                    })
                                }}
                            />
                        </div>
                        <div className="phone">
                            <span>电话：</span>
                            <input type="text" placeholder='请输入电话'
                                value={this.state.phoneVal}
                                onChange={(e) => {
                                    this.setState({
                                        phoneVal: e.target.value
                                    })
                                }}
                            />
                        </div>
                        <div className="address">
                            <span>地址：</span>
                            <input type="text" placeholder='请输入地址'
                                value={this.state.addressVal}
                                onChange={(e) => {
                                    this.setState({
                                        addressVal: e.target.value
                                    })
                                }}
                            />
                        </div>
                        &nbsp;
                        <button className="sureBtn" onClick={() => {
                            let id = this.props.history.location.state;
                            axios.get(`/shopCar/updateUserMsg?name=${this.state.nameVal}&phone=${this.state.phoneVal}&address=${this.state.addressVal}&id=${id}`).then(res => { })
                            this.props.history.goBack()
                        }}>确定</button>
                    </div>
                </section>
            </div>
        )
    }
}

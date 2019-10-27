import React, { Component } from "react";
import { Button, List, InputItem, Toast } from "antd-mobile";
import Axios from "axios";

export default class addressUpdate extends Component {
    componentDidMount() {
        console.log(this.props.location.state);
        this.setState({
            name: this.props.location.state.name,
            address: this.props.location.state.address,
            phone: this.props.location.state.phone,
            ind: this.props.location.state.id,
            type: this.props.location.state.type
        });
        document.body.addEventListener("keyDown", e => {
            console.log(e);
        });
    }
    state = {
        name: "",
        address: "",
        phone: "",
        hasError: false,
        type: ""
    };
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info("Please enter 11 digits");
        }
    };
    onChange = value => {
        if (value.replace(/\s/g, "").length < 11) {
            this.setState({
                hasError: true
            });
        } else {
            this.setState({
                hasError: false
            });
        }
        this.setState({
            phone: value
        });
    };
    onChange1 = value => {
        this.setState({
            name: value
        });
    };
    onChange2 = value => {
        this.setState({
            address: value
        });
    };
    render() {
        let data = this.props.location.state;
        return (
            <div>
                <h3 style={{ textAlign: "center", lineHeight: "45px" }}>
                    修改信息
                </h3>
                <div style={{ textAlign: "center" }}>
                    <div>
                        <InputItem
                            type='text'
                            placeholder='请输入你的姓名'
                            onChange={this.onChange1}
                            value={this.state.name}>
                            姓名
                        </InputItem>
                    </div>
                    <div>
                        <InputItem
                            type='phone'
                            placeholder='请输入你的手机号'
                            error={this.state.hasError}
                            onErrorClick={this.onErrorClick}
                            onChange={this.onChange}
                            value={this.state.phone}>
                            手机号码
                        </InputItem>
                    </div>
                    <div>
                        <InputItem
                            type='text'
                            placeholder='请输入你的地址'
                            onChange={this.onChange2}
                            value={this.state.address}>
                            地址
                        </InputItem>
                    </div>
                    <Button
                        type='primary'
                        onClick={() => {
                            console.log(this.state);
                            Axios.post("/updateAddress", {
                                params: {
                                    obj: this.state
                                }
                            }).then(({ data }) => {
                                console.log(data);
                                if (data.code == 1) {
                                    this.props.history.push("/addRegion");
                                }
                            });
                        }}>
                        确认提交
                    </Button>
                </div>
            </div>
        );
    }
}

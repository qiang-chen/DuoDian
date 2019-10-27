/*
 * @Author: sunmiao
 * @Date: 2019-10-11 20:24:18
 * @Last Modified by: sunmiao
 * @Last Modified time: 2019-10-11 21:07:39
 */
// 每日必买
import React, { Component } from "react";
import "./index.scss";
export default class index extends Component<any, any> {
  render() {
    let {ptops} = this.props
    return (
      <div>
        <div className="title">
          <span>每日必买</span>
          <span>大家都在买</span>
        </div>
        <div className="buy-img" onClick={() => {
          ptops.history.push("/classDetails")
        }}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

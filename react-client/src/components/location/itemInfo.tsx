import React, { Component } from 'react'
import 'assets/font/iconfont.css'
import Axios from 'axios'
import { any } from 'prop-types'


export default class itemInfo extends Component<any, any> {
    render() {
        let { data } = this.props
        return (
            <div className="name" onClick={(e) => {

                e.persist()
                if (e.target.className == "iconfont icon-bianji1") {
                    return
                } else {
                    console.log(e, 1111)
                    e.isPropagationStopped()
                    this.props.history.push("/main/home", data.id)
                    Axios.post("/defaultAddress", {
                        data
                    }).then(({ data }) => {
                        console.log(data)
                    })
                }
            }}>
                <input onChange={() => {
                    this.props.history.push("/main/home", data.id)
                    Axios.post("/defaultAddress", {
                        data
                    }).then(({ data }) => {
                        console.log(data)
                    })
                }} type="radio" name="input" />
                <dl>
                    <dt>
                        <p>{data.name}</p>
                        <p>{data.phone}</p>
                        <p>{data.address}</p>
                    </dt>
                    <dd>
                        <span onClick={() => {
                            this.props.history.push("/updateAddress", data)
                        }}><i style={{ fontSize: "20px" }} className="iconfont icon-bianji1"></i></span>
                    </dd>
                </dl>
            </div>
        )
    }
}

import React, { Component } from 'react'
import './index.scss'

export default class youhui extends Component {
    render() {
        return (
            <div className='youhuipage'>
                <header>
                    <div className="topheader">
                        <span onClick={
                            () => {
                                this.props.history.goBack()
                            }
                        }>返回</span>
                        <span>优惠券</span>
                        <span></span>
                    </div>
                </header>
                <div className="mainP">
                    这里什么都没有~
                </div>
            </div>
        )
    }
}

import React, { Component } from "react";
import "./carList.scss";
import artcleImg from "./img/articleboluo.jpg";
import AddMinus from "./addMinus";

interface Istate {
    count: number,
    totalPrice: number,
    totalCount: number,
    flag: boolean
}

export default class carList extends Component<any, Istate> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0,
            totalPrice: 0,
            totalCount: 0,
            flag: false
        }
    }

    // 列表组件
    render() {
        return (
            <>
                {this.props.carDate.map((item: any, index: any) => {
                    return <div className="carList" key={index}>
                        <div className="checkdSpan">
                            <input type="checkbox"
                                checked={item.ischecked}
                            />
                            {/* <span>111{this.props.msg}</span> */}
                        </div>
                        <div className='articleImg'>
                            <div className='img'>
                                <img src={artcleImg} alt='' />
                            </div>
                        </div>
                        <div className='rightMsg'>
                            <span>{item.title}</span>
                            <span className='guige'>规格:1.2kg/盒{this.state.totalPrice}</span>
                            &nbsp;
                    <div className='artcPrice'>
                                <span>
                                    <span className='newPrice'>￥{item.price} </span>
                                    <span className='oldPrice'>￥19.5</span>
                                </span>
                                <div className="addprev">
                                    {/* 加减组件 */}
                                    <div className='addMinus'>
                                        <button className="minusBtn" >-</button>
                                        <button className="buyNum">{item.num}</button>
                                        <button className="addBtn" onClick={() => {
                                            this.setState({
                                                count: item.num++
                                            })
                                        }}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}

            </>
        );
    }
}

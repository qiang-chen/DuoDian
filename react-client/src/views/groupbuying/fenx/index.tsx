import React, { Component } from "react";

interface Fprops {
    detailobj: any;
}
export default class index extends Component<Fprops> {
    state = {
        price: "",
        oldPrice: "",
        title: "",
        addUp: ""
    };
    componentWillReceiveProps(props: any, state: any) {
        this.setState(
            {
                price: props.detailobj[0].price,
                oldPrice: props.detailobj[0].oldPrice,
                title: props.detailobj[0].title,
                addUp: props.detailobj[0].addUp
            },
            () => {
                // console.log(this.state.olist, "pp");
            }
        );
    }
    render() {
        const { price, oldPrice, title, addUp } = this.state;
        return (
            <div className='group-fenx'>
                <div className='fenx-t'>
                    <span>
                        <b>${price}</b>
                        <s>${oldPrice}</s>
                    </span>
                    <span>累计销售{addUp}万份</span>
                </div>
                <div className='fenx-b'>
                    <dl>
                        <dt>
                            <span>{title}</span>
                            <p>剩余3458份</p>
                        </dt>
                        <dd>
                            <div className='bshare-custom'>
                                <a
                                    title='分享'
                                    className='bshare-qzone'>
                                </a>
                            </div>
                            <span>分享</span>
                        </dd>
                    </dl>
                </div>
            </div>
        );
    }
}

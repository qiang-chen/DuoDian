import React, { Component } from "react";
import api from "api/index";
import "./index.scss";

interface Pprops {
    prolist: Array<Object>;
    props: any;
}

export class productList extends Component<Pprops> {
    state = {
        olist: []
    };
    componentWillReceiveProps(props: any, state: any) {
        this.setState(
            {
                olist: props.prolist
            },
            () => {
                // console.log(this.state.olist, "pp");
            }
        );
    }
    godetail(obj: any) {
        console.log(obj.id);
        this.props.props.history.push({
            pathname: "/groupbuying",
            state: { index: obj.id }
        });
    }
    render() {
        const { olist } = this.state;
        return (
            <div className='inbox'>
                {olist.map((item: any, index: number) => (
                    <dl key={index}>
                        <dt onClick={() => this.godetail.bind(this)(item)}>
                            <img src={item.imgUrl} alt='1' />
                        </dt>
                        <dd>
                            <p>{item.title}</p>
                            <p>
                                累计{item.addUp}万份/已拼{item.haveSpell}份
                            </p>
                            <p>{item.modes}</p>
                            <div>
                                <span className='org'>￥{item.price}</span>
                                <s>￥{item.oldPrice}</s>
                                <span className='numbox'>
                                    {item.num >= 1 ? (
                                        <span className='shownum'>
                                            <span
                                                className='delbtn'
                                                onClick={() =>
                                                    this.changeNum({
                                                        ...item,
                                                        str: "-"
                                                    })
                                                }>
                                                -
                                            </span>
                                            <span>{item.num}</span>
                                        </span>
                                    ) : null}
                                    <span
                                        className='addbtn'
                                        onClick={() =>
                                            this.changeNum({
                                                ...item,
                                                str: "+"
                                            })
                                        }>
                                        +
                                    </span>
                                </span>
                                <span></span>
                            </div>
                        </dd>
                    </dl>
                ))}
            </div>
        );
    }
    changeNum = (obj: any) => {
        if (!window.localStorage.getItem("user")) {
            this.props.props.history.push("/login");
        }
        obj.num = obj.num * 1;
        if (obj.str === "+") {
            obj.num++;
        } else {
            obj.num--;
        }
        if (obj.num >= 1) {
            obj.type = 1;
        } else {
            obj.type = 0;
        }

        api.postupdateshop(obj).then((res: any) => {
            this.setState({
                olist: res.result
            });
        });
    };
}

export default productList;

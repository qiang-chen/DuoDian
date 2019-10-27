import React, { Component } from 'react'
import CarList from 'components/castShopCar/carList'
import './castShopCar.scss'
import axios from 'axios'
import { Modal } from 'antd-mobile';
import { isNull } from 'util';

const alert = Modal.alert;

interface Istate {
    allChecked: boolean,
    count: number,
    sumprice: number,
    carData: any,
    checkedData: any,
    flag: boolean
}

export default class castShopCar extends Component<any, Istate> {
    constructor(props: any) {
        super(props);
        this.state = {
            allChecked: false,
            count: 0,
            sumprice: 0,
            carData: [],
            checkedData: [],
            flag: true
        }
    }
    //单选框
    oneCheck(i: any) {
        //获取数据
        let one_data: any = this.state.carData
        //点击时true和false的切换
        one_data[i].ischecked = !one_data[i].ischecked
        let every = one_data.every((item: { ischecked: boolean; }, index: any) => {
            return item.ischecked == true;
        })
        let newData = one_data.filter((item: { ischecked: boolean; }) => item.ischecked == this.state.flag);
        this.setState({
            carData: one_data,
            allChecked: every,
            checkedData: newData
        }, () => {
            console.log(this.state.checkedData, '666')
        })

        this.sumprice()
    }

    //全选框
    allCheckFn(e: any) {
        let all_data: any = this.state.carData
        let all_Checked = this.state.allChecked
        all_Checked = !all_Checked
        console.log(all_Checked, 'all_Checked')
        for (let i = 0; i < all_data.length; i++) {
            all_data[i].ischecked = all_Checked
        }
        let newDatas = all_data.filter((item: { ischecked: boolean; }) => item.ischecked == this.state.flag);
        this.setState({
            carData: all_data,
            allChecked: e.target.checked,
            checkedData: newDatas
        }, () => {
            console.log(this.state.checkedData, '666')
        })
        this.sumprice()
    }
    //总价
    sumprice() {
        let sum: any = 0;
        let sum_data: any = this.state.carData
        for (let i = 0; i < sum_data.length; i++) {
            if (sum_data[i].ischecked == true) {
                sum += sum_data[i].price * sum_data[i].num
            }
        }
        this.setState({ sumprice: sum.toFixed(2) }, () => {
            // console.log(this.state.sumprice)
        })
    }

    //获取数据
    getData() {
        axios.get('/shopCar/getShopCarData').then(({ data }) => {
            for (let i = 0; i < data.result.length; i++) {
                data.result[i].ischecked = false
            }
            this.setState({
                carData: data.result
            })
        })
    }

    castFn() {
        if (this.state.checkedData.length == 0) {
            alert('商品', '请选择要购买的商品', [
                { text: '取消', onPress: () => console.log('取消') },
                {
                    text: '确定', onPress: () => { console.log('确定') }
                },
            ])
        } else if (this.state.sumprice >= 0.1) {
            this.props.history.push("/sureCast", { shopData: this.state.checkedData, total: this.state.sumprice });
        } else {
            alert('商品', '请选择商品数量', [
                { text: '取消', onPress: () => console.log('取消') },
                {
                    text: '确定', onPress: () => { console.log('确定') }
                },
            ])
        }

    }

    componentDidMount() {
        this.getData()
        this.setState({})
    }

    // 购物车
    render() {
        // window.location.reload(1)
        return (
            <div className="castShopCar">
                <header>
                    <div className="topheader">
                        购物车
                    </div>
                </header>
                <section>
                    <>
                        {this.state.carData.map((item: any, index: any) => {
                            return <div className="carList"
                                key={index}
                            >
                                <div className="checkdSpan">
                                    <input type="checkbox"
                                        checked={item.ischecked}
                                        onChange={
                                            this.oneCheck.bind(this, index)
                                        }
                                    />
                                </div>
                                <div className='articleImg'
                                    onClick={() => {
                                        this.props.history.push('/groupbuying', { index: item.id })
                                    }}
                                >
                                    <div className='img'>
                                        <img src={item.imgUrl} alt='' />
                                    </div>
                                </div>
                                <div className='rightMsg' >
                                    <span>{item.title}</span>
                                    <span className='guige'>规格:1.2kg/盒</span>
                                    &nbsp;
                    <div className='artcPrice'>
                                        <span>
                                            <span className='newPrice'>￥{item.price} </span>
                                            <span className='oldPrice'>￥19.5</span>
                                        </span>
                                        <div className="addprev">
                                            <div className='addMinus'>
                                                <button className="minusBtn" onClick={() => {
                                                    if (item.num > 1) {
                                                        this.setState({
                                                            count: item.num--
                                                        }, () => {
                                                            axios.get(`/shopCar/updateBuyCount?num=${item.num}&id=${item.id}`).then(res => {
                                                                // console.log(res)
                                                            })

                                                        })
                                                        this.sumprice()
                                                    } else if (item.num >= 0) {
                                                        alert('删除', '确定删除该商品吗？', [
                                                            { text: '取消', onPress: () => console.log('取消') },
                                                            {
                                                                text: '确定', onPress: () => {
                                                                    console.log('确定')
                                                                    axios.get(`/shopCar/deleteShop?id=${item.id}`).then(res => {
                                                                        this.setState({})
                                                                    })
                                                                    this.getData()
                                                                }
                                                            },
                                                        ])
                                                    }
                                                }}>-</button>
                                                <button className="buyNum">{item.num}</button>
                                                <button className="addBtn" onClick={() => {
                                                    this.setState({
                                                        count: item.num++
                                                    }, () => {
                                                        // console.log(item.num,'55')
                                                        axios.get(`/shopCar/updateBuyCount?num=${item.num}&id=${item.id}`).then(res => {
                                                            // console.log(res)
                                                        })
                                                    })

                                                    this.sumprice()
                                                }}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </>
                </section>
                <footer>
                    <div className="bottomLis">
                        <div className="allcheck">
                            <input type="checkbox"
                                checked={this.state.allChecked}
                                onChange={this.allCheckFn.bind(this)}
                            /> 全选
                        </div>
                        <div className="lastPrice">
                            <span>
                                总价: <span style={{ color: "#ff4036", fontWeight: "bold" }}>￥{this.state.sumprice}</span>
                            </span>
                            <span>
                                <div className="castBtn" onClick={this.castFn.bind(this)}>
                                    去结算
                                </div>
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}


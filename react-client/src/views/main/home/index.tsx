import React, { Component } from 'react';
import Header from 'components/header/index';
import Swiper from 'components/home/swiper/index';
import Carnival from 'components/home/carnival/index';
import Mustbuy from 'components/home/mustBuy/index';
import Type from 'components/home/type/index';
import axios from 'axios';
import './index.scss';
import 'assets/font/iconfont.css';
class Home extends Component<any, any> {
    state = {
        Date: '',
        ind: this.props.location.state ? this.props.location.state - 1 : 0
    };
    componentDidMount() {
        axios.get('/getDate').then(({ data }) => {
            this.setState({
                Date: data
            });
        });
    }
    render() {
        return (
            <div className='home'>
                <div>
                    <Header title='校园超市'></Header>
                </div>

                <div
                    className='address'
                    onClick={e => {
                        e.persist();
                        if (e.target.className != "iconfont icon-fangdajing") {
                            this.props.history.push("/addRegion");
                        }
                    }}>
                    <i className='iconfont icon-dingwei'></i>
                    送至：
                    {this.state.Date && this.state.Date[this.state.ind].address}
                    <i className='iconfont icon-youjiantou-01'></i>
                    <i
                        className='iconfont icon-fangdajing'
                        onClick={() => {
                            this.props.history.push("/search");
                        }}></i>
                </div>
                <Swiper></Swiper>
                <Carnival></Carnival>
                <Mustbuy ptops={this.props}></Mustbuy>
                <Type props={this.props}></Type>
            </div>
        );
    }
}

export default Home

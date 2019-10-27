import React, { Component } from 'react';
import Header from "components/header/index";
import Search from 'components/search'
import 'assets/font/iconfont.css'
import "./index.scss";
import api from 'api/';

class search extends Component {
    state = {
        List: [],
        childrenMsg: '',
    }
    getChildrenMsg = (result: any, msg: any) => {
        console.log(msg);
        this.setState({
            List: msg
        })
    }
    render() {
        let { List } = this.state
        return (
            <div className='searchPage'>
                <Header title="校园超市"></Header>
                <Search searchConnector={api.searchConnector} prot={this} />
                <div className="search-div">
                    {/* <div className="search-his"><span>历史搜索</span><span className="clearSearch"><i className='iconfont icon-shanchu-01'></i>清空历史记录</span></div> */}
                    <div className="search-shitu">
                        {

                            List.length ? List.map((item: any) => (
                                <div key={item.id} className="search-item" onClick={() => {
                                    this.props.history.push("/groupbuying", { index: item.id })
                                }}>
                                    <dl>
                                        <dt>
                                            <img src={item.imgUrl} alt="" />
                                        </dt>
                                        <dd>
                                            <p>{item.title}</p>
                                            <p>累计{item.spec}万份/已拼13份</p>
                                            <p>自营</p>
                                            <div>
                                                <span>￥{item.price}</span>
                                                <s>￥{item.oldPrice}</s>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            )) : ""
                        }
                    </div>
                </div>
            </div>
        );
    }

}

export default search;




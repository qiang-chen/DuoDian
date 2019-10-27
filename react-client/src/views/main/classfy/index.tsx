import React, { Component } from "react";
import Head from "components/header";
import ProductList from "components/productList";
import api from "api/index";
import "./index.scss";



class Class extends Component<any> {
    state = {
        leftlist: [],
        headlist: [],
        prolist: [],
        allbtnlist: [],
        act: 0,
        sact: 0
    };
    showlist = (obj: any) => {
        this.setState({
            act: obj.index
        });
        api.postheadList(obj).then((res: any) => {
            this.setState({
                headlist: res.result
            });
        });
        api.postAllList(obj).then((res: any) => {
            this.setState({
                prolist: res.result,
                allbtnlist: res.result
            });
        });
    };
    getsubprolist = (obj: any) => {
        this.setState({
            sact: obj.index
        });
        api.postsubprolist(obj).then((res: any) => {
            this.setState({
                prolist: res.result
            });
        });
    };
    showall = () => {
        this.setState({
            prolist: this.state.allbtnlist
        });
    };
    gosearchpage = () => {
        this.props.history.push("/search");
    };
    render() {
        const { leftlist, act, headlist, prolist, sact } = this.state;
        return (
            <div className='cl-container'>
                <Head title='校园超市'></Head>
                <div className='cl-inpbox'>
                    <p onClick={this.gosearchpage}>
                        <i className='iconfont icon-fangdajing'></i>
                        <span>搜索校园超市商品</span>
                    </p>
                </div>
                <div className='cl-content'>
                    <div className='cl-conleft'>
                        <ul>
                            {leftlist.map((item: any, index: any) => (
                                <li
                                    className={act === index ? "active" : ""}
                                    key={index}
                                    onClick={() =>
                                        this.showlist({ id: item.m_id, index })
                                    }>
                                    {item.m_title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='cl-conright'>
                        <div className='crhead'>
                            <span onClick={this.showall}>全部</span>
                            {headlist.map((item: any, index: number) => (
                                <span
                                    className={sact === index ? "bcolor" : ""}
                                    key={item.s_id}
                                    onClick={() =>
                                        this.getsubprolist({
                                            id: item.s_id,
                                            index
                                        })
                                    }>
                                    {item.s_title}
                                </span>
                            ))}
                        </div>
                        <div className='clconmain'>
                            <ProductList
                                prolist={prolist}
                                props={this.props}></ProductList>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        api.getProList().then((res: any) => {
            this.setState({
                leftlist: res.result
            });
        });
        api.postheadList({ id: 1 }).then((res: any) => {
            this.setState({
                headlist: res.result
            });
        });
        api.postAllList({ id: 1 }).then((res: any) => {
            this.setState({
                prolist: res.result
            });
        });
    }
}

export default Class;

import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import 'assets/font/iconfont.css'
import "./index.scss"

export default class Foot extends Component {
    render() {
        return (
            <div className='foot'>
                <NavLink to="/main/home"><i className="iconfont icon-shouye"></i><p>首页</p></NavLink>
                <NavLink to='/main/class'> <i className='iconfont icon-fenlei-xuanzhong'></i> <p>分类</p> </NavLink>
                <NavLink to="/main/castShopCar"><i className="iconfont icon-gouwuche"></i><p>购物车</p></NavLink>
                <NavLink to="/main/mine"><i className="iconfont icon-wode"></i><p>我的</p></NavLink>
            </div>
        );
    }
}

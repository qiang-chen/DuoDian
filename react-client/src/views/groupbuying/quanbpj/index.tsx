import React, { Component } from "react";
import "../index.scss";
import "../mock/index";
import axios from "axios";

export default class index extends Component {
  state={
    list:[]
  }
  componentDidMount(){
    axios.get('/list').then(res=>{
      this.setState({
        list:res.data
      })
    })
  }
  render() {
    const {list} =this.state;
    return (
      <div className="group-quanbupj">
        <header className="qbpj-header">全部评价</header>
        <main className="qbpj-main">
            <div className="main-sx">
                <span className="active">全部</span>
                <span >最新</span>
                <span>好评</span>
                <span>中评</span>
                <span>差评</span>
                <span>有图</span>
            </div>
            {
              list.map((i,index)=>{
                return <div className="main-pj" key={index}>
                <dl className="main-dl">
                  <dt className="main-dt">
                  <img
                      src={i.img}
                      alt=""
                    />
                    <span>
                      <h3>{i.title}</h3>
                      <p>{i.rili}</p>
                    </span>
                  </dt>
                  <dd className="main-dd">
                    <span>{i.pj}</span>
                    <img src={i.img} alt=""/>
                  </dd>
                </dl>
              </div>
              })
            }
        </main>
      </div>
    );
  }
}

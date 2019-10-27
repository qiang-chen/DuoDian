import React, { Component } from "react";
import "../mock/index";
import axios from "axios";

export default class index extends Component {
  state={
    list:[]
  }
  Reviews(){
    // console.log(this.props);
      this.props.history.push('/quanbpj')
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
      <div className="group-shangp">
        <div className="shangp-top" onClick={()=>{this.Reviews()}}> 
          <span>商品评价（8）</span>
          <span>
            好评度<p>100%</p>》
          </span>
        </div>
        <div className="shangp-buttom">
          {
            list.map((item,index)=>{
              return <div className="shangp-t" key={index}>
              <dl className="shangp-dl">
                <dt className="shangp-dt">
                  <img src={item.img}alt=""/>
                  <span>
                    <h3>{item.title}</h3>
                    <p>{item.rili}</p>
                  </span>
                </dt>
                <dd className="shangp-dd">
                  <span></span>
                  <span>{item.pj}</span>
                </dd>
                <p>商品完好</p>
              </dl>
            </div>
            })
          }
        </div>
      </div>
    );
  }
}

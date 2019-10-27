import React, { Component } from 'react'
const img = require("assets/img/1.png")

export default class locationNow extends Component {
    render() {
        return (
            <div>
                <img style={{width:"100%",height:'100%'}} src={img}/>
            </div>
        )
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.history.push("/location")
        },2000)
    }
}

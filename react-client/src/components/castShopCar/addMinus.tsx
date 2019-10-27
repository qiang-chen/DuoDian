import React, { Component } from 'react'
import "./carList.scss"

interface Istate {
    count: number
}


export default class addMinus extends Component<any, Istate> {
    constructor(props: any) {
        super(props);

        this.state = {
            count: 0
        }
    }

    addCountFn() {
        this.setState({
            // count:this.state.count++
        })
    }

    componentDidMount(){
        console.log(this.props.buyCountData,'44444')
    }
    // 加减组件
    render() {
        return (
            <div className='addMinus'>
                <button className="minusBtn" onClick={this.addCountFn.bind(this)}>-</button>
                <button className="buyNum">{this.state.count}</button>
                <button className="addBtn">+</button>
            </div>
        )
    }
}

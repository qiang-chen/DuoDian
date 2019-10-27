import React, { Component } from 'react';
import "./indec.scss"
interface searchConnector {
    searchConnector: any
}
class Search extends Component<searchConnector>{
    state = {
        Val: '',
        data: [],
        List: []
    }
    search() {
        this.props.searchConnector(this.state.Val).then((res: any) => {
            this.setState({
                List: res.result
            }, () => {
                this.props.prot.getChildrenMsg(this, this.state.List)
            })
        })
    }
    async list(e: React.FormEvent<HTMLInputElement>) {
        await this.setState({ Val: e.target.value })
        const text = this.state.Val.trim()
        if (text === '') {
            await this.setState({
                data: []
            })
        } else {
            await this.props.searchConnector(this.state.Val).then((res: any) => {
                this.setState({
                    data: res.result
                })
            })
        }
    }
    isfales() {
        setTimeout(() => {
            this.setState({
                data: []
            })
        }, 100)

    }
    async istrue() {
        const text = this.state.Val.trim()
        if (text === '') {
            await this.setState({
                data: []
            })
        } else {
            await this.props.searchConnector(this.state.Val).then((res: any) => {
                this.setState({
                    data: res.result
                })
            })
        }
    }
    single(i: any) {
        this.props.prot.getChildrenMsg(this, [i])

    }
    render() {
        return (
            <div className='cl-inpbox'>
                <div>
                    <i className='iconfont icon-fangdajing'></i>
                    <input type='text' placeholder='搜索校园超市商品' value={this.state.Val} onChange={(e) => this.setState({})} onInput={(e) => this.list(e)} onBlur={() => { this.isfales() }} onFocus={() => { this.istrue() }} />
                    <div onClick={() => this.search()}>搜索</div>
                    <ul>
                        {
                            this.state.data.map((item: any) => (
                                <li key={item.id} onClick={() => this.single(item)}>{item.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Search

import React, { Component } from "react";
import "./index.scss";
import MyContext from "components/myContext/index";
import myContextList from "components/myContextList/index";
import Axios from "axios";
import { inject, observer } from "mobx-react";
import { Tabs, WhiteSpace } from "antd-mobile";
import List from '../list/index'
@inject("List")
@observer
class TypeCom extends Component<any, any, any> {
    static contextType = MyContext;
    constructor(props: any) {
        super(props);
        this.state = {
            arr: [
                {
                    id: 0,
                    title: "电子"
                },
                {
                    id: 1,
                    title: "蔬菜"
                },
                {
                    id: 2,
                    title: "零食"
                },
                {
                    id: 3,
                    title: "酸奶"
                },
                {
                    id: 4,
                    title: "面包"
                },
                {
                    id: 5,
                    title: "饮料"
                },
                {
                    id: 6,
                    title: "体育"
                },
                {
                    id: 7,
                    title: "文具"
                },
                {
                    id: 8,
                    title: "百货"
                }
            ],
            main: "",
            type: "",
            List: [],
            msg:5
        };
    }
    
    componentDidMount() {
        let that = this;
        let value = this.context;
        let types: any = this.refs.type;

        Axios.post("/home/tab", { index: 0 }).then(res => {
            this.setState(
                {
                    List: res.data.result
                },
                () => {
                    this.props.List.getList(this.state.List);
                }
            );
        });

        this.setState(
            {
                main: value
            },
            () => {
                let h = types.getBoundingClientRect().top;
                if (this.state.main) {
                    this.state.main.onscroll = function (e: any) {
                        let x = e.target.scrollTop - h;
                        if (x >= 60) {
                            that.setState({
                                class: "type fixed"
                            });
                        } else { 
                            that.setState({
                                class: "type"
                            });
                        }
                    };
                }
            }
        );
    }
    clickFn = (msg:any) =>{
        this.setState({
            msg :msg
        })
    }

    typeFn(index: any, id: any,) {
        let {msg} = this.state
        Axios.post("/home/tab", { index: index ,msg : msg}).then(res => {
            this.setState({
                List : res.data.result
            })
            // this.setState({ List: res.data.result }, () => {
            //     this.props.List.getList(this.state.List);
            // });
        });
    }
    render() {
        return (
            <div>
                <div className={this.state.class} ref='type' onclickFn={this.clickFn.bind(this)}>
                    <myContextList.Provider value={this.state.List}>
                        <WhiteSpace />
                        <Tabs
                            onTabClick={e => {
                                this.typeFn(e.id, e.title,);
                            }}
                            tabs={this.state.arr}
                            renderTabBar={props => (
                                <Tabs.DefaultTabBar {...props} page={5} />
                            )}></Tabs>
                        <WhiteSpace />
                    </myContextList.Provider>
                </div>
                <List props={this.props} list = {this.state.List} clickFn = {this.clickFn}></List>
            </div>
        );
    }
}

export default TypeCom;

import RouteView from 'router/RoutevView';
import Foot from 'components/foot/index';
import React, { Component } from 'react';
import MyContext from 'components/myContext/index';
import ContentLoader, { Facebook } from 'react-content-loader';
const MyLoader = (a: any) => <ContentLoader>a</ContentLoader>;
const MyFacebookLoader = (a: any) => <Facebook>a</Facebook>;
export default class Main extends Component<any, any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            main: 'jjj'
        };
    }
    componentDidMount() {
        this.setState({
            main: 87
        });
    }

    render() {
        return (
            <div className='mainPage'>
                <MyContext.Provider value={this.refs.main}>
                    <div className='main' ref='main'>
                        <RouteView children={this.props.children}></RouteView>
                    </div>
                    <div className='foot'>
                        <Foot></Foot>
                    </div>
                </MyContext.Provider>
            </div>
        );
    }
}
MyLoader(Main);

MyFacebookLoader(Main);

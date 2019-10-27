import React, { Component } from 'react'
import "views/sureCast/index.scss"
import { List, Calendar } from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';

const extra = {
    '2017/07/15': { info: 'Disable', disable: true },
};

const now = new Date();

export default class dataPicker extends Component {
    originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;

    constructor(props:any) {
        super(props);
        this.state = {
            en: false,
            show: false,
            config: {},
            orderTime: ''
        };
    }
    renderBtn(zh:any, en:any, config = {}) {
        config.locale = this.state.en ? enUS : zhCN;
        return (
            <List.Item arrow="horizontal"
                onClick={() => {
                    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
                    this.setState({
                        show: true,
                        config,
                    });
                }}
            >
                {this.state.en ? en : zh}
            </List.Item>

        );
    }

    changeLanguage = () => {
        this.setState({
            en: !this.state.en,
        });
    }

    onSelectHasDisableDate = (dates) => {
        console.warn('onSelectHasDisableDate', dates);
    }

    onConfirm = (startTime, endTime) => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
            show: false,
            startTime,
            endTime,
        }, () => {
            let picker = this.state.startTime.toLocaleDateString().split('/').join('-');
            sessionStorage.setItem('pickerTime', picker);
            this.props.onChildTime(this.state.startTime)
        });
    }

    onCancel = () => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
            show: false,
            startTime: undefined,
            endTime: undefined,
        });
    }

    getDateExtra = date => extra[+date];


    render() {
        return (
            <>
                <div className="peisongtime">
                    <span>配送时间</span>
                </div>
                <div>
                    <List className="calendar-list" style={{ backgroundColor: 'white' }}>
                        {this.renderBtn('选择配送日期', 'Select Date', { type: 'one' })}

                        {
                            sessionStorage.getItem('pickerTime') &&
                            <List.Item>{sessionStorage.getItem('pickerTime')}</List.Item>
                        }
                    </List>
                    <Calendar
                        {...this.state.config}
                        visible={this.state.show}
                        onCancel={this.onCancel}
                        onConfirm={this.onConfirm}
                        onSelectHasDisableDate={this.onSelectHasDisableDate}
                        getDateExtra={this.getDateExtra}
                        defaultDate={now}
                        minDate={new Date(+now - 0)}
                        maxDate={new Date(+now + 5836000000)}
                    />
                </div>
            </>

        )
    }
}

/*
 * @Author: sunmiao
 * @Date: 2019-10-11 20:24:40
 * @Last Modified by: wwh
 * @Last Modified time: 2019-10-16 09:13:14
 */

import React, { Component } from 'react';
import './index.scss';
export default class carnival extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            arr: [
                {
                    Ftit: '蔬菜每日鲜'
                },
                {
                    Ftit: '蔬菜每日鲜'
                },
                {
                    Ftit: '蔬菜每日鲜'
                },
                {
                    Ftit: '蔬菜每日鲜'
                },
                {
                    Ftit: '蔬菜每日鲜'
                },
                {
                    Ftit: '蔬菜每日鲜'
                },
                {
                    Ftit: '蔬菜每日鲜'
                },
                {
                    Ftit: '蔬菜每日鲜'
                },
                {
                    Ftit: '蔬菜每日鲜'
                },
                {
                    Ftit: '蔬菜每日鲜'
                }
            ]
        };
    }

    render() {
        return (
            <div className='carnival'>
                {this.state.arr.map(
                    (
                        item: {
                            icon: React.ReactNode;
                            Ftit: React.ReactNode;
                        },
                        index: string | number | undefined
                    ) => {
                        return (
                            <dl key={index} className='icon-carnival'>
                                <dt className='dt-carnival'>{item.icon}</dt>
                                <dd className='dd-carnival'>{item.Ftit}</dd>
                            </dl>
                        );
                    }
                )}
            </div>
        );
    }
}

import React, { Component } from "react";
import { Carousel } from "antd-mobile";

interface Sprops {
    imgList: any;
}

export default class index extends Component<Sprops> {
    state = {
        imglist: []
    };
    componentWillReceiveProps(props: any, state: any) {
        this.setState(
            {
                imglist: props.imgList.split(",")
            },
            () => {
                // console.log(this.state.olist, "pp");
            }
        );
    }
    render() {
        const { imglist } = this.state;
        return (
            <div className='group-swiper'>
                <Carousel autoplay>
                    {imglist.map((item: any, index: any) => (
                        <div className='swiper-slide' key={index}>
                            <img className='img' src={item} alt=''></img>
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    }
}

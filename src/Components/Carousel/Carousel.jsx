import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'





export default class Carousel extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableHeight: true,
        };
        return (
            <div>
                <Slider {...settings} >
                    <div >
                        <img src={require("../../assets/images/banner1.jpg")} alt="" />
                    </div>
                    <div >
                        <img src={require("../../assets/images/banner2.jpg")} alt="" />
                    </div>
                    <div >
                        <img src={require("../../assets/images/banner3.jpg")} alt="" />
                      
                    </div>
                    <div >
                        <img src={require("../../assets/images/banner4.jpg")} alt="" />
                    </div>
                    <div >
                        <img src={require("../../assets/images/banner5.jpg")} alt="" />
                    </div>
                </Slider >
            </div>
        );
    }
}

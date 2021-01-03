import React, { useState } from 'react';
import FakeData from '../FakeData/FakeData';
import './Sliders.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from 'react-bootstrap';

const Sliders = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    const [slide, setSlide] = useState(FakeData);
    console.log(slide);
    return (
        <section className="container">
            <h2 className="text-center mt-5 mb-5">Trending Items</h2>

            <Slider {...settings}>
                {
                    slide.map( (el) => {
                    return(
                        <div className="slider-items">

                            <img className="slider-image" src={el.img} alt="" />
                            <div className="slider-content">
                                <NavLink className="nav-link product-name"><h3>{el.name}</h3></NavLink>
                                <p className="price">$ {el.price}</p>
                                <img className="img-fluid star" src={el.star} alt="star" />
                                <p className="starCount"><h6>{el.starCount}</h6></p>
                            </div>
                            
                        </div>
                        )
                    })
                }
            </Slider>
        </section>
    );
};

export default Sliders;
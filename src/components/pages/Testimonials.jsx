import '../styles/Testimonials.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react"
import { testimonials } from '../data/dummydata'
import { FormatQuote } from '@mui/icons-material'
import Slider from 'react-slick';

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return(
        <> 
        <section className='testimonials hero '>
            <div className='container'>
                <Slider {...settings}>
                    {testimonials.map(item => (
                        <div className='box'>   
                            <i className='icon' data-aos="zoom-out-up">
                                <FormatQuote />
                            </i>
                            <p data-aos="zoom-out-down">{item.text}</p>
                            <div className='img'>
                                <img src={item.image} alt='' data-aos="zoom-out-right" />
                            </div>
                            <h3 data-aos="zoom-out-left">{item.name}</h3>
                            <p className='label' data-aos="zoom-out">{item.post}</p>
                            
                        </div>
                    ))}
                </Slider>
            </div>

        </section>
        </>
    )
}

export default Testimonials
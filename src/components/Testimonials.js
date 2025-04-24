import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Testimonials.css';
import { testimonialData } from '../data/TestimonialData.js';

const Testimonials = () => {
    return (
        <div className="testimonial-slider-container">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="testimonial-swiper"
            >
                {testimonialData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="testimonial-slide">
                            <div className="testimonial-image-wrapper">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="testimonial-image"
                                />
                            </div>
                            <div className="testimonial-content">
                                <p className="testimonial-quote">"{item.desc}"</p>
                                <p className="testimonial-name">- {item.name}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-button-next">&#8250;</div>
                <div className="swiper-button-prev">&#8249;</div>
            </Swiper>
        </div>
    );
};

export default Testimonials;

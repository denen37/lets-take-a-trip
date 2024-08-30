import React, { useState } from 'react'
import { contentObj } from '../../data/content'
import { useImmer } from 'use-immer';
import FeaturedContentCard from './FeaturedContentCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css"
import "swiper/css/bundle"
import "../../custom-swiper-styles.css"

const FeaturedContent = () => {
    const [content, setContent] = useImmer(contentObj);
    const [currentBtn, setCurrentBtn] = useState(content[0].type);

    const handleContentClick = (text) => {
        setCurrentBtn(text);
        setContent(content => {
            content.forEach(item => {
                if (item.type == text) {
                    item.current = true
                } else {
                    item.current = false
                }
            })
        })
    }

    const NoContent = () => {
        return (
            <div className='flex items-center justify-center rounded-xl h-[200px]'>
                <p className='text-xl font-light text-white'>No content</p>
            </div>
        )
    }

    return (
        <div className='mt-[30px]'>
            <h1 className='text-xl text-gray-500'>Featured Content</h1>
            <div className='flex gap-5 text-base mt-5 mb-2'>
                {
                    content.map(item => item.type).map(text => <button className='font-[500] py-1 px-2 rounded-lg'
                        style={currentBtn == text ?
                            { color: '#FF6600', backgroundColor: '#eedfd7' } :
                            { color: '#848588', backgroundColor: 'transparent' }}
                        onClick={() => handleContentClick(text)}
                    >{text}</button>)
                }
            </div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y, Autoplay]}
                navigation={{ clickable: true }}
                pagination={{ clickable: true }}
                // autoplay={{ delay: 4000 }}
                speed={400}
                loop={true}
                slidesPerGroup={1}
                breakpoints={{ 0: { slidesPerView: 1 }, 728: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
                spaceBetween={20}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{ paddingTop: 10, paddingBottom: 30 }}
            >
                {
                    content.find(item => item.current).content.length > 0 ?
                        content.find(item => item.current).content.map(item => (
                            <SwiperSlide
                                style={{ height: 'auto' }}
                            >
                                <FeaturedContentCard item={item} />
                            </SwiperSlide>
                        )) :
                        <NoContent />
                }
            </Swiper>
        </div>
    )
}

export default FeaturedContent

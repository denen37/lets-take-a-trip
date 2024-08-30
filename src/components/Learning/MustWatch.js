import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import MustWatchCard from './MustWatchCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css"
import "swiper/css/bundle"
import "../../custom-swiper-styles.css"

const mustWatchObj = [
    {
        imagePath: '/images/Learn/apply-for-visa.png',
        text: 'Application Made easy - Apply for visa without any paper work',
        dateTime: '5 days', plays: '2.8M'
    },
    {
        imagePath: '/images/Learn/Buy_assets.jpg',
        text: 'How to increase your real estate investment in 2024 without losing collateral',
        dateTime: '2 hours', plays: '14.8M'
    },
    {
        imagePath: '/images/Learn/indept-explanation.png',
        text: 'An indept explanation to the let take a trip Web Application dashboard',
        dateTime: '4 days', plays: '2.2M'
    },
    {
        imagePath: '/images/Learn/expensive-hotels.jpg',
        text: 'Top ten most expensive hotels in the United Kingdom 2024',
        dateTime: '10 days', plays: '824.2k'
    },
    {
        imagePath: '/images/Learn/how-to-signup.png',
        text: 'How to sign up Lets Take a Trip with ease (step by step guide)',
        dateTime: '5 days', plays: '64.1k'
    }
]

const MustWatch = () => {
    const [mustWatch, setMustWatch] = useState(mustWatchObj);
    return (
        <div className='bg-gray-50 mt-10 rounded-xl'>
            <div className='flex justify-between items-center py-3 px-3 border-b-4 border-b-gray-300'>
                <h1 className='text-xl text-gray-500'>Must-Watch</h1>
                <button className='text-[#FF6600] flex items-center gap-2'>
                    <span>Show more</span>
                    <FontAwesomeIcon icon={faAngleRight} color={'#FF6600'} />
                </button>
            </div>
            <div className=''>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    navigation={{ clickable: true }}
                    pagination={{ clickable: true }}
                    // autoplay={{ delay: 4000 }}
                    speed={400}
                    loop={true}
                    breakpoints={{ 0: { slidesPerView: 1 }, 728: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
                    spaceBetween={20}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    style={{ paddingTop: 10, paddingBottom: 30 }}
                >
                    {
                        mustWatch.map(item => (
                            <SwiperSlide
                                style={{ height: 'auto' }}
                            >
                                <MustWatchCard item={item} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default MustWatch

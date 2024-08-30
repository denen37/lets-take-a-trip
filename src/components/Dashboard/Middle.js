import React, { useState } from 'react'
import pointer from '../../assets/icons/Asset 5logos.png'
import star from '../../assets/icons/Asset 6logos.png'
import EasyVisa from './EasyVisa'
import CityCard from './CityCard'
import { easyVisaObj, filtersObj } from '../../data/places'
import { useImmer } from 'use-immer'

const Middle = () => {
    const [easyVisa, setEasyVisa] = useState(easyVisaObj)
    const [filters, setFilters] = useImmer(filtersObj)
    const [currentBtn, setCurrentBtn] = useState(filters[0].type);

    function handleFilterClick(text) {
        setCurrentBtn(text);
        setFilters(filters => {
            filters.forEach(filter => {
                if (filter.type == text) {
                    filter.current = true
                } else {
                    filter.current = false
                }
            })
        })
    }
    return (
        <div className='flex-1 flex flex-col px-4'>
            <div className='grid grid-cols-2 gap-3'>
                <div className='mt-6'>
                    <div className='flex items-center gap-3'>
                        <div className='w-16'>
                            <img className='w-full' src={pointer} alt='' />
                        </div>
                        <h1 className='text-3xl font-semibold'>Hello, John!</h1>

                    </div>
                    <div>
                        <p className='text-base text-[#848588] font-light'>
                            Welcome back!, Let's Take a Trip offers a complete range of services for a hassle-free
                            travel experience, from visas to tours.
                        </p>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='flex gap-2 items-center mt-6 mb-4'>
                    <h1 className='text-2xl font-[500]'>Easy Visa Destinations</h1>
                    <img src={star} alt='' className='w-7' />
                </div>
                <div className='grid grid-cols-2 gap-3 mt-1'>
                    {
                        easyVisa.map((place, index) => <EasyVisa key={index} destination={place} />)
                    }
                </div>
            </div>
            <div className='mt-10 flex flex-col flex-1'>
                <div className='flex gap-10 text-base'>
                    {
                        filters.map(filter => filter.type).map(text => <button className='font-[500]'
                            style={{ color: currentBtn == text ? '#FF6600' : '#848588' }}
                            onClick={() => handleFilterClick(text)}
                        >{text}</button>)
                    }
                </div>
                <div className='grid flex-1 grid-cols-2 mt-4 gap-x-6 gap-y-4'>
                    {
                        filters.find(filter => filter.current).places.map(place => <CityCard city={place} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Middle

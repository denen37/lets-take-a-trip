import React, { useEffect, useState } from 'react'
import { images } from '../../assets/resources'
import { useImmer } from 'use-immer'
const rootPath = 'http://localhost:3000'

const EasyVisa = ({ destination }) => {
    const [location, setLocation] = useImmer(destination)
    const [currentCity, setCurrentCity] = useState(location.places.find(place => place.current))

    function getCurrentCity() {
        return location.places.find(place => place.current)
    }

    const handlePlaceImageClick = (name) => {
        setLocation((destination) => {
            destination.places = destination.places.map(place => {
                if (place.name == name) {
                    place.current = true;
                    return place
                }
                place.current = false;
                return place;
            })
        })
        setCurrentCity(() => location.places.find(place => place.name == name))
    }
    return (
        <>
            <div className="bg-rwanda flex bg-blue-200 rounded-3xl py-6 px-6 gap-12 relative bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${currentCity.imagePath})` }}>
                <div className='flex items-center gap-4 p-1 rounded-full absolute right-4 top-4' style={{ backgroundColor: 'rgba(182, 162, 179, 0.3)' }}>
                    <div className='flex'>
                        <img src={images.like} alt='' className='w-8 aspect-square rounded-full object-cover bg-white p-1 z-10' />
                        <div className='flex items-center pl-10 pr-4 py-1 -ml-8 bg-[#b6a2b3] rounded-full'>
                            <p className='text-white'>92</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <img src={images.save} alt='ss' className='w-8 aspect-square rounded-full object-cover bg-white p-1 z-10' />
                        <div className='flex items-center pl-10 pr-4 py-1 -ml-8 bg-[#b6a2b3] rounded-full'>
                            <p className='text-white'>58</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 p-[10px] rounded-2xl' style={{ backgroundColor: 'rgba(182, 162, 179, 0.3)' }}>
                    {
                        location.places.map((place, index) => {
                            if (!place.current) {
                                return <img key={index} src={place.imagePath} alt='' className='w-[80px] aspect-square border-[4px] border-[#b6a2b3] rounded-2xl object-cover cursor-pointer'
                                    onClick={() => handlePlaceImageClick(place.name)}
                                />
                            }
                        })
                    }
                </div>

                <div className='flex flex-1 flex-col justify-end'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-white text-2xl font-[500]'>{getCurrentCity().name}</h2>
                        <div className='flex gap-1 items-center'>
                            <img src={images.location_white} alt="" className='w-8 -ml-[6px]' />
                            <p className='text-white'>{location.country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EasyVisa

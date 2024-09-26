import React from 'react'
import durban_sa from '../../assets/images/Durban-South Africa.jpeg'
import location from '../../assets/icons/location.png'
import review from '../../assets/icons/review.png'
import passport from '../../assets/icons/passport_black.png'
import user from '../../assets/icons/user (2).png'

const CityCard = ({ city }) => {
    return (
        <div className='flex p-3 items-center bg-[#e5e6e7] gap-8 rounded-2xl relative'>
            {
                city.discount && <div className='py-2 px-3 text-[10px] absolute top-0 left-0 w-fit rounded-tl-2xl rounded-br-2xl text-white'
                    style={{ backgroundColor: 'rgba(241, 102, 32, 0.7)' }}>{city.discount}</div>
            }
            <img src={city.imagePath} alt='' className='w-[100px] aspect-square object-cover rounded-3xl' />
            <div className='flex flex-col flex-1 justify-end gap-3'>
                <h1 className='text-xl text-gray-600'>{city.name}</h1>
                <div className='flex items-center gap-2'>
                    <img src={location} alt='' className='w-[30px] -ml-1' />
                    <p className='text-gray-600 text-sm'>{city.country}</p>
                </div>
                <div className='flex justify-between mt-2 text-gray-600'>
                    <div className='flex items-center gap-[2px]'>
                        <img src={user} alt='' className='w-[20px]' />
                        <p className='text-[10px]'>4.8 views</p>
                    </div>
                    <div className='flex items-center gap-[2px]'>
                        <img src={passport} alt='' className='w-[20px]' />
                        <p className='text-[10px]'>578 Applied</p>
                    </div>
                    <div className='flex items-center gap-[2px]'>
                        <img src={review} alt='' className='w-[20px]' />
                        <p className='text-[10px]'>498 Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CityCard

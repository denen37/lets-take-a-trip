import React from 'react'
import just_now from '../../assets/icons/recent_1.png'
import person from '../../assets/icons/person_flash.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'

const FeaturedContentCard = ({ item }) => {
    return (
        <div className='bg-gray-200 h-full overflow-hidden rounded-xl group transition-colors duration-400 flex flex-col'>
            <img className='w-full h-[150px] rounded-b-xl' src={item.imagePath} />
            <div className='mx-4 mt-6 mb-2 flex flex-col gap-5 flex-1'>
                <div className='flex items-start gap-3 flex-1'>
                    <h1 className='text-xl text-gray-600'>{item.header}</h1>
                    <button className='bg-[#eedfd7] text-[#FF6600] px-2 py-1 rounded-lg text-[12px] text-nowrap'>{item.tag}</button>
                </div>
                <p className='text-gray-400 text-base font-light'>
                    {item.details.substring(0, 105)}
                    <span>...</span>
                    <button className='text-sm text-gray-600 hover:opacity-70 transition-opacity'>Show more</button>
                </p>
            </div>
            <div className='flex flex-col'>
                <button className='text-white bg-[#FF6600] rounded-xl flex justify-center gap-2 items-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400'>
                    <FontAwesomeIcon icon={faCirclePlay} color={'white'} size='xl' />
                    <span className='text-2xl'>Play now</span>
                </button>
            </div>
        </div>
    )
}

export default FeaturedContentCard

import React from 'react'
import just_now from '../../assets/icons/recent_1.png'
import person from '../../assets/icons/person_flash.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'


const MustWatchCard = ({ item }) => {
    return (
        <div className='bg-gray-300 h-full rounded-xl group hover:bg-gray-200 transition-colors duration-400 flex flex-col'>
            <img className='w-full h-2/5 rounded-xl' src={item.imagePath} />
            <div className='px-4 py-2 flex flex-col justify-between flex-1'>
                <div className='font-light'>
                    <p className='text-gray-700'>{item.text}</p>

                    <div className='flex gap-6 items-center text-gray-600 py-2'>
                        <div className='flex items-center gap-2'>
                            <img src={just_now} alt='' className='w-6' />
                            <p className='text-sm'>{item.dateTime} ago</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={person} alt='' className='w-6' />
                            <p className='text-sm'>{item.plays} plays</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <button className='text-white bg-[#FF6600] rounded-lg flex justify-center gap-2 items-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400'>
                        <FontAwesomeIcon icon={faCirclePlay} color={'white'} size='xl' />
                        <span className='text-2xl'>Watch</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MustWatchCard

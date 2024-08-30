import React from 'react'
import user from '../../assets/icons/user (2).png'
import twitter from '../../assets/icons/twitter (1).png'
import follow from '../../assets/icons/follow (2).png'

const TwitterSocialCard = () => {
    return (
        <div className='p-4 bg-gray-50 rounded-xl'>
            <div className='flex justify-between items-start'>
                <div className='flex items-center gap-1'>
                    <img src={user} alt='' className='w-[50px] aspect-square rounded-full' />
                    <div>
                        <h1 className='text-gray-500'>Lets Take A Trip</h1>
                        <p className='text-sm text-[#848588] font-light'>2 hours ago</p>
                    </div>
                </div>

                <img src={twitter} alt='' className='w-[30px] aspect-square' />
            </div>

            <p className='text-[#848588] font-light mt-2'>
                We love seeing your adventures. Share your travel photos with #LetsTakeATrip for a chance to be featured on
                <span>...</span>
                <button className='text-sm font-bold text-gray-600 hover:opacity-70 transition-opacity'>show more</button>
            </p>

            <div className='flex justify-between items-center text-[#848588] font-light mt-1'>
                <div className='flex items-center gap-1'>
                    <p className='text-base'>Retweet</p>
                    <p className='text-sm'>9.6k</p>
                </div>
                <div className='flex items-center gap-1'>
                    <p className='text-base'>Likes</p>
                    <p className='text-sm'>3.4m</p>
                </div>
                <div className='flex gap-1 bg-blue-400 py-1 px-2 rounded-md cursor-pointer'>
                    <img src={follow} alt='' className='w-[15px] aspect-square' />
                    <p className='text-[12px] text-white font-light'>Follow</p>
                </div>
            </div>
        </div>
    )
}

export default TwitterSocialCard

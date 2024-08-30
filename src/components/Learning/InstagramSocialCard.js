import React from 'react'
//import cardImage from '/images/Learn/girls-blowing-bubbles.png'
import user from '../../assets/icons/user (2).png'
import follow from '../../assets/icons/follow (2).png'
import instagram from '../../assets/icons/instagram (1).png'

const InstagramSocialCard = () => {
    return (
        <div className='bg-gray-50 p-4 rounded-xl relative w-full'>
            <div className='bg-gray-50 rounded-xl p-2 w-[50px] absolute right-0 top-0'>
                <img src={instagram} alt='' className='w-full' />
            </div>
            <img src={'/images/Learn/girls-blowing-bubbles.png'} alt='' />
            <div className='mt-4'>
                <div className='flex justify-between items-start'>
                    <div className='flex items-center gap-1'>
                        <img src={user} alt='' className='w-[50px] aspect-square rounded-full' />
                        <div>
                            <h1 className='text-gray-500'>Lets Take A Trip</h1>
                            <p className='text-sm text-[#848588] font-light'>2 hours ago</p>
                        </div>
                    </div>
                    <div className='flex gap-1 bg-gradient-to-b from-purple-700 to-orange-500 py-1 px-2 rounded-md cursor-pointer'>
                        <img src={follow} alt='' className='w-[15px] aspect-square' />
                        <p className='text-[12px] text-white font-light'>Follow</p>
                    </div>
                </div>

                <p className='text-[#848588] font-light mt-2'>
                    Travel Tuesday Tip: Pack light, Travel smart, Here\'s how you can maximize your suitcase space without
                    sacrificing style
                    <span>...</span>
                    <button className='text-sm font-bold text-gray-600 hover:opacity-70 transition-opacity'>show more</button>
                </p>

                <div className='mt-4'>
                    <input type='text' placeholder='Write a comment' className='px-3 py-1 bg-gray-200 ring-4 ring-gray-300 focus:ring-gray-400 outline-none rounded-lg font-light w-full' />
                </div>
            </div>
        </div>
    )
}

export default InstagramSocialCard

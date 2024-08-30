import React from 'react'
import user from '../../assets/icons/user (2).png'
import facebook from '../../assets/icons/facebook (4).png'

const FacebookSocialCard = () => {
    return (
        <div className='bg-gray-50 rounded-xl'>
            <div className='p-4'>
                <div className='flex justify-between items-start'>
                    <div className='flex items-center gap-1'>
                        <img src={user} alt='' className='w-[50px] aspect-square rounded-full' />
                        <div>
                            <h1 className='text-gray-500'>Lets Take A Trip</h1>
                            <p className='text-sm text-[#848588] font-light'>2 hours ago</p>
                        </div>
                    </div>

                    <img src={facebook} alt='' className='w-[30px] aspect-square' />
                </div>

                <p className='text-[#848588] font-light mt-2'>
                    We love seeing your adventures. Share your travel photos with #LetsTakeATrip for a chance to be featured on
                    <span>...</span>
                    <button className='text-sm font-bold text-gray-600 hover:opacity-70 transition-opacity'>show more</button>
                </p>
            </div>

            <img src='/images/Learn/outdoor.png' />
        </div>
    )
}

export default FacebookSocialCard

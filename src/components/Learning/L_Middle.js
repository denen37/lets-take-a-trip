import React from 'react'
import MustWatch from './MustWatch'
import FeaturedContent from './FeaturedContent'
import { images } from '../../assets/resources'

const L_Middle = () => {
    return (
        <div className='flex-1 flex flex-col px-4'>
            <div className='grid grid-cols-[1fr_200px] gap-3'>
                <div className='mt-6'>
                    <div className='flex items-start gap-3'>
                        <div className='w-16'>
                            <img className='w-full' src={images.bubble} alt='' />
                        </div>
                        <h1 className='text-3xl font-normal'>Your Travel Adventure Starts Here</h1>

                    </div>
                    <div>
                        <p className='text-base text-[#848588] font-light'>
                            Embark on a journey of self discovery! Learn everything you need to know about Travel Planning
                            and Exploration
                        </p>
                    </div>
                </div>
            </div>
            <MustWatch />


            <FeaturedContent />

        </div>
    )
}

export default L_Middle

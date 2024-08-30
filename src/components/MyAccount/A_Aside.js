import React, { useState } from 'react'
import user from '../../assets/icons/user.png'
import person from '../../assets/icons/profile (2).png'
import job from '../../assets/icons/job.png'
import { recentActivities } from '../../data/places'
import ReactJsPopup from '../Shared/ReactJsPopup'

const A_Aside = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasNext, setHasNext] = useState(true);
    const [hasPrev, setHasPrev] = useState(false);

    const handleMovePrev = () => {
        let index
        if (currentIndex > 0) {
            setCurrentIndex(() => currentIndex - 1)
            index = currentIndex - 1
        }
        if (index <= 0) {
            setHasPrev(false);
        }
        setHasNext(true);
    }

    const handleMoveNext = () => {
        let index
        if (currentIndex < recentActivities.length - 1) {
            setCurrentIndex(() => currentIndex + 1);
            index = currentIndex + 1
        }
        if (index >= recentActivities.length - 1) {
            setHasNext(false);
        }
        setHasPrev(true)
    }
    return (
        <div className='w-full flex-1 bg-[#d5d6d7] p-4 mt-12 rounded-3xl'>
            <div className='flex flex-col items-center gap-4 px-4 py-6 bg-[#f0f1f1] rounded-3xl'>
                <h1 className='text-lg'>Your Public Profile</h1>
                <img className='h-[80px] rounded-t-xl w-full object-cover' src={'/images/Account/tech_background.jpg'} alt='bg' />
                <div className='-mt-12 flex flex-col items-center gap-1 px-3'>
                    <img src={user} alt='' className='bg-[#ff6600] w-[60px] aspect-square rounded-full' />
                    <p className='font-bold'>John Doe</p>
                    <p className='text-light text-gray-400'>@Jonny</p>
                    <p className='text-gray-400 font-light text-sm text-center'>
                        I am an enterprenuer. I love to make changes at all times in business.
                        And make sure my customers have the best experience with our services.
                    </p>

                    <div className='flex items-center justify-between w-full mt-2'>
                        <div className='flex items-center gap-1'>
                            <img src={job} alt='' className='h-4' />
                            <p className='font-light text-gray-400 text-[12px]'>Enterpreneur</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img src={person} alt='' className='h-4' />
                            <p className='font-light text-gray-400 text-[12px]'>Male</p>
                        </div>
                    </div>
                </div>
                <button className='text-white bg-[#f16620] hover:opacity-75 active:opacity-100 transition-colors rounded-[10px] px-3 py-1 text-sm mt-3 font-light'>
                    Edit your  public profile
                </button>
            </div>
            <div className='mt-6 bg-[#f0f1f1] p-4 rounded-xl'>
                <div className='flex items-center justify-between'>
                    <button className='font-light bg-[#FF6600] text-white rounded-lg rounded-bl-none px-2 py-0.5 text-sm'>Article</button>

                    <ReactJsPopup
                        trigger={<button className='h-5 aspect-square rounded-full text-gray-400 border border-gray-400'>i</button>}
                        content={<div className='bg-white rounded-lg p-2 text-gray-500 text-sm font-light'>
                            This section features content from our learning platform.
                        </div>}
                        position={"top right"}
                    />
                </div>
                <h1 className='text-gray-600 my-2'>Learn more about profile</h1>
                <div className='flex flex-col justify-end bg-gray-600 h-[150px] rounded-xl'>
                    <div className='flex items-center justify-between bg-[#f0f1f1] gap-2 py-2 px-2 rounded-xl border border-gray-400'>
                        <p className='text-gray-500 text-sm font-light'>What is public profile and why is it important for users</p>
                        <button className='text-white text-nowrap text-[12px] bg-[#f16620] hover:opacity-75 active:opacity-100 transition-colors rounded-lg px-3 py-1 mt-3 font-light'>
                            Learn more
                        </button>
                    </div>
                </div>
                <div className='mt-3'>
                    <button className='font-light bg-[#FF6600] text-white rounded-lg rounded-bl-none px-2 py-0.5 text-sm'>Guide</button>
                    <div className='mt-2 flex items-center justify-between bg-[#f0f1f1] gap-2 py-2 px-2 rounded-xl border border-gray-400'>
                        <p className='text-gray-500 text-sm font-light'>How to properly create and setup a public profile (step by step guide)</p>
                        <button className='text-white text-nowrap text-[12px] bg-[#f16620] hover:opacity-75 active:opacity-100 transition-colors rounded-lg px-3 py-1 mt-3 font-light'>
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default A_Aside

import React, { useState } from 'react'
import user from '../../assets/icons/user.png'
import loading from '../../assets/icons/loading.png'
import refresh from '../../assets/icons/circular-arrow.png'
import uk from '../../assets/images/UK.webp'
import location from '../../assets/icons/location.png'
import calendar from '../../assets/icons/calendar.png'
import star from '../../assets/icons/star.png'
import { recentActivities } from '../../data/places'

const Aside = () => {
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
                <h1 className='text-xl'>Your Profile</h1>
                <img src={user} alt='' className='bg-[#f3d4bf] w-[110px] aspect-square rounded-full mt-3' />
                <p className='font-bold'>John Doe</p>
                <p className='text-center'>2 CD, California, United States</p>
                <button className='text-white bg-[#f16620] hover:opacity-75 active:opacity-100 transition-colors rounded-[10px] px-3 py-1 text-base mt-3'>Create a learning profile</button>
            </div>
            <div className='bg-[#f0f1f1] rounded-xl p-3 mt-6'>
                <div className='py-[2px] px-3 w-fit rounded-e-full rounded-tl-full bg-[#f16620] text-white'>New</div>
                <h1>Ongoing Offers</h1>
                <div className='flex gap-3 mt-3'>
                    <div className='w-[70%] aspect-[1.33] bg-[#d5d6d7] flex items-center justify-center rounded-s-2xl'>
                        <img src={loading} alt='' className='w-10' />
                    </div>
                    <div className='flex flex-col flex-1 justify-between items-center px-1 py-2 bg-[#d5d6d7] rounded-xl'>
                        <p className='text-center text-[11px]'>Start <br />Date</p>
                        <div className='bg-[#4d4d4e] h-[2px] w-full'></div>
                        <p className='text-center text-[11px]'>End <br />Date</p>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <div className='flex justify-between items-center'>
                    <h1>Recent Activities</h1>
                    <div className='p-1 aspect-square bg-[#afb0b1] rounded-lg'>
                        <img src={refresh} alt='' className='w-[18px]' />
                    </div>
                    <button className='bg-[#f0f1f1] text-orange-500 px-1 py-[2px] rounded-lg hover:opacity-75 active:opacity-100 transition-colors'>View all</button>
                </div>
                <div className='flex bg-[#d9dadb] rounded-2xl border border-[#c8cacc] gap-4 py-2 px-4 mt-5'>
                    <img src={recentActivities[currentIndex].imagePath} alt='' className='w-[100px] aspect-square rounded-2xl object-cover border border-[#c8cacc]' />
                    <div className='flex flex-col justify-between gap-4'>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-base text-gray-600 text-left'>{recentActivities[currentIndex].name}</h2>
                            <button className='bg-[#e1b89d] flex gap-1 items-center rounded-lg px-1 py-[2px]'>
                                <img src={location} alt='' className='w-[20px]' />
                                <p className='text-[10px] text-gray-500'>{recentActivities[currentIndex].country}</p>
                            </button>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='flex gap-3 items-center'>
                                <img src={calendar} alt='' className='w-[20px]' />
                                <p className='text-[10px]'>{recentActivities[currentIndex].date}</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <img src={star} alt="" className='w-[20px]' />
                                <p className='text-[10px] capitalize'>{recentActivities[currentIndex].isApplied ? 'applied' : 'not applied'}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-3 mt-5'>
                    <button className='text-white text-[10px] bg-[#ff6600] rounded-lg px-3 py-[3px]'
                        onClick={handleMovePrev}
                        style={!hasPrev ? { opacity: 0.5, pointerEvents: 'none' } : {}}
                    >Back</button>
                    <div className='flex flex-1 justify-between gap-1'>
                        {
                            recentActivities.map((place, index) => <button key={index} className='flex-1 h-[2px]'
                                style={{ backgroundColor: currentIndex == index ? '#ff6600' : '#9ca3af' }}
                                onClick={() => setCurrentIndex(index)}
                                disabled={!hasPrev}
                            ></button>)
                        }
                    </div>
                    <button className='text-white text-[10px] bg-[#ff6600] rounded-lg px-3 py-[3px]'
                        onClick={handleMoveNext}
                        style={!hasNext ? { opacity: 0.5, pointerEvents: 'none' } : {}}
                    >Next</button>
                </div>
            </div>
        </div>
    )
}

export default Aside

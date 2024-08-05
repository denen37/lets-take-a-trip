import React from 'react'
import just_now from '../../assets/icons/recent_1.png'
import person from '../../assets/icons/person_flash.png'
import secure from '../../assets/icons/secure-data.png'
import pointer from '../../assets/icons/Asset 5logos.png'
import copyright from '../../assets/icons/copyright.png'

const NewsPreview = ({ activeNews }) => {
    return (
        <>
            <div className='bg-[#FF6600] py-4 px-5'>
                <h1 className='text-white text-xl'>{activeNews.header}</h1>
            </div>
            <div className='bg-white px-4 flex-1'>
                <div className='flex gap-10 py-5 items-center text-gray-500'>
                    <div className='flex items-center gap-4'>
                        <img src={secure} alt='' className='w-6' />
                        <p className='text-sm'>Secure</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={person} alt='' className='w-6' />
                        <p className='text-sm'>From Lets Take A trip</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={just_now} alt='' className='w-6' />
                        <p className='text-sm'>Just now</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-3'>
                        <img src={pointer} alt='' className='w-8' />
                        <h1 className='text-lg'>Start planning your dream trip with our easy-to-use platform</h1>
                    </div>
                    {/* <p className='my-4 text-gray-600'>LetsTakeATrip makes travel planning effortless. Explore features,<br />
                        build itineraries, and book everything in one place.</p> */}
                    <p className='my-4 text-gray-600'>{activeNews.details}</p>
                </div>
                <div className='text-gray-400 text-sm'>
                    <p className='my-4'>Everything you need to explore the world with LetsTakeATrip:</p>
                    <ul className='flex flex-col gap-2 list-disc ps-4 marker:text-[#FF6600] marker:text-xl marker:leading-none'>
                        <li className='py-0'>Discover & Search: Find hidden gems & your favorite destinations,
                            get tailored suggestions.
                        </li>
                        <li>Personalized Itineraries: Craft your dream trip with ease.</li>
                        <li>Seamless Booking: Flights, hotels, activities, and visa application
                            support - all in one place.
                        </li>
                        <li>Learn & Explore: Switch between travel inspiration and planning seamlessly.</li>
                        <li>Easy Appointments: Book consultations with travel experts effortlessly.</li>
                    </ul>

                    <p className='my-6'>Let's Take a Trip:  Make travel planning a breeze!</p>
                </div>
                <div className='flex flex-col gap-16 items-center py-2'>
                    <button className='text-white bg-[#FF6600] px-32 py-2 rounded-full mt-2'>Start Exploring</button>
                    <div className='flex gap-2'>
                        <img src={copyright} alt='' className='w-5' />
                        <p className='text-sm text-gray-400'>Powered by <span className='text-[#FF6600]'>lets take a trip</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsPreview

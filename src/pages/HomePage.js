import React, { useEffect } from 'react'
import { images } from '../assets/resources'
import { Link } from 'react-router-dom'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import LibraryPopover from '../components/Home/LibraryPopover';


const HomePage = () => {

    useEffect(() => {
        if (isMobile) {
            console.log('User is using mobile')
            return
        }

        console.log('User is not using mobile')
    })

    const CardButton = ({ image, name, link }) => {
        return (
            <Link className='group flex flex-col items-center gap-3 hover:shadow-[0px_5px_20px_rgba(0,0,0,0.35)] px-4 pt-3 pb-2 rounded-lg cursor-pointer transition-shadow duration-300'
                to={link}
            >
                <div className='p-3 group-hover:bg-orange-600 aspect-square rounded-full transition-colors duration-300'>
                    <img src={image} alt='' className='w-[30px]' />
                </div>
                <p className='text-gray-500'>{name}</p>
            </Link>
        )
    }

    const FeatureButton = ({ icon, text, bordercolor }) => {
        return (
            <button className={`flex items-center gap-2 py-1 px-4 border ${bordercolor} rounded-full w-full hover:bg-gray-300 hover:border-gray-300 transition-colors duration-300 group`}>
                <img src={icon} alt='' className='w-[20px]' />
                <span className='text-gray-600 group-hover:text-white transition-colors duration-300'>{text}</span>
            </button>
        )
    }

    return (
        <>
            <BrowserView>
                <div className='grid grid-cols-[1fr_40vw] relative h-screen'>
                    <div className='h-full rounded-e-3xl relative flex items-center'
                        style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/Home/UK_image.webp)' }}>
                        <div className='max-w-[300px] ms-auto px-6 me-10 mt-10'>
                            <h1 className='text-6xl font-bold text-white'>Life is a journey.</h1>
                            <div className='w-[20%] h-0.5 bg-white my-2'></div>
                            <p className='text-gray-100 max-w-[300px] font-light'>
                                We offer seamless travel planning, expert guidance, and unforgetable adventures.
                                We are your passport to a world of possibilities.
                                Explore stress free today.
                            </p>

                            <button className='bg-orange-600 text-white py-2 px-16 mt-16 rounded-full border border-orange-600 hover:text-orange-600 hover:bg-white transition-colors duration-300'>LEARN MORE</button>
                        </div>
                        <img src={images.plane_takeoff} alt='' className='absolute w-[200px] right-0 top-10' />
                        <div className='bg-white h-[120px] rounded-b-full absolute -top-1 left-10 max-w-[120px] px-2 flex items-center'>
                            <img src={images.logo} className='w-full' />
                        </div>
                    </div>
                    <div className='flex flex-col items-center px-14 py-8 gap-16 relative'>
                        <div className='flex items-center gap-10'>
                            <div className='flex items-center gap-4'>
                                <Link className='rounded-full py-1 px-4 border border-orange-600 text-orange-600 transition-colors duration-300 hover:bg-orange-600 hover:text-white' to={'/signup'} >Register</Link>
                                <Link className='rounded-full py-1 px-4 border border-orange-600 bg-orange-600 text-white  transition-colors duration-300 hover:bg-transparent hover:text-orange-600' to={'/login'}>Sign In</Link>
                            </div>
                            <LibraryPopover />
                        </div>

                        <div className='flex flex-col items-center gap-6'>
                            <h1 className='text-2xl'>What You're Looking For?</h1>
                            <div className='flex items-center justify-between mt-4'>

                                <CardButton image={images.hotel_gray} name='Hotels' />
                                <CardButton image={images.trip} name='Trips' />
                                <CardButton image={images.visa} name='VISA' link="/visa" />
                                <CardButton image={images.airplane} name='Tour' />
                            </div>

                            <div className='flex items-center gap-6 border border-gray-300 rounded-full px-6 py-3'>
                                <div className='p-3 border border-gray-300 rounded-full'>
                                    <img src={images.search_glass} alt='' className='w-[30px]' />
                                </div>
                                <div className='font-bold'>
                                    <h1 className='text-2xl'>Dubai, Canada</h1>
                                    <h2 className='text-gray-300 text-xl'>Search Destination</h2>
                                </div>
                            </div>

                        </div>

                        <div className='grid grid-cols-[auto_auto] gap-x-4 gap-y-2 justify-between'>
                            <FeatureButton icon={images.visa_app} text={'US VISA Application'} bordercolor={'border-orange-500'} />

                            <FeatureButton icon={images.study_lamp} text={'Study VISA'} bordercolor={'border-yellow-500'} />

                            <FeatureButton icon={images.learnmore} text={'Learn more about travel'} bordercolor={'border-blue-500'} />

                            <FeatureButton icon={images.contact} text={'Contact Us'} bordercolor={'border-green-500'} />
                        </div>
                        {/* <div className='px-32 border border-gray-400 absolute -rotate-90 -right-10 top-1/2 -translate-y-1/2'>
                    <p className='text-gray-400 text-sm font-light'>Give Feedback</p>
                </div> */}
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className='px-6'>
                    <div className='flex items-center justify-between py-4'>
                        <Link to={'/'} className='w-[70px]'>
                            <img src={images.logo} className='w-full' />
                        </Link>
                        <div className='flex items-center gap-4'>
                            <Link className='rounded-full py-1 px-4 border border-orange-600 bg-orange-600 text-white  transition-colors duration-300 hover:bg-transparent hover:text-orange-600' to={'/login'}>Sign In</Link>
                            <LibraryPopover />
                        </div>
                    </div>

                    <div className='h-full rounded-3xl relative flex items-center py-6'
                        style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/Home/UK_image.webp)' }}>
                        <div className='max-w-[300px] w-3/5 mx-auto mt-10'>
                            <h1 className='text-3xl font-bold text-white'>Life is<br /> a journey.</h1>
                            <div className='w-[20%] h-0.5 bg-white my-2'></div>
                            <p className='text-gray-100 text-sm max-w-[300px] font-light'>
                                We offer seamless travel planning, expert guidance, and unforgetable adventures.
                                We are your passport to a world of possibilities.
                                Explore stress free today.
                            </p>

                            <button className='bg-orange-600 text-white py-2 w-52 mt-16 rounded-full border border-orange-600 hover:text-orange-600 hover:bg-white transition-colors duration-300'>LEARN MORE</button>
                        </div>
                        <img src={images.plane_takeoff} alt='' className='absolute w-[100px] right-0 top-10' />
                    </div>

                    <div className='flex flex-col items-center mt-6 gap-3'>
                        <h1 className='text-2xl'>What You're Looking For?</h1>
                        <div className='flex items-center justify-between px-1'>
                            <CardButton image={images.hotel_gray} name='Hotels' />
                            <CardButton image={images.trip} name='Trips' />
                            <CardButton image={images.visa} name='VISA' link="/visa" />
                            <CardButton image={images.airplane} name='Tour' />
                        </div>
                    </div>

                    <div className='flex items-center gap-6 border border-gray-300 rounded-full px-6 py-3 mt-6 mb-4'>
                        <div className='p-3 border border-gray-300 rounded-full'>
                            <img src={images.search_glass} alt='' className='w-[30px]' />
                        </div>
                        <div className='font-bold'>
                            <h1 className='text-2xl'>Dubai, Canada</h1>
                            <h2 className='text-gray-300 text-xl'>Search Destination</h2>
                        </div>
                    </div>
                </div>
            </MobileView>
        </>
    )
}

export default HomePage

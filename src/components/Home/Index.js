import React from 'react'
import dashboard_light from '../../assets/icons/dashboard_light2.png'
import hotel_light from '../../assets/icons/hotel_light3.png'
import visa from '../../assets/icons/visa.png'
import airplane from '../../assets/icons/airplane.png'
import trip from '../../assets/icons/trip.png'
import search from '../../assets/icons/magnifying-glass.png'
import visa_app from '../../assets/icons/visa app.png'
import learnmore from '../../assets/icons/learnmore.png'
import study_lamp from '../../assets/icons/study-lamp.png'
import contact from '../../assets/icons/contact.png'
import plane_takeoff from '../../assets/icons/plane_takeoff.png'
import logo from '../../assets/images/Let’s_take _a _trip _logo.png'
import { Link } from 'react-router-dom'

const cardBtns = [
    {}
]
const Index = () => {

    const CardButton = ({ image, name }) => {
        return (
            <div className='flex flex-col items-center gap-3 px-4 pt-3 pb-2 rounded-lg cursor-pointer '>
                <div className='p-3 aspect-square rounded-full transition-colors duration-300'>
                    <img src={image} alt='' className='w-[30px]' />
                </div>
                <p className='text-gray-500'>{name}</p>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-[1fr_40vw] relative h-screen'>
            <div className='h-full rounded-e-3xl relative flex items-center'
                style={{ backgroundImage: 'url(/images/Home/UK_image.webp)' }}>
                <div className='max-w-[300px] ms-auto px-6 me-10 mt-10'>
                    <h1 className='text-6xl font-bold text-white'>Life is a journey.</h1>
                    <div className='w-[20%] h-0.5 bg-white my-2'></div>
                    <p className='text-gray-100 max-w-[300px] font-light'>
                        We offer seamless travel planning, expert guidance, and unforgetable adventures.
                        We are your passport to a world of possibilities.
                        Explore stress free today.
                    </p>

                    <button className='bg-orange-600 text-white py-2 px-16 mt-16 rounded-full border border-orange-600 hover:text-orange-600 hover:bg-white transition-colors duration-300'>GET STARTED</button>
                </div>
                <img src={plane_takeoff} alt='' className='absolute w-[200px] right-0 top-10' />
                <div className='bg-white h-[120px] rounded-b-full absolute -top-1 left-10 max-w-[120px] px-2 flex items-center'>
                    <img src={logo} className='w-full' />
                </div>
            </div>
            <div className='flex flex-col items-center px-14 py-8 gap-16 relative'>
                <div className='flex items-center gap-10'>
                    <div className='flex items-center gap-4'>
                        <Link className='rounded-full py-1 px-4 border border-orange-600 text-orange-600 transition-colors duration-300 hover:bg-orange-600 hover:text-white' to={'/signup'} >Register</Link>
                        <Link className='rounded-full py-1 px-4 border border-orange-600 bg-orange-600 text-white  transition-colors duration-300 hover:bg-transparent hover:text-orange-600' to={'/login'}>Sign In</Link>
                    </div>
                    <div className='bg-orange-600 rounded-full p-1.5'>
                        <img src={dashboard_light} alt='' className='w-[25px]' />
                    </div>
                </div>

                <div className='flex flex-col items-center gap-6'>
                    <h1 className='text-2xl'>What You're Looking For?</h1>
                    <div className='flex items-center justify-between mt-4'>
                        <div className='flex flex-col items-center gap-3 shadow-[0px_5px_20px_rgba(0,0,0,0.35)] px-4 pt-3 pb-2 rounded-lg cursor-pointer'>
                            <div className='p-3 bg-orange-600 aspect-square rounded-full'>
                                <img src={hotel_light} alt='' className='w-[30px]' />
                            </div>
                            <p className='text-gray-500'>Hotels</p>
                        </div>
                        <CardButton image={trip} name='Trips' />
                        <CardButton image={visa} name='VISA' />
                        <CardButton image={airplane} name='Tour' />
                    </div>

                    <div className='flex items-center gap-6'>
                        <div className='p-3 border border-gray-500 rounded-full'>
                            <img src={search} alt='' className='w-[30px]' />
                        </div>
                        <div className='font-bold'>
                            <h1 className='text-2xl'>Dubai, Canada</h1>
                            <h2 className='text-gray-500 text-xl'>Search Destination</h2>
                        </div>
                    </div>

                </div>

                <div className='grid grid-cols-[auto_auto] gap-x-4 gap-y-2 justify-between'>
                    <button className='flex items-center gap-2 py-1 px-4 border border-orange-500 rounded-full w-full'>
                        <img src={visa_app} alt='' className='w-[20px]' />
                        <span className='text-gray-600'>US VISA Application</span>
                    </button>

                    <button className='flex items-center gap-2 py-1 px-4 border border-yellow-500 rounded-full w-full'>
                        <img src={study_lamp} alt='' className='w-[25px]' />
                        <span className='text-gray-600'>Study VISA</span>
                    </button>

                    <button className='flex items-center gap-2 py-1 px-4 border border-blue-500 rounded-full w-full'>
                        <img src={learnmore} alt='' className='w-[25px]' />
                        <span className='text-gray-600'>Learn more about travel</span>
                    </button>

                    <button className='flex items-center gap-2 py-1 px-4 border border-green-500 rounded-full w-full'>
                        <img src={contact} alt='' className='w-[25px]' />
                        <span className='text-gray-600'>Contact Us</span>
                    </button>
                </div>
                {/* <div className='px-32 border border-gray-400 absolute -rotate-90 -right-10 top-1/2 -translate-y-1/2'>
                    <p className='text-gray-400 text-sm font-light'>Give Feedback</p>
                </div> */}
            </div>
        </div>
    )
}

export default Index

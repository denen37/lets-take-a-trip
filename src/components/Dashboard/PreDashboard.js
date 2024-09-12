import React from 'react'
import { images } from '../../assets/resources'
import { Link } from 'react-router-dom'

const PreDashboard = () => {
    return (
        <div className=''>
            <div className='flex items-center justify-between my-4 mx-5 fixed top-0 left-0 right-0'>
                <Link to='/'>
                    <img src={images.logo} alt='' className='w-20' />
                </Link>

                <div className='flex items-center gap-5'>
                    <Link className='px-6 py-1 font-light rounded-md bg-gray-200'>Support</Link>

                    <Link className='px-6 py-1 font-light rounded-md bg-red-500 text-white'
                        to={'/logout'}
                    >Log out</Link>
                </div>
            </div>

            <div className='w-full md:w-6/12 bg-gray-200 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 py-5'>
                <div className='flex flex-col items-center'>
                    <p className='text-2xl font-light text-center w-5/12'>Welcome @username what will you love to do today?</p>
                    <div className='w-2/5 flex items-center justify-between mt-10 mb-10'>
                        <Link className='text-white hover:text-black px-4 py-1 rounded-lg font-light bg-orange-600 hover:bg-transparent border border-orange-600 transition-colors duration-300'
                            to={'/dashboard'}
                        >
                            Explore
                        </Link>
                        <Link className='px-4 py-1 rounded-lg font-light bg-transparent hover:bg-orange-600 hover:text-white border border-orange-600 transition-colors duration-300'
                            to={'/learning'}
                        >
                            Learn
                        </Link>
                    </div>
                </div>
                <div className='h-[1px] bg-gray-400'></div>
                <div className='flex items-center justify-between text-sm font-light px-5 py-2'>
                    <p>Copyright &#169; 2024 LetsTakeATrip</p>
                    <div>
                        <Link className='me-5'>Privacy</Link>
                        <Link>Policy</Link>
                    </div>
                </div>
            </div>

            <div className='py-0.5 px-5 border border-gray-500 absolute top-1/2 -translate-y-1/2 -rotate-90 -right-12'>
                <p className='text-[12px] font-light text-center'>Give Feedback</p>
            </div>
        </div>
    )
}

export default PreDashboard

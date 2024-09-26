import React from 'react'
import Header from '../Dashboard/Header'
import Sidebar from '../Dashboard/Sidebar'
import T_Aside from './T_Aside'
import T_Middle from './T_Middle'

const TourBooking = () => {
    return (
        <div className='pt-[15vh] relative'>
            <Header />
            <div className='bg-gray-300 flex pr-4 pb-6'>
                <div className='w-[18%] flex flex-col'>
                    <Sidebar />
                </div>
                <div className='w-[60%] px-3 flex flex-col'>
                    <T_Middle />
                </div>
                <div className='w-[22%] flex flex-col'>
                    <T_Aside />
                </div>
            </div>
        </div>
    )
}

export default TourBooking

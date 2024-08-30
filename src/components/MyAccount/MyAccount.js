import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import A_Middle from './A_Middle'
import A_Aside from './A_Aside'

const MyAccount = () => {
    return (
        <div className='bg-[#c1c3c5] flex pr-4 pb-6'>
            <div className='w-[18%] flex flex-col'>
                <Sidebar />
            </div>
            <div className='w-[55%] px-3 flex flex-col'>
                <A_Middle />
            </div>
            <div className='w-[27%] flex flex-col'>
                <A_Aside />
            </div>

        </div>
    )
}

export default MyAccount

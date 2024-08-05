import React from 'react'
import Aside from './Aside'
import Sidebar from './Sidebar'
import Middle from './Middle'
import Notification from '../Notification/Notification'

const Main = () => {
    return (
        <div className='bg-[#c1c3c5] flex pr-4 pb-6'>
            <div className='w-[18%] flex flex-col'>
                <Sidebar />
            </div>
            {
                true && <>
                    <div className='w-[60%] px-3 flex flex-col'>
                        <Middle />
                    </div>
                    <div className='w-[22%] flex flex-col'>
                        <Aside />
                    </div>
                </>
            }
            {
                false && <Notification />
            }
        </div>
    )
}

export default Main

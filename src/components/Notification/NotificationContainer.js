import React from 'react'
import Notification from './Notification'
import Sidebar from '../Dashboard/Sidebar'
import Aside from '../Dashboard/Aside'
import Header from '../Dashboard/Header'

const NotificationContainer = () => {
    return (
        <div className='pt-[15vh]'>
            <Header />
            <div className='bg-gray-300 flex pr-4 pb-6 md:pl-[250px]'>

                <Sidebar />

                <Notification />

            </div>
        </div>
    )
}

export default NotificationContainer

import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Dashboard/Header'

const DashboardContainer = () => {
    return (
        <div className='pt-[15vh]'>
            <Header />
            <Outlet />
        </div>
    )
}

export default DashboardContainer


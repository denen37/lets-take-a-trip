import React from 'react'
import { Outlet } from 'react-router-dom'


const DashboardContainer = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default DashboardContainer


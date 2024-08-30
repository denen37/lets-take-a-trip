import React from 'react'
import L_Sidebar from './L_Sidebar'
import L_Middle from './L_Middle'
import L_Aside from './L_Aside'
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from '../Dashboard/Header'

const Learning = () => {
    return (
        <div className='pt-[15vh] relative'>
            <Header />
            <div className='bg-gray-300 flex pr-4 pb-6'>
                <div className='w-[18%] flex flex-col'>
                    <L_Sidebar />
                </div>
                <div className='w-[60%] px-3 flex flex-col'>
                    <Outlet />
                </div>
                <div className='w-[22%] flex flex-col'>
                    <L_Aside />
                </div>
            </div>
        </div>
    )
}

export default Learning

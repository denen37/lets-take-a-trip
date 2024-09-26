import React, { useState, useEffect } from 'react'
import Aside from './Aside'
import Sidebar from './Sidebar'
import Middle from './Middle'
import Notification from '../Notification/Notification'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllEasyVisas } from '../../features/places/easyVisaSlice';
import { images } from '../../assets/resources'
import Header from '../Dashboard/Header'

const Dashboard = () => {
    // const easyVisas = useSelector(state => state.easyVisas.data);
    const easyVisaStatus = useSelector(state => state.easyVisas.status)
    // const easyVisaError = useSelector(state => state.easyVisas.error)

    const dispatch = useDispatch();

    useEffect(() => {
        if (easyVisaStatus === 'idle') {
            dispatch(fetchAllEasyVisas());
        }
    }, [])

    if (easyVisaStatus === 'loading') {
        return (<div className='h-screen flex justify-center items-center bg-[#fbfbfb]'>
            <img src={images.airplane_loading_gif} alt='' className='w-[300px]' />
        </div>)

    }


    return (
        <div className='pt-[15vh]'>
            <Header />
            <div className='bg-gray-300 flex pr-4 pb-6 md:pl-[250px]'>

                <Sidebar />

                <Middle />

                <Aside />

            </div>
        </div>
    )
}

export default Dashboard

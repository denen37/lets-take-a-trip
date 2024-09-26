import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import { images } from '../../assets/resources'
const contentStyle = {
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '450px',
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);',
}

const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
const arrowStyle = { color: '#000' }; // style for an svg element


const LibraryPopover = ({ trigger }) => {
    return (
        <Popup
            trigger={<div className='bg-orange-600 rounded-full p-1.5 cursor-pointer'>
                <img src={images.dashboard_light} alt='' className='w-[25px]' />
            </div>}
            position="bottom right"
            {...{ contentStyle }}
        >
            <div className='flex gap-4 flex-col md:flex-row'>
                <div className='border border-green-400 rounded-lg p-4'>
                    <img className='w-[150px] block mx-auto' src='/images/Home/personal-branding.jpg' alt='' />
                    <p className='text-lg text-green-400 font-semibold text-center mt-2'>Article Library</p>
                    <p className='text-gray-500 text-[12px] text-center font-light'>
                        Expand your horizon with our vast library of informative articles.
                        Learn about different cultures, destinations and travel trips
                    </p>
                </div>
                <div className='border border-orange-600 rounded-lg p-4'>
                    <img className='w-[150px]  block mx-auto' src='/images/Home/programmer-illustration.jpg' alt='' />
                    <p className='text-lg font-semibold text-center mt-2 text-orange-600'>Video Library</p>
                    <p className='text-gray-500 text-[12px] text-center font-light'>
                        Visualize your next adventure.
                        Learn from expert Vlogs and tips that offer
                        practical tips and insights for your next trip
                    </p>
                </div>
            </div>
            <p className='my-4 text-sm text-gray-500 font-light'>Explore our library and discover your next Adventure!</p>

            <button className='bg-orange-500 text-white py-2 px-20 rounded-full'>JOIN TO EXPLORE</button>

            <div className='mt-4 w-full'>
                <img src='/images/Home/thumbnail_youtube.jpg' className='h-[100px] w-full bg-cover' />
            </div>
        </Popup>
    )
}

export default LibraryPopover

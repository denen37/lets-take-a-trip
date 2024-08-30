import React, { useState } from 'react'
import more from '../../assets/icons/more-btn.png'
import refresh from '../../assets/icons/circular-arrow.png'
import dashboard_light from '../../assets/icons/dashboard_light2.png'
import dashboard_gray from '../../assets/icons/dashboard_gray.png'
import passport_gray from '../../assets/icons/passport_gray.png'
import passport_light from '../../assets/icons/passport_light.png'
import hotel_light from '../../assets/icons/hotel_light2.png'
import arrow_right from '../../assets/icons/arrow-right.png'
import hotel_gray from '../../assets/icons/hotel_gray.png'
import inbox_gray from '../../assets/icons/inbox_gray.png'
import inbox_light from '../../assets/icons/inbox_light.png'
import settings from '../../assets/icons/settings.png'
import user_edit from '../../assets/icons/image-user-edit.png'
import logout from '../../assets/icons/logout.png'
import SidebarMorePopover from '../popovers/SidebarMorePopover'
import collapse from '../../assets/icons/collapse.png'
import { useImmer } from 'use-immer'
import { useNavigate } from 'react-router-dom'
import AccountSettingsPopover from '../popovers/AccountSettingsPopover'

const buttonsInit = [
    {
        name: 'Dashboard', icon: function () { return this.hover ? dashboard_light : dashboard_gray },
        active: true, hasOptions: false, hover: false, component: function () {
            return null;
        }
    },
    {
        name: 'Hotel', icon: function () { return this.hover ? hotel_light : hotel_gray },
        active: false, hasOptions: false, hover: false, component: function () {
            return null;
        }
    },
    {
        name: 'My VISA', icon: function () { return this.hover ? passport_light : passport_gray },
        active: false, hasOptions: false, hover: false, component: function () {
            return null;
        }
    },
    {
        name: 'Inbox', icon: function () { return this.hover ? inbox_light : inbox_gray },
        active: false, hasOptions: true, options: [], hover: false, component: function () {
            return null;
        }
    }
]

const Sidebar = () => {
    const [buttons, setButton] = useImmer(buttonsInit)
    const navigate = useNavigate();



    const handleButtonHover = (index, state) => {
        setButton(btnList => {
            btnList[index].hover = state;
        });
    }

    const getButton = (button, index) => {
        return <button key={index} className='group px-5 py-[6px] w-full flex items-center justify-between transition-colors rounded-lg'
            onMouseEnter={() => handleButtonHover(index, true)}
            onMouseLeave={() => handleButtonHover(index, false)}
            style={button.active || button.hover ? { backgroundColor: '#FF6600', color: '#ffffff' } :
                { backgroundColor: '#eeefef', color: '#8c8e91' }}
        >
            <div className='flex items-center gap-2'>
                <img src={button.icon()} alt='' className='w-[30px]' />
                <p className='font-[500] group-hover:text-white'>{button.name}</p>
            </div>
            {
                button.hasOptions && <img src={arrow_right} alt='' className={`w-[15px] transition-transform duration-300`} />
            }
        </button>
    }

    return (
        <div className='bg-white mt-0 flex flex-col flex-1 border border-[#c7c8c9] z-[100] shadow-lg shadow-gray-300 fixed top-[15vh] left-0 h-[85vh] w-[250px] overflow-y-scroll'>
            <div className='px-3 pb-5 border-b-2 border-b-[#6c6e70] flex-1'>
                <div className='flex items-center justify-between mt-10'>
                    <button className='flex items-center gap-[5px] bg-[#fdece2] py-[6px] px-3 rounded-lg hover:opacity-75 active:opacity-100 transition-colors'>
                        <div className='w-[10px] aspect-square rounded-full bg-[#f16620] border-2 border-[#f8ac82]'></div>
                        <p className='text-[#f7a679]' onClick={() => navigate('/learning')}>Learning...</p>
                    </button>
                    <button className='p-1 w-[30px] flex justify-center items-center aspect-square bg-[rgb(199,200,201)] hover:opacity-75 active:opacity-100 transition-colors rounded-lg'>
                        <img src={refresh} alt='' className='w-full' />
                    </button>
                    <SidebarMorePopover
                        trigger={
                            <button className='hover:opacity-75 active:opacity-100 transition-colors'>
                                <img src={more} alt='' className='w-6' />
                            </button>
                        } />
                </div>
                <div className='flex flex-col gap-6 mt-7'>
                    {
                        buttons.map((button, index) => (
                            button.component() ? button.component(index, getButton(button, index)) :
                                getButton(button, index)
                        ))
                    }
                </div>
            </div>
            <div className='bg-[#e1e5e7] pb-8 pt-5 flex-1 flex flex-col justify-end'>
                <div className='flex flex-col gap-8 px-4'>
                    <div className='flex items-center cursor-pointer gap-4'>
                        <img src={collapse} alt='' className='w-[20px]' />
                        <p className='text-[#8c8e91] hover:text-[#FF6600] transition-colors font-[500]'>Collapse</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center cursor-pointer gap-4'>
                            <img src={settings} alt='' className='w-[20px]' />
                            <p className='text-[rgb(140,142,145)] hover:text-[#FF6600] transition-colors cursor-pointer font-[500]'>FAQ</p>
                        </div>
                        <div className='flex items-center cursor-pointer gap-4'>
                            <img src={user_edit} alt='' className='w-[20px]' />
                            <p className='text-[#8c8e91] hover:text-[#FF6600] transition-colors font-[500] flex-1'>Support</p>

                            <AccountSettingsPopover />
                        </div>
                        <div className='flex items-center cursor-pointer gap-4'>
                            <img src={logout} alt='' className='w-[25px]' />
                            <p className='text-[#8c8e91] hover:text-[#FF6600] transition-colors font-[500]'>Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

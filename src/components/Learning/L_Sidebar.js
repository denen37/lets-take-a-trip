import React, { useState } from 'react'
import { useImmer } from 'use-immer'
import logo from '../../assets/images/Let’s_take _a _trip _logo.png'
import more from '../../assets/icons/more-btn.png'
import refresh from '../../assets/icons/circular-arrow.png'
import dashboard_light from '../../assets/icons/dashboard_light2.png'
import dashboard_gray from '../../assets/icons/dashboard_gray.png'
import arrow_right from '../../assets/icons/arrow-right.png'
import article_white from '../../assets/icons/article_white.png'
import article_black from '../../assets/icons/article_black.png'
import video_black from '../../assets/icons/video-library-black.png'
import video_white from '../../assets/icons/video-library_white.png'
import profile_light from '../../assets/icons/profile (1).png'
import profile_color from '../../assets/icons/profile (2).png'
import settings from '../../assets/icons/settings.png'
import user_edit from '../../assets/icons/image-user-edit.png'
import logout from '../../assets/icons/logout.png'
import collapse from '../../assets/icons/collapse.png'
import SidebarMorePopover from '../popovers/SidebarMorePopover'
import VideoLibPopover from '../popovers/VideoLibPopover'
import VideoLibExpander from '../popovers/VideoLibExpander'
import { useNavigate } from 'react-router-dom'



const buttonsInit = [
    {
        name: 'Dashboard',
        icon: function () { return this.hover || this.active ? dashboard_light : dashboard_gray },
        active: true,
        hasOptions: false,
        hover: false,
        component: function () {
            return null;
        }
    },
    {
        name: 'Profile',
        icon: function () { return this.hover || this.active ? profile_light : profile_color },
        active: false,
        hasOptions: false,
        hover: false,
        component: function () {
            return null;
        }
    },
    {
        name: 'Video Library',
        icon: function () { return this.hover || this.active ? video_white : video_black },
        active: false,
        hasOptions: true,
        hover: false,
        component: function (index, btn, func) {
            return <VideoLibExpander index={index} trigger={btn} handleExpanderState={func} />
        },
    },
    {
        name: 'Article Library',
        icon: function () { return this.hover || this.active ? article_white : article_black },
        active: false,
        hasOptions: true, options: [],
        hover: false,
        component: function (index, btn, func) {
            return <SidebarMorePopover trigger={btn} />
        },
    }
]


const L_Sidebar = () => {
    const [buttonList, setButtonList] = useImmer(buttonsInit);
    const [expanderOpen, setExpanderOpen] = useState(false);
    const [expanderIndex, setExpanderIndex] = useState(-1);
    const navigate = useNavigate();

    const handleButtonHover = (index, state) => {
        setButtonList(btnList => {
            btnList[index].hover = state;
        });
    }

    const handleExpanderOpen = (index, state) => {
        setExpanderOpen(state);
        setExpanderIndex(index);
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
                button.hasOptions && <img src={arrow_right} alt='' className={`${expanderOpen && index == expanderIndex ? 'rotate-90' : ''} w-[15px] transition-transform duration-300`} />
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
                        buttonList.map((button, index) => (
                            button.component() ? button.component(index, getButton(button, index), handleExpanderOpen) :
                                getButton(button, index)
                        ))
                    }
                </div>
            </div>
            <div className='bg-[#e1e5e7] pt-6 pb-8 flex-1 flex flex-col justify-end'>
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
                            <button>
                                <img src={more} alt='' className='w-6' />
                            </button>
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

export default L_Sidebar

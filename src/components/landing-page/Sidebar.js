import React, { useState } from 'react'
import logo from '../../assets/images/Let’s take a trip logo official .png'
import ellipsis_vertical from '../../assets/icons/ellipsis_vertical.png'
import more from '../../assets/icons/more-btn.png'
import refresh from '../../assets/icons/circular-arrow.png'
import dashboard_light from '../../assets/icons/dashboard_light2.png'
import dashboard_gray from '../../assets/icons/dashboard_gray.png'
import passport_gray from '../../assets/icons/passport_gray.png'
import passport_black from '../../assets/icons/passport_black.png'
import passport_light from '../../assets/icons/passport_light.png'
import hotel_light from '../../assets/icons/hotel_light2.png'
import hotel_gray from '../../assets/icons/hotel_gray.png'
import travel from '../../assets/icons/travel.png'
import travel_gray from '../../assets/icons/travel_gray.png'
import travel_light from '../../assets/icons/travel_light.png'
import arrow_right from '../../assets/icons/arrow-right.png'
import study_gray from '../../assets/icons/graduation_gray.png'
import study_light from '../../assets/icons/graduation_light.png'
import booking_gray from '../../assets/icons/booking_gray.png'
import booking_light from '../../assets/icons/booking_light.png'
import consultation_gray from '../../assets/icons/online_consulting_gray.png'
import consultation_light from '../../assets/icons/online_consulting_light.png'
import consultation from '../../assets/icons/online-consultation.png'
import settings from '../../assets/icons/settings.png'
import user_edit from '../../assets/icons/image-user-edit.png'
import logout from '../../assets/icons/logout.png'
import { Popover, ArrowContainer } from 'react-tiny-popover'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'rsuite'

const buttonsInit = [
    {
        text: 'Dashboard', icon: function () { return this.hover ? dashboard_light : dashboard_gray },
        active: true, hasOptions: false, hover: false
    },
    {
        text: 'Hotel', icon: function () { return this.hover ? hotel_light : hotel_gray },
        active: false, hasOptions: false, hover: false
    },
    {
        text: 'My VISA', icon: function () { return this.hover ? passport_light : passport_gray },
        active: false, hasOptions: false, hover: false
    },
    {
        text: 'Travel', icon: function () { return this.hover ? travel_light : travel_gray },
        active: false, hasOptions: true, options: [], hover: false
    },
    {
        text: 'Study Abroad', icon: function () { return this.hover ? study_light : study_gray },
        active: false, hasOptions: false, hover: false
    },
    // { text: 'Reservation', icon: reservation, active: false, hasOptions: true },
    {
        text: 'Consultation', icon: function () { return this.hover ? consultation_light : consultation_gray },
        active: false, hasOptions: true, options: [], hover: false
    }
]

const Sidebar = () => {
    const BUTTONS = ["Dashboard", "Hotel", "My VISA", "Travel", "Study Abroad", "Reservation", "Consultation"]
    const [buttons, setButton] = useState(buttonsInit)
    const [hoverState, setHoverState] = useState({ "button": "text", "state": "false" });
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [isConsultationPopoverOpen, setIsConsultationPopoverOpen] = useState(false);
    const [isTravelPopoverOpen, setIsTravelPopoverOpen] = useState(false);

    // const handleOnMouseHover = (name, state) => {
    //     setButton(() => {
    //         return buttons.map(button => {
    //             if (button.text === name) {
    //                 button.hover = state
    //                 return button
    //             }
    //             return button
    //         })
    //     })
    // }

    const handleOnMouseHover = (name, state) => {
        setHoverState(() => {
            return {
                button: name,
                state: state
            }
        })
    }

    const getImage = (button, light, dark) => {
        return hoverState.button == button && hoverState.state ?
            <img src={light} alt='' className='w-[30px]' /> :
            < img src={dark} alt='' className='w-[30px]' />
    }

    return (
        <div className='bg-white -mt-[95px] flex flex-col flex-1 border border-[#c7c8c9] z-[100] shadow-lg shadow-gray-300'>
            <div className='px-3 pb-5 border-b-2 border-b-[#6c6e70]'>
                <div className='flex justify-center mt-8'>
                    <img src={logo} alt='' className='w-[70%]' />
                </div>
                <div className='flex items-center justify-between mt-10'>
                    <button className='flex items-center gap-[5px] bg-[#fdece2] py-[6px] px-3 rounded-lg hover:opacity-75 active:opacity-100 transition-colors'>
                        <div className='w-[10px] aspect-square rounded-full bg-[#f16620] border-2 border-[#f8ac82]'></div>
                        <p className='text-[#f7a679]'>Exploring...</p>
                    </button>
                    <button className='p-1 w-[30px] flex justify-center items-center aspect-square bg-[rgb(199,200,201)] hover:opacity-75 active:opacity-100 transition-colors rounded-lg'>
                        <img src={refresh} alt='' className='w-full' />
                    </button>
                    <Popover
                        isOpen={isPopoverOpen}
                        positions={['right']}
                        align={'start'}
                        transform={{ top: 65, left: 220 }}
                        onClickOutside={() => setIsPopoverOpen(false)}
                        containerStyle={{ zIndex: 100 }}
                        content={({ position, childRect, popoverRect }) => (
                            <ArrowContainer
                                position={'right'}
                                childRect={childRect}
                                popoverRect={popoverRect}
                                arrowColor={'#f3f4f6'}
                                arrowSize={20}
                            >
                                <div
                                    className='bg-white rounded-lg text-gray-500 py-3 px-4 w-[15vw] border border-gray-100'
                                    onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                                >
                                    <div className='bg-gray-200 hover:bg-red-100 hover:text-orange-500 transition-colors py-4 flex gap-3 items-center justify-center rounded-lg'>
                                        <p className=''>Exploring...</p>

                                        <FontAwesomeIcon className='border-2 border-gray-200 rounded-full' icon={faCircleCheck} size='lg' color={'#f97316 '}></FontAwesomeIcon>

                                    </div>
                                    <div className='bg-gray-200 hover:bg-red-100 hover:text-orange-500 transition-colors py-4 flex gap-3 items-center justify-center rounded-lg mt-3'>
                                        <p className=''>Learning...</p>

                                        <div className='bg-white w-[20px] aspect-square border-2 border-gray-300 rounded-full'></div>

                                    </div>
                                </div>
                            </ArrowContainer>
                        )}
                    >
                        <button className='hover:opacity-75 active:opacity-100 transition-colors'
                            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                        >
                            <img src={more} alt='' className='w-6' />
                        </button>
                    </Popover>
                </div>
                <div className='flex flex-col gap-6 mt-7'>
                    {
                        /* buttons.map((button, index) => {
                            return <button key={index} className='group px-5 py-[6px] text-[#8c8e91] flex items-center gap-4 bg-[#eeefef] hover:bg-[#FF6600] hover:text-white transition-colors rounded-lg'
                                style={button.active ? { backgroundColor: '#FF6600' } : {}}
                                onMouseEnter={() => handleOnMouseHover(button.text, true)}
                                onMouseLeave={() => handleOnMouseHover(button.text, false)}
                            >
                                <img src={button.icon()} alt='' className='w-[30px]' />
                                <p className=' group-hover:text-white font-[500] text-left flex-1'
                                    style={button.active ? { color: '#fff' } : {}}
                                >{button.text}</p>
                                {
                                    button.hasOptions && <img src={arrow_right} alt='' className='w-[15px]' />
                                }
                            </button>
                        }) */
                    }
                    <button className='px-5 py-[6px] flex items-center gap-4 bg-[#FF6600] rounded-lg hover:text-white transition-colors'
                        onMouseEnter={() => handleOnMouseHover(BUTTONS[0], true)}
                        onMouseLeave={() => handleOnMouseHover(BUTTONS[0], false)}
                    >
                        {
                            getImage(BUTTONS[0], dashboard_light, dashboard_gray)
                        }
                        <p className='text-white font-[500] group-hover:text-white'>{BUTTONS[0]}</p>
                    </button>

                    <button className='group px-5 py-[6px] flex items-center gap-4 hover:bg-[#FF6600] hover:text-white transition-colors bg-[#eeefef]  rounded-lg'
                        onMouseEnter={() => handleOnMouseHover(BUTTONS[1], true)}
                        onMouseLeave={() => handleOnMouseHover(BUTTONS[1], false)}
                    >
                        {
                            getImage(BUTTONS[1], hotel_light, hotel_gray)
                        }
                        <p className='text-[#8c8e91] font-[500] group-hover:text-white'>{BUTTONS[1]}</p>
                    </button>
                    <button className='group px-5 py-[6px] flex items-center gap-4  bg-[#eeefef] hover:bg-[#FF6600] hover:text-white  transition-colors rounded-lg'
                        onMouseEnter={() => handleOnMouseHover(BUTTONS[2], true)}
                        onMouseLeave={() => handleOnMouseHover(BUTTONS[2], false)}
                    >
                        {
                            getImage(BUTTONS[2], passport_light, passport_gray)
                        }
                        <p className='text-[#8c8e91] font-[500] group-hover:text-white'>{BUTTONS[2]}</p>
                    </button>


                    <Popover
                        isOpen={isTravelPopoverOpen}
                        positions={['right']}
                        align={'center'}
                        reposition={false}
                        onClickOutside={() => setIsTravelPopoverOpen(false)}
                        containerStyle={{ zIndex: 100 }}
                        content={({ position, childRect, popoverRect }) => (
                            <ArrowContainer
                                position={'right'}
                                childRect={childRect}
                                popoverRect={popoverRect}
                                arrowColor={'#f3f4f6'}
                                arrowSize={20}
                            >
                                <div
                                    className='bg-white rounded-lg text-gray-500 py-3 px-4 w-[15vw] border border-gray-100'
                                >
                                    <div className='bg-gray-200 hover:bg-red-100 hover:text-orange-500 transition-colors py-4 flex gap-3 items-center justify-center rounded-lg cursor-pointer'>
                                        <p className=''>Solo Travel</p>
                                    </div>
                                    <div className='bg-gray-200 hover:bg-red-100 hover:text-orange-500 transition-colors py-4 flex gap-3 items-center justify-center rounded-lg mt-3 cursor-pointer'>
                                        <p className=''>Social Travel</p>
                                    </div>
                                </div>
                            </ArrowContainer>
                        )}
                    >
                        <button className='group px-5 py-[6px] flex items-center justify-between  bg-[#eeefef] hover:bg-[#FF6600] hover:text-white  transition-colors rounded-lg'
                            onMouseEnter={() => handleOnMouseHover(BUTTONS[3], true)}
                            onMouseLeave={() => handleOnMouseHover(BUTTONS[3], false)}
                            onClick={() => setIsTravelPopoverOpen(!isTravelPopoverOpen)}
                        >
                            {
                                getImage(BUTTONS[3], travel_light, travel_gray)
                            }
                            <p className='text-[#8c8e91] font-[500] group-hover:text-white'>{BUTTONS[3]}</p>
                            <img src={arrow_right} alt='' className='w-[15px] group-hover:text-white' />
                        </button>
                    </Popover>


                    <button className='group px-5 py-[6px] flex items-center gap-4 bg-[#eeefef] hover:bg-[#FF6600] hover:text-white transition-colors rounded-lg'
                        onMouseEnter={() => handleOnMouseHover(BUTTONS[4], true)}
                        onMouseLeave={() => handleOnMouseHover(BUTTONS[4], false)}
                    >
                        {
                            getImage(BUTTONS[4], study_light, study_gray)
                        }
                        <p className='text-[#8c8e91] font-[500] group-hover:text-white'>{BUTTONS[4]}</p>
                    </button>
                    <button className='group px-5 py-[6px] flex items-center gap-4 bg-[#eeefef] hover:bg-[#FF6600] hover:text-white transition-colors rounded-lg'
                        onMouseEnter={() => handleOnMouseHover(BUTTONS[5], true)}
                        onMouseLeave={() => handleOnMouseHover(BUTTONS[5], false)}
                    >
                        {
                            getImage(BUTTONS[5], booking_light, booking_gray)
                        }
                        <p className='text-[#8c8e91] font-[500] text-left flex-1 group-hover:text-white'>{BUTTONS[5]}</p>
                    </button>

                    <Popover
                        isOpen={isConsultationPopoverOpen}
                        positions={['right']}
                        align={'center'}
                        reposition={false}
                        onClickOutside={() => setIsConsultationPopoverOpen(false)}
                        containerStyle={{ zIndex: 100 }}
                        content={({ position, childRect, popoverRect }) => (
                            <ArrowContainer
                                position={'right'}
                                childRect={childRect}
                                popoverRect={popoverRect}
                                arrowColor={'#f3f4f6'}
                                arrowSize={20}
                            >
                                <div
                                    className='bg-white rounded-lg text-gray-500 py-3 px-4 w-[15vw] border border-gray-100'
                                >
                                    <div className='bg-gray-200 hover:bg-red-100 hover:text-orange-500 transition-colors py-4 flex gap-3 items-center justify-center rounded-lg cursor-pointer'>
                                        <p className=''>Visa Consultation</p>
                                    </div>
                                    <div className='bg-gray-200 hover:bg-red-100 hover:text-orange-500 transition-colors py-4 flex gap-3 items-center justify-center rounded-lg mt-3 cursor-pointer'>
                                        <p className=''>Travel Consultation</p>
                                    </div>
                                </div>
                            </ArrowContainer>
                        )}
                    >
                        <button className='group px-5 py-[6px] flex items-center justify-between bg-[#eeefef] hover:bg-[#FF6600] hover:text-white transition-colors rounded-lg'
                            onMouseEnter={() => handleOnMouseHover(BUTTONS[6], true)}
                            onMouseLeave={() => handleOnMouseHover(BUTTONS[6], false)}
                            onClick={() => setIsConsultationPopoverOpen(!isConsultationPopoverOpen)}
                        >
                            {
                                getImage(BUTTONS[6], consultation_light, consultation_gray)
                            }
                            <p className='text-[#8c8e91] font-[500] group-hover:text-white'>{BUTTONS[6]}</p>
                            <img src={arrow_right} alt='' className='w-[15px] group-hover:text-white' />
                        </button>
                    </Popover>


                </div>
            </div>
            <div className='bg-[#e1e5e7] pb-8 flex-1 flex flex-col justify-end'>
                <div className='flex flex-col gap-5 px-4'>
                    <div className='flex items-center cursor-pointer gap-4'>
                        <img src={settings} alt='' className='w-[20px]' />
                        <p className='text-[rgb(140,142,145)] hover:text-[#FF6600] transition-colors cursor-pointer font-[500]'>Settings</p>
                    </div>
                    <div className='flex items-center cursor-pointer gap-4'>
                        <img src={user_edit} alt='' className='w-[20px]' />
                        <p className='text-[#8c8e91] hover:text-[#FF6600] transition-colors font-[500] flex-1'>My Account</p>
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
    )
}

export default Sidebar

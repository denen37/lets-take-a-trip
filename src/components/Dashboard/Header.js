import React, { useState } from 'react'
import { Popover, ArrowContainer } from 'react-tiny-popover'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark, faXmark } from '@fortawesome/free-solid-svg-icons'
import { images } from '../../assets/resources'
import { Link } from 'react-router-dom'


const Header = () => {
    const [inputHasFocus, setInputHasFocus] = useState(false);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const [isImagePopoverOpen, setIsImagePopoverOpen] = useState(false)
    const [isNotificationPopoverOpen, setIsNotificationPopoverOpen] = useState(false)


    return (
        <div className='h-[15vh] flex items-center bg-white gap-10 px-6 fixed top-0 right-0 left-0 z-[100]'>
            <Link to={'/'}>
                <div className='w-[150px] px-4 cursor-pointer'>
                    <img src={images.logo} alt='' className='w-full' />
                </div>
            </Link>
            <div className='flex flex-1 items-center px-2 py-1 gap-3 rounded-s-full rounded-e-full border-2 border-solid transition-colors'
                style={{ borderColor: inputHasFocus ? '#f4712f' : '#d1d5db' }}>
                <div className='w-[30px] box-border p-1  rounded-md cursor-pointer hover:bg-gray-200 active:bg-gray-100 transition-colors'>
                    <img className='w-full' src={images.search} alt="" />
                </div>

                <input className='px-2 flex-1 py-1 border-l-2 border-r-2 border-solid border-gray-400 focus:outline-none'
                    placeholder='Search...' />
                <div className='flex items-center gap-2'>
                    <Popover
                        isOpen={isPopoverOpen}
                        positions={'bottom'}
                        transform={{ top: 65, left: 270 }}
                        padding={0}
                        align={'end'}
                        onClickOutside={() => setIsPopoverOpen(false)}
                        containerStyle={{ zIndex: 100 }}
                        content={({ position, childRect, popoverRect }) => (
                            <ArrowContainer
                                position={'bottom'}
                                childRect={childRect}
                                popoverRect={popoverRect}
                                arrowColor={'#f3f4f6'}
                                arrowSize={15}
                            >
                                <div
                                    className='bg-white rounded-lg text-gray-500 py-2 px-4 w-[40vw] border border-gray-100'
                                    onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                                >
                                    <div><h1 className='text-center'>Filter search</h1></div>
                                    <div className='mt-2 mb-1 flex flex-wrap justify-between gap-3'>
                                        {
                                            ['Ticket booking and visas',
                                                'Dubai offers',
                                                'Recommended trips',
                                                'Most popular places',
                                                'Most rated places',
                                                'Tours and trips']
                                                .map(text => <button className='py-1 px-2 bg-gray-200 hover:bg-[#fce4d6] transition-colors text-sm rounded-3xl'>{text}</button>)
                                        }
                                    </div>
                                </div>
                            </ArrowContainer>
                        )}
                    >
                        <div
                            className='bg-gray-100 hover:bg-gray-200 active:bg-gray-100 transition-colors rounded-md w-[30px] box-border p-1 cursor-pointer'
                            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                        >
                            <img className='w-full' src={images.filter} alt="" />
                        </div>
                    </Popover>

                    <Popover
                        isOpen={isImagePopoverOpen}
                        positions={['bottom']}
                        padding={20}
                        containerStyle={{ zIndex: 10 }}
                        content={<div className='bg-white text-gray-500 p-4 rounded-lg border border-gray-100 relative'>
                            <div><h1 className='text-center text-sm'>Search Lets Take a Trip with image</h1></div>
                            <div className='bg-gray-200 absolute top-1 right-1 w-[30px] aspect-square rounded-md flex items-center justify-center cursor-pointer'
                                onClick={() => setIsImagePopoverOpen(false)}
                            >
                                <FontAwesomeIcon icon={faXmark} size='1x' color='#f97316'></FontAwesomeIcon>
                            </div>
                            <div className='mt-2 w-[32vw] h-[16vw] rounded-md border-[3px] border-gray-300 border-dashed flex justify-center items-center bg-gray-200'>
                                <div>
                                    <p>Drag image here or <span className='text-orange-500'>upload file</span></p>
                                </div>
                            </div>
                        </div>}
                    >
                        <div
                            onClick={() => setIsImagePopoverOpen(!isImagePopoverOpen)}
                            className='bg-gray-100 hover:bg-gray-200 active:bg-gray-100 transition-colors rounded-md w-[30px] box-border p-1 cursor-pointer'
                        >
                            <img className='w-full' src={images.image_search} alt="" />
                        </div>
                    </Popover>
                </div>
            </div>

            <button className='text-white bg-[#f16620] rounded-[10px] px-6 py-1 text-base hover:opacity-75 actives:opacity-100 transition-opacity'>
                Book an Appointment
            </button>

            <div className='flex items-center gap-8'>
                <div className='bg-gray-50 hover:bg-gray-100 active:bg-gray-50 transition-colors rounded-md w-[40px] box-border p-2 shadow shadow-gray-500 cursor-pointer'>
                    <img className='w-full' src={images.save} alt='' />
                </div>
                <Popover
                    isOpen={isNotificationPopoverOpen}
                    positions={['bottom']}
                    align={'start'}
                    padding={5}
                    onClickOutside={() => setIsNotificationPopoverOpen(false)}
                    containerStyle={{ zIndex: 100 }}
                    content={({ position, childRect, popoverRect }) => (
                        <ArrowContainer
                            position={'bottom'}
                            childRect={childRect}
                            popoverRect={popoverRect}
                            arrowColor={'#f3f4f6'}
                            arrowSize={20}
                        >
                            <div className='bg-white text-gray-500 p-4 rounded-lg w-[20vw] border border-gray-100'>
                                <h1 className='text-center'>Notification</h1>
                                <div className='flex items-center gap-3 bg-gray-100 rounded-lg p-3 mt-2'>
                                    <div className='w-4 aspect-square bg-red-500 rounded-full'></div>
                                    <p className='text-sm'>Your Visa has been approved. As we...</p>
                                </div>

                                <div className='flex items-center gap-3 bg-gray-100 rounded-lg p-3 mt-2'>
                                    <div className='w-4 aspect-square bg-red-500 rounded-full'></div>
                                    <p className='text-sm'>Your email has been verified. You can...</p>
                                </div>

                                <div className='flex items-center gap-3 bg-gray-200 rounded-lg p-3 mt-2 opacity-80'>
                                    <div className='w-4 aspect-square bg-red-500 rounded-full'></div>
                                    <p className='text-sm'>Welcome to Lets Take a Trip where you can...</p>
                                </div>
                            </div>
                        </ArrowContainer>
                    )}>
                    <div className='relative bg-gray-50 hover:bg-gray-200 active:bg-gray-50 transition-colors rounded-md w-[40px] box-border p-2 shadow shadow-gray-500 cursor-pointer'
                        onClick={() => setIsNotificationPopoverOpen(!isNotificationPopoverOpen)}
                    >
                        <img src={images.bell} className='w-full' alt='' />
                        <div className='w-3 aspect-square bg-red-600 absolute -top-1 -right-1 rounded-full'></div>
                    </div>
                </Popover>
                <div className='bg-gray-50 hover:bg-gray-200 active:bg-gray-50 transition-colors rounded-md w-[40px] box-border p-2 shadow shadow-gray-500 cursor-pointer'>
                    <img className='w-full' src={images.gift} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Header

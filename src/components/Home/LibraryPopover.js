import React, { useState } from 'react'
import { Popover, ArrowContainer } from 'react-tiny-popover'
import { images } from '../../assets/resources';

const LibraryPopover = ({ trigger }) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    return (
        <Popover
            isOpen={isPopoverOpen}
            positions={['bottom']}
            align={'end'}
            padding={0}
            onClickOutside={() => setIsPopoverOpen(false)}
            containerStyle={{ zIndex: 100, left: '100px' }}
            content={({ position, childRect, popoverRect }) => (
                <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
                    position={position}
                    childRect={childRect}
                    popoverRect={popoverRect}
                    arrowColor={'lightgray'}
                    arrowSize={20}
                    arrowStyle={{ opacity: 0.7, zIndex: 100, left: 350 }}
                >
                    <div className='flex flex-col items-center w-[450px] bg-white border border-gray-300 rounded-lg p-2 shadow-xl'>
                        <div className='flex gap-4 '>
                            <div className='border border-gray-300 rounded-lg p-4'>
                                <img className='w-[200px]' src='/images/Home/personal-branding.jpg' alt='' />
                                <p className='text-lg text-green-400 font-semibold text-center mt-2'>Article Library</p>
                                <p className='text-gray-500 text-sm text-center font-light'>
                                    Expand your horizon with our vast library of informative articles.
                                    Learn about different cultures, destinations and travel trips</p>
                            </div>
                            <div className='border border-gray-300 rounded-lg p-4'>
                                <img className='w-[200px]' src='/images/Home/programmer-illustration.jpg' alt='' />
                                <p className='text-lg font-semibold text-center mt-2'>Video Library</p>
                                <p className='text-gray-500 text-sm text-center font-light'>
                                    Visualize your next adventure.
                                    Learn from expert Vlogs and tips that offer
                                    practical tips and insights for your next trip
                                </p>
                            </div>
                        </div>
                        <p className='my-4 text-sm text-gray-500 font-light'>Explore our library and discover your next Adventure!</p>

                        <button className='bg-orange-500 text-white py-2 px-20 rounded-full'>JOIN TO EXPLORE</button>

                        <div className='mt-8'>
                            <img src='/images/Home/thumbnail_youtube.jpg' className='h-[100px] w-full' />
                        </div>
                    </div>
                </ArrowContainer>
            )}
        >
            <div className='bg-orange-600 rounded-full p-1.5'
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            >
                <img src={images.dashboard_light} alt='' className='w-[25px]' />
            </div>
        </Popover>

    )
}

export default LibraryPopover


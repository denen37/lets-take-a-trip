import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'


const VideoLibPopover = ({ trigger }) => {
    return (
        <Popup trigger={trigger}
            position="bottom"
            className='py-3 px-4'
            contentStyle={{ padding: '12px 16px', width: '100%' }}
            arrow={false}
        >
            <div className='bg-gray-200 hover:bg-red-100 hover:text-orange-500 transition-colors py-4 flex gap-3 items-center justify-center rounded-lg'>
                <p className=''>Exploring...</p>

                <FontAwesomeIcon className='border-2 border-gray-200 rounded-full' icon={faCircleCheck} size='lg' color={'#f97316 '}></FontAwesomeIcon>

            </div>
            <div className='bg-gray-200 hover:bg-red-100 hover:text-orange-500 transition-colors py-4 flex gap-3 items-center justify-center rounded-lg mt-3'>
                <p className=''>Learning...</p>

                <div className='bg-white w-[20px] aspect-square border-2 border-gray-300 rounded-full'></div>

            </div>
        </Popup>
    )
}

export default VideoLibPopover

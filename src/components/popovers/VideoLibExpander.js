import React, { useState } from 'react'
import Collapsible from 'react-collapsible';
import '../popovers/collapsible.css'
import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom'


const VideoLibExpander = ({ index, trigger, handleExpanderState }) => {
  const navigate = useNavigate();

  return (
    <Collapsible
      trigger={trigger}
      onTriggerOpening={() => handleExpanderState(index, true)}
      onTriggerClosing={() => handleExpanderState(index, false)}
    >

      <div className='flex gap-2 items-center cursor-pointer group'>
        <div className='bg-[#FF6600] w-6 h-5 rounded-e-full opacity-0 group-hover:opacity-100'></div>
        <p className='group-hover:text-[#FF6600]' onClick={() => navigate('video_library')}>Library</p>
      </div>

      <div className='flex gap-2 items-center cursor-pointer group'>
        <div className='bg-[#FF6600] w-6 h-5 rounded-e-full opacity-0 group-hover:opacity-100'></div>
        <p className='group-hover:text-[#FF6600]' onClick={() => navigate('how_to_lets_take_a_trip')}>How to LetsTakeATrip</p>
      </div>

      <div className='flex gap-2 items-center cursor-pointer group'>
        <div className='bg-[#FF6600] w-6 h-5 rounded-e-full opacity-0 group-hover:opacity-100'></div>
        <p className='group-hover:text-[#FF6600]'>Destination Spotlight</p>
      </div>


      <div className='flex gap-2 items-center cursor-pointer group'>
        <div className='bg-[#FF6600] w-6 h-5 rounded-e-full opacity-0 group-hover:opacity-100'></div>
        <p className='group-hover:text-[#FF6600]'>Travel Tips and Tricks</p>
      </div>

      <div className='flex gap-2 items-center cursor-pointer group'>
        <div className='bg-[#FF6600] w-6 h-5 rounded-e-full opacity-0 group-hover:opacity-100'></div>
        <p className='group-hover:text-[#FF6600]'>Travel stories and Interviews</p>
      </div>

      <div className='flex gap-2 items-center cursor-pointer group'>
        <div className='bg-[#FF6600] w-6 h-5 rounded-e-full opacity-0 group-hover:opacity-100'></div>
        <p className='group-hover:text-[#FF6600]'>Behind the scenes</p>
      </div>

      <div className='flex gap-2 items-center cursor-pointer group'>
        <div className='bg-[#FF6600] w-6 h-5 rounded-e-full opacity-0 group-hover:opacity-100'></div>
        <p className='group-hover:text-[#FF6600]'>Live Q&A session</p>
      </div>
    </Collapsible>
  )
}

export default VideoLibExpander

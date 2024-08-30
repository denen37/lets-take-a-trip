import React, { useState } from 'react'
import { useImmer } from 'use-immer'
import arrow_right from '../../assets/icons/arrow_right_svg.svg'
import MustWatchCard from './MustWatchCard'

const buttonInital = [{ name: "All", active: true },
{ name: "Dashboard", active: false },
{ name: "Libraries", active: false },
{ name: "Apply for VISA", active: false },
{ name: "Recently Uploaded", active: false },
{ name: "Recommended", active: false },]

const mustWatchObj = [
  {
    imagePath: '/images/Learn/apply-for-visa.png',
    text: 'Application Made easy - Apply for visa without any paper work',
    dateTime: '5 days', plays: '2.8M'
  },
  {
    imagePath: '/images/Learn/Buy_assets.jpg',
    text: 'How to increase your real estate investment in 2024 without losing collateral',
    dateTime: '2 hours', plays: '14.8M'
  },
  {
    imagePath: '/images/Learn/indept-explanation.png',
    text: 'An indept explanation to the let take a trip Web Application dashboard',
    dateTime: '4 days', plays: '2.2M'
  },
  {
    imagePath: '/images/Learn/expensive-hotels.jpg',
    text: 'Top ten most expensive hotels in the United Kingdom 2024',
    dateTime: '10 days', plays: '824.2k'
  },
  {
    imagePath: '/images/Learn/how-to-signup.png',
    text: 'How to sign up Lets Take a Trip with ease (step by step guide)',
    dateTime: '5 days', plays: '64.1k'
  },
  {
    imagePath: '/images/Learn/Buy_assets.jpg',
    text: 'How to increase your real estate investment in 2024 without losing collateral',
    dateTime: '2 hours', plays: '14.8M'
  },
]

const LetsTakeATripVideos = () => {
  const [button, setButton] = useImmer(buttonInital);
  const [videos, setVideos] = useState(mustWatchObj);

  return (
    <div className='mt-6'>
      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-4 shadow-[inset_-84px_0px_68px_0px_rgba(66, 68, 90, 1)]'>
          {
            button.map((item, index) => {
              return (
                <button key={index} className={`${item.active ? 'text-white bg-gray-600' : 'text-[rgb(132,133,136)] bg-white'} py-1 px-2 font-normal rounded-md text-nowrap`}>
                  {item.name}
                </button>
              )
            })
          }
        </div>
        <img src={arrow_right} alt='' className='w-[70px]' />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
        {
          videos.map((video, index) => <MustWatchCard item={video} key={index} />)
        }
      </div>
    </div>

  )
}

export default LetsTakeATripVideos

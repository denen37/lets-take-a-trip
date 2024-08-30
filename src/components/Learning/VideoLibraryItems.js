import React, { useState } from 'react'

const init = [
    { imagePath: "/images/Learn/how_to_lets_take_trip.jpg", title: "How to LetsTakeATrip" },
    { imagePath: "/images/Learn/destination _spotlight.jpg", title: "Destination Spotlight" },
    { imagePath: "/images/Learn/travel_tips_and_tricks.jpg", title: "Travel Tips and Tricks" },
    { imagePath: "/images/Learn/travel_stories_and_interview.jpg", title: "Travel Stories and Interviews" },
    { imagePath: "/images/Learn/behind_the_scenes.jpg", title: "Behind the Scenes" },
    { imagePath: "/images/Learn/live_q&a_session.jpg", title: "Live Q&A session" },
]

const VideoLibraryItems = () => {
    const [videoLibraryItems, setVideoLibraryItems] = useState(init)

    const VideoCard = ({ imagePath, title }) => {
        return (
            <div className='bg-gray-50 px-6 py-3 rounded'>
                <img src={imagePath} alt='' className='aspect-square object-cover rounded' />
                <p className='text-sm font-light text-gray-700 mt-2 text-center'>{title}</p>
            </div>
        )
    }


    return (
        <div className='bg-gray-100 bg-opacity-50 rounded-lg px-10 py-5 grid grid-cols-3 gap-x-8 gap-y-5 mt-10'>
            {
                videoLibraryItems.map((item, index) => <VideoCard imagePath={item.imagePath} title={item.title} key={index} />)
            }
        </div>
    )
}

export default VideoLibraryItems

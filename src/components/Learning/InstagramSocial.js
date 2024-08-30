import React from 'react'
import InstagramSocialCard from './InstagramSocialCard'

const InstagramSocial = () => {
    return (
        <div className='mt-5 gap-2 overflow-x-scroll w-full grid grid-cols-[100%_100%] p-1'>
            <InstagramSocialCard />
            <InstagramSocialCard />
        </div>
    )
}

export default InstagramSocial

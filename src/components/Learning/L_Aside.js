import React from 'react'
import InstagramSocial from './InstagramSocial'
import FacebookSocial from './FacebookSocial'
import TwitterSocial from './TwitterSocial'

const L_Aside = () => {
    return (
        <div>
            <div className='p-4 mt-6 bg-gray-50 rounded-xl'>
                <h1>Socials</h1>
                <p className='text-base text-[#848588] font-light'>Dive into travel world. Explore our latest adventures, tips and inspiration on social media.</p>
            </div>

            <InstagramSocial />

            <FacebookSocial />

            <TwitterSocial />
        </div>
    )
}

export default L_Aside

import React from 'react'
import { images } from '../../assets/resources'
import TwitterSocial from '../Learning/TwitterSocial'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const ongoingOffer = '/images/Learn/discover-canada.png'

const T_Aside = () => {
    return (
        <div>
            <div className='bg-[#f0f1f1] rounded-xl p-3 mt-6'>
                <div className='py-[2px] px-4 w-fit rounded-e-lg rounded-tl-xl bg-[#f16620] text-white font-light'>New</div>
                <h1>Ongoing Offers</h1>
                <div className='flex gap-3 mt-3'>
                    <div className='aspect-[1.33] bg-[#d5d6d7] flex flex-col items-center justify-end rounded-2xl overflow-hidden h-52 w-full'
                        style={{ backgroundImage: `url(${ongoingOffer})`, backgroundSize: 'cover' }}
                    >
                        <div className='bg-gray-200 rounded-xl p-2 flex items-center'>
                            <p className='font-light text-gray-500 text-sm flex-1 px-1'>Get in touch with us and lets plan an unforgetable escape...</p>
                            <button className='bg-orange-600 text-white px-2 font-light py-1 rounded-lg text-[12px]'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-2 px-4 mt-6 bg-[#f0f1f1] rounded-xl'>
                <h1 className='text-blue-600 font-light text-xl'>Client Reviews</h1>
                <div className='mt-4'>
                    <div className='bg-gray-200 p-2 rounded-lg'>
                        <div className='flex items-center gap-3'>
                            <img src={images.user} alt='' className='w-[40px] aspect-square rounded-full border-2 border-blue-500' />
                            <p className='text-blue-500 font-light'>David K</p>
                        </div>

                        <p className='text-gray-600 text-sm font-light mt-2'>Warning: LetsTakeATrip may cause extreme relaxation, spontaneous smiling and life memories!</p>
                    </div>
                </div>
            </div>

            <div className='border border-gray-400 rounded-xl p-4 mt-6 bg-[#f0f1f1]'>
                <h1 className='text-xl font-light text-green-500'>Follow us on socials</h1>
                <div className='flex justify-between items-center mt-2'>
                    <div className='w-fit aspect-square border border-gray-400 rounded-full p-2 flex justify-center items-center'>
                        <FontAwesomeIcon icon={faYoutube} className="text-gray-400" size='xl' />
                    </div>

                    <div className='w-fit aspect-square border border-gray-400 rounded-full p-2 flex justify-center items-center'>
                        <FontAwesomeIcon icon={faInstagram} className="text-gray-400" size='xl' />
                    </div>

                    <div className='w-fit aspect-square border border-gray-400 rounded-full p-2 flex justify-center items-center'>
                        <FontAwesomeIcon icon={faFacebook} className="text-gray-400" size='xl' />
                    </div>

                    <div className='w-fit aspect-square border border-gray-400 rounded-full p-2 flex justify-center items-center'>
                        <FontAwesomeIcon icon={faTwitter} className="text-gray-400" size='xl' />
                    </div>

                    <div className='w-fit aspect-square border border-gray-400 rounded-full p-2 flex justify-center items-center'>
                        <FontAwesomeIcon icon={faLinkedin} className="text-gray-400" size='xl' />
                    </div>
                </div>
            </div>

            <TwitterSocial />
        </div>
    )
}

export default T_Aside

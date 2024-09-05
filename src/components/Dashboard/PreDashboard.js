import React from 'react'
import { images } from '../../assets/resources'
import { Link } from 'react-router-dom'

const PreDashboard = () => {
    return (
        <div>
            <div>
                <img src={images.logo} alt='' className='w-10' />

                <div>
                    <Link className='px-6 py-1 font-light rounded-md bg-gray-200'>Support</Link>
                </div>
            </div>
        </div>
    )
}

export default PreDashboard

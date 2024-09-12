import { faArrowLeft, faCancel, faCross, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()

    return (
        <div className='pt-5 h-screen flex flex-col items-center justify-between'>
            <div className='flex items-center justify-between w-4/5 px-6 py-2 shadow-xl'>
                <button className='h-fit aspect-square rounded border-2 border-black p-1'
                    onClick={() => navigate(-1)}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faTimes} size='2xl' color='#ff6600' />
                </button>
            </div>
            <div className='bg-gray-300 rounded-2xl px-4 py-5 w-5/12 max-w-[400px]'>
                <div className='flex justify-end w-full'>
                    <button className='h-6 aspect-square bg-white rounded-full'>i</button>
                </div>
                <div className='flex flex-col items-center mx-8'>
                    <h1 className='font-bold text-3xl mt-10 text-center'>You're about to log out</h1>
                    <h3 className='text-center font-normal my-5 leading-tight'>Are you sure you want to log out?</h3>
                    <button className='bg-red-600 text-white font-light w-full py-2 rounded-lg text-lg hover:opacity-75 transition-opacity duration-300'
                        onClick={() => { navigate('/') }}
                    >
                        Yes log me out
                    </button>

                    <div className='w-full flex items-center gap-4 px-10 my-2'>
                        <div className='flex-1 h-0.5 bg-black'></div>
                        <p className='text-lg font-semibold'>OR</p>
                        <div className='flex-1 h-0.5 bg-black'></div>
                    </div>

                    <button className='bg-green-500 bg-opacity-90 text-white font-light w-full py-2 rounded-lg text-lg hover:opacity-75 transition-opacity duration-300'
                    >
                        Take me back
                    </button>

                    <button className='text-[12px] text-gray-600 font-light bg-white px-6 py-0.5 rounded-full mt-16 hover:opacity-75 transition-opacity duration-300'>
                        Or go to learning dashboard rather
                    </button>
                </div>
            </div>

            <p className='font-light text-sm text-gray-600'>Copyright 2024 LetTakeATrip | All right reserved</p>
        </div>
    )
}

export default Logout

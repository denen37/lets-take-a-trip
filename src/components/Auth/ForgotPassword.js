import { faArrowLeft, faCancel, faCross, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    const navigate = useNavigate()

    return (
        <div className='pt-5 px-4 h-screen flex flex-col items-center justify-between'>
            <div className='flex items-center justify-between w-full sm:w-4/5 px-6 py-2 shadow-xl'>
                <button className='h-fit aspect-square rounded border-2 border-black p-1'
                    onClick={() => navigate(-1)}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faTimes} size='2xl' color='#ff6600' />
                </button>
            </div>
            <div className='bg-gray-300 rounded-2xl px-4 py-5 w-full sm:w-1/2 lg:w-1/3 max-w-[350px]'>
                <div className='flex justify-end w-full'>
                    <button className='h-6 aspect-square bg-white rounded-full'>i</button>
                </div>
                <div className='flex flex-col items-center mx-8'>
                    <h1 className='font-bold text-2xl sm:text-3xl mt-10'>Forgot Password?</h1>
                    <h3 className='text-center font-extrabold my-5 leading-tight'>Pick a way to <br />Reset your password</h3>
                    <button className='bg-orange-600 text-white font-light w-full py-2 rounded-lg text-lg hover:opacity-75 transition-opacity duration-300'>Email</button>

                    <div className='w-full flex items-center gap-4 px-10 my-2'>
                        <div className='flex-1 h-0.5 bg-black'></div>
                        <p className='text-lg font-semibold'>OR</p>
                        <div className='flex-1 h-0.5 bg-black'></div>
                    </div>

                    <button className='bg-gray-400 bg-opacity-90 text-white font-light w-full py-2 rounded-lg text-lg hover:opacity-75 transition-opacity duration-300'>Phone</button>

                    <button className='text-[12px] text-gray-600 font-light bg-white px-6 py-0.5 rounded-full mt-16 hover:opacity-75 transition-opacity duration-300'>Switch to other methods</button>
                </div>
            </div>

            <p className='font-light text-sm text-gray-600'>Copyright 2024 LetTakeATrip | All right reserved</p>
        </div>
    )
}

export default ForgotPassword

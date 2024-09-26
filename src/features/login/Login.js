import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FloatingLabelInputLine } from '../../components/Shared/Inputs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { images } from '../../assets/resources'
import { useImmer } from 'use-immer'

const Login = () => {
    const [username, setUsername] = useImmer('')
    const [password, setPassword] = useImmer('')
    const navigate = useNavigate();

    const handleClick = () => {
        if (username && password) {
            navigate('/dashboard');
        }
    }

    const bg = '/images/Home/beautiful-ocean-pictures.jpg'

    return (
        <>
            <div className='flex lg:hidden justify-between items-center bg-white py-2 px-6'>
                <Link className='w-[100px]' to={'/'}>
                    <img src={images.logo} className='w-full' />
                </Link>

                <Link className='border border-orange-600 font-bold text-orange-600 bg-transparent py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-orange-600 hover:text-white'
                    to={'/signup'}
                >Sign Up</Link>
            </div>
            <div className='flex flex-col lg:flex-row items-center min-h-screen bg-cover bg-no-repeat bg-center relative py-6 px-4' style={{ backgroundImage: `url(${bg})` }}>
                <div className='h-[400px] w-[70%] px-20 ms-auto hidden lg:flex justify-end items-center rounded-s-[30px] bg-white bg-opacity-80'>
                    <div className='flex flex-col justify-center items-center relative'>
                        <h1 className='text-2xl font-bold'>Not yet taking a trip?</h1>
                        <p className='text-base'>Let's take a trip now!</p>
                        <Link className='border border-orange-600 font-bold text-orange-600 bg-transparent mt-6 py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-orange-600 hover:text-white'
                            to={'/signup'}>
                            Sign Up
                        </Link>
                        <img src={images.flying_plane} alt='' className='w-[70px] sm:inline-block hidden absolute bottom-4 -right-4' />
                    </div>
                </div>

                <form className='w-full max-w-[400px] pt-6 pb-10 px-8 flex flex-col items-center bg-gray-100 bg-opacity-95 rounded-3xl lg:absolute top-1/2 lg:-translate-y-1/2 left-1/2 lg:-translate-x-1/2'>
                    <h1 className='text-2xl font-light'>Login Your Account</h1>


                    <div className='flex flex-col gap-6 mt-6 w-full'>
                        <FloatingLabelInputLine label={'User name'} icon={faUser} onChange={(e) => { setUsername(e.target.value) }} value={username}
                            inputStyle={{ color: 'black' }}
                        />

                        <FloatingLabelInputLine label={'Password'} type='password' icon={faLock} onChange={(e) => setPassword(e.target.value)} value={password}
                            inputStyle={{ color: 'black' }}
                        />
                    </div>

                    <p className='mt-6'>By continuing you agree to <span className='text-orange-600 cursor-pointer'>Terms of services</span> and <span className='text-orange-600 cursor-pointer'>Privacy policy</span></p>

                    <button className='w-full py-2 text-white text-xl font-bold bg-orange-600 border border-orange-600 rounded-lg mt-6 transition-colors duration-300 hover:bg-transparent hover:text-orange-600'
                        onClick={handleClick}
                    >Log In</button>
                    <Link className='mt-4 text-sm py-1 px-10 rounded-lg font-light text-gray-600 bg-gray-300' to={'/forgot_password'}>Forgot Password?</Link>

                    <div className='w-full flex items-center gap-4 px-2 mt-8'>
                        <div className='flex-1 h-1 bg-black'></div>
                        <p className='text-lg font-bold'>OR</p>
                        <div className='flex-1 h-1 bg-black'></div>
                    </div>

                    <div className='flex items-center justify-between gap-2 mt-6'>
                        <button className='flex items-center gap-2 text-orange-600 text-[12px] bg-white p-2 rounded-lg'>
                            <img src={images.google} alt='' className='w-[20px]' />
                            <span>Continue with google</span>
                        </button>

                        <button className='flex items-center gap-2 text-orange-600 text-[12px] bg-white p-2 rounded-lg'>
                            <img src={images.facebook} alt='' className='w-[20px]' />
                            <span>Continue with Facebook</span>
                        </button>
                    </div>
                </form>

                <Link className='hidden lg:block h-[100px] py-4 ps-2 pe-6 bg-white absolute top-5 left-0 rounded-e-full ' to={'/'}>
                    <img src={images.logo} alt='' className='h-full' />
                </Link>
            </div>
        </>
    )
}

export default Login

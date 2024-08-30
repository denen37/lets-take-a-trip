import React, { useState } from 'react'
import user from '../../assets/icons/user.png'
import { useImmer } from 'use-immer'
import { FloatingLabelInput } from '../Shared/Inputs'

const A_Middle = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-fit px-10 py-2 mt-10 bg-[#f0f1f1] text-gray-400 text-lg rounded-t'>My Account</div>
            <div className='px-8 pt-6 pb-4 flex flex-col items-center bg-[#f0f1f1] gap-6 w-9/12 rounded'>
                <div className='flex flex-col items-center gap-5 border border-gray-300 rounded px-3 pt-2 pb-4 mt-2'>
                    <h3 className='font-light m-0'>Profile picture</h3>
                    <img src={user} alt='' className='bg-[#FF6600] w-[110px] aspect-square rounded-full' />
                    <div className='font-light flex items-center gap-4 mt-3 text-sm'>
                        <button className='px-6 py-1 rounded bg-green-500 text-white'>Change</button>
                        <button className='px-6 py-1 rounded bg-red-500 text-white'>Remove</button>
                    </div>
                </div>
                <div className='px-4 py-[2px] font-light rounded bg-[#f7ddce] text-[#e69a71]'>United States</div>
                <form className='flex flex-col gap-4 w-full'>
                    <div className='grid grid-cols-[1fr_40%] gap-x-4'>
                        <FloatingLabelInput label={'Name'} />
                        <FloatingLabelInput label={'Gender'} />
                    </div>
                    <div className='relative'>
                        <FloatingLabelInput label={'Email'} inputStyle={{ paddingRight: '100px' }} />
                        <button className='px-4 py-0.5 font-light rounded bg-[#f7ddce] text-[#e69a71] absolute right-2 top-1/2 -translate-y-1/2'>Change</button>
                    </div>
                    <div>
                        <FloatingLabelInput label={'Address'} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default A_Middle

import React, { useRef, useEffect, useState } from 'react'
import { useImmer } from 'use-immer';

const VerifyOTP = ({ header, headerColor, validateOTP }) => {
    const [isValidOTP, setIsValidOTP] = useState(false)
    const [focusIndex, setFocusIndex] = useState(0);
    const [digits, setDigits] = useImmer(['', '', '', '', '', ''])
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        let input = e.target.value;

        if (isNaN(input)) return;

        setDigits(oldDigits => {
            oldDigits[index] = input
        });


        if (index < digits.length - 1) {
            //console.log('focus')
            setFocusIndex(index + 1);
        }

    }

    const handleKeydown = (e, index) => {

        if (e.key === 'Backspace' && !digits[index] && index > 0) {
            setFocusIndex(index - 1);
        }
    }

    const InputBox = ({ value, index }) => {
        return (
            <input type='text' className='border border-gray-300 rounded-lg p-1 text-center text-xl outline-none focus:border-[#ff6600]'
                value={value}
                autoFocus={index === focusIndex}
                maxLength={'1'}
                pattern={'^[0-9]*$'}
                ref={el => (inputRefs.current[index] = el)}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeydown(e, index)}
            />
        )
    }

    const verifyOTP = () => {
        let OTP = digits.join('')

        if (OTP.length == 6) {
            validateOTP(true)
        }
        else {
            validateOTP(false);
        }
    }


    return (
        <div className='flex flex-col gap-3 items-center pb-2 px-6 pt-6 border-s border-s-gray-400'>
            <h1 className='text-blue-600 text-2xl'
                style={{ color: headerColor }}>
                {/* Edit Account */}
                {header}
            </h1>
            <p className='text-base font-light text-center text-gray-600'>Please Enter the six digit code <br />below to verify its you</p>
            <div className='border border-gray-300 rounded-lg relative mt-5'>
                <label className='absolute -top-3.5 left-1.5 px-1 bg-white text-sm font-light text-gray-600'>Enter Code</label>
                <div className='grid grid-cols-6 items-center gap-x-2 text-lg text-gray-600 font-light py-2 px-2'>
                    {
                        digits.map((value, index) => <InputBox index={index} value={value} />)
                    }
                </div>
            </div>
            <button className='bg-[#ff6600] text-white py-2  font-light w-full rounded-lg mt-5'
                onClick={() => { verifyOTP() }}>Yes it's me</button>
        </div>
    )
}
export default VerifyOTP

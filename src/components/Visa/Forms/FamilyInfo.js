import React, { useRef, useEffect } from 'react'
import Select from 'react-select'
import { customStyles, customTheme } from '../../../utils/selectStyles'
import { countryList } from '../../../utils/countryList'
import { useState } from 'react'
import { VisaFloatingLabelInput, VisaTextInput, VisaTextArea, VisaFloatingLabelTextArea, VisaRadioInput } from '../../Shared/Inputs'


const FamilyInfo = ({ index, onNavigate, state }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [countries, setCountries] = useState([]);
    const ref = useRef(null)

    useEffect(() => {
        setCountries(countryList());
    }, [])

    useEffect(() => {
        if (state === 'left') {
            ref.current.style.transform = 'translateX(-100%)';
            ref.current.style.left = 0;
        } else if (state === 'right') {
            ref.current.style.transform = 'translateX(100%)';
            ref.current.style.left = '100%';
        } else {
            ref.current.style.transform = 'translateX(-50%)';
            ref.current.style.left = '50%';
        }
    }, [state])

    return (
        <form className='rounded-xl bg-white mt-8 px-5 py-4 w-4/5 h-fit 
            transition-all duration-500 relative'
            ref={ref}>
            <h1 className='text-xl py-2'>Family Information</h1>
            <div className='h-[3px] bg-red-800'></div>
            <p className='mt-5 mb-3'>Mother's Info</p>
            <div className='flex flex-wrap items-center gap-x-8 gap-y-6 mt-8'>
                <VisaFloatingLabelInput label={'Mother\'s Given Name'} />
                <VisaFloatingLabelInput label={'Mother\'s Surname'} type='text' />
                <VisaTextInput label={'Mother\'s Date of Birth'} type='date' />
                <VisaFloatingLabelInput label={'Mother\'s Given Names'} type='text' />
                <VisaRadioInput label={'Is your Mother in the U.S?'} />
            </div>
            <p className='my-3'>Father's Info</p>
            <div className='flex flex-wrap items-center gap-x-8 gap-y-6 mt-1'>
                <VisaFloatingLabelInput label={'Father\'s Given Name'} />
                <VisaFloatingLabelInput label={'Father\'s Surname'} type='text' />
                <VisaTextInput label={'Father\'s Date of Birth'} type='date' />
                <VisaFloatingLabelInput label={'Father\'s Given Names'} type='text' />
                <VisaRadioInput label={'Is your Father in the U.S?'} />

                {/* <div className='text-gray-300 text-sm font-light'>
                    <label className=''></label>
                    <div className='flex gap-4 items-center'>
                        <label>
                            <input type='radio' className='me-2 accent-red-800' name='lostpassport' />
                            Yes
                        </label>

                        <label>
                            <input type='radio' className='me-2 accent-red-800' name='lostpassport' />
                            No
                        </label>
                    </div>
                </div> */}

                <VisaRadioInput label={'Are you travelling as part of a group or organization?'} />

                <VisaFloatingLabelTextArea label={'Provide information on your last five U.S Visits'} />
            </div>

            <div className='flex justify-between items-center mt-4'>
                <button type='button' className='bg-orange-500 text-white py-2 px-8 rounded-md'
                    onClick={() => onNavigate(index, 'prev', ref,)}
                >Prev</button>

                <button type='button' className='bg-orange-500 text-white py-2 px-8 rounded-md'
                    onClick={() => onNavigate(index, 'next')}
                >Next</button>
            </div>
        </form>
    )
}

export default FamilyInfo


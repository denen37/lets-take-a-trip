import React, { useRef, useEffect } from 'react'
import Select from 'react-select'
import { customStyles, customTheme } from '../../../utils/selectStyles'
import { countryList } from '../../../utils/countryList'
import { useState } from 'react'
import { VisaFloatingLabelInput, VisaTextInput, VisaTextArea, VisaFloatingLabelTextArea, VisaRadioInput } from '../../Shared/Inputs'


const TripInfo = ({ index, onNavigate, state }) => {
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
        <form className='rounded-xl bg-white mt-8 px-5 py-4 w-[95%] md:w-4/5 h-fit 
            transition-all duration-500 absolute'
            ref={ref}>
            <h1 className='text-xl py-2'>Trip Information</h1>
            <div className='h-[3px] bg-red-800'></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  items-start gap-x-8 gap-y-6 mt-8'>
                <VisaFloatingLabelTextArea label={'Purpose of your trip to U.S'} />
                <VisaFloatingLabelInput label={'Intended Date of Arrival'} type='text' />
                <VisaFloatingLabelInput label={'Intended length of stay in U.S(in months)'} type='number' />
                <VisaFloatingLabelInput label={'Address where you will stay in U.S'} type='text' />
            </div>
            <p className='my-3 mt-6'>Trip Management</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  items-start gap-x-8 gap-y-6 mt-1'>
                <VisaFloatingLabelInput label={'Person/Entity paying for your trip'} type='text' />
                <VisaFloatingLabelInput label={'Company/Organization paying for your Trip Error'} type='text' />
                <VisaFloatingLabelInput label={'Telephone Number'} type='text' />
                <VisaFloatingLabelInput label={'Relationship to you'} type='text' />
                <VisaFloatingLabelInput label={'Other persons travelling with you'} type='text' />

                <VisaRadioInput label={'Are you travelling as part of a group or organization?'} />

                <VisaFloatingLabelTextArea label={'Provide information on your last five U.S Visits'} />
            </div>

            <div className='flex justify-between items-center mt-4'>
                <button type='button' className='bg-orange-500 text-white py-2 px-8 rounded-md'
                    onClick={() => onNavigate(index, 'prev', ref,)}
                >Prev</button>

                <button type='button' className='bg-orange-500 text-white py-2 px-8 rounded-md'
                    onClick={() => onNavigate(index, 'next', ref)}
                >Next</button>
            </div>
        </form>
    )
}

export default TripInfo


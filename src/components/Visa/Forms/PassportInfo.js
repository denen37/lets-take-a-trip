
import React, { useRef, useEffect } from 'react'
import Select from 'react-select'
import { customStyles, customTheme } from '../../../utils/selectStyles'
import { countryList } from '../../../utils/countryList'
import { useState } from 'react'
import { VisaFloatingLabelInput, TextInput, VisaTextInput, VisaRadioInput } from '../../Shared/Inputs'

const gender = [{ value: 'Male', label: 'Male' }, { value: 'Female', label: 'Female' }]

const maritalStatus = [
    { value: 'Single', label: 'Single' },
    { value: 'Married', label: 'Married' },
    { value: 'Divorced', label: 'Divorced' },
    { value: 'Widowed', label: 'Widowed' },
]

const PassportInfo = ({ index, onNavigate, state }) => {
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
            <h1 className='text-xl py-2'>Passport Information</h1>
            <div className='h-[3px] bg-red-800'></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  items-start gap-x-8 gap-y-6 mt-8'>
                <VisaFloatingLabelInput label={'Passport Number'} type='text' />
                <Select
                    defaultValue={selectedOption}
                    onChange={(newValue) => setSelectedOption(newValue.label)}
                    options={countries}
                    styles={customStyles}
                    theme={customTheme}
                    placeholder={'Country/Authority that issued passport'}
                />

                <VisaFloatingLabelInput label={'City were issued'} type='text' />
                <VisaFloatingLabelInput label={'State/Province Were issued'} type='text' />
                <VisaTextInput label={'Issuance Date'} type='date' style={{}} />
                <VisaTextInput label={'Expiration Date'} type='date' style={{}} />


                <VisaFloatingLabelInput label={'City of birth'} type='text' />

                <VisaFloatingLabelInput label={'State/Province of birth'} type='text' />

                <Select
                    defaultValue={selectedOption}
                    onChange={(newValue) => setSelectedOption(newValue.label)}
                    options={countries}
                    styles={customStyles}
                    theme={customTheme}
                    placeholder={'Country were issued'}
                />

                <VisaRadioInput label={'Have you ever lost a passport or had stolen one?'} />
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

export default PassportInfo

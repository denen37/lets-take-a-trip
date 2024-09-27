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

const PersonalInfo = ({ index, onNavigate, state }) => {
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

        console.log('state', state)
    }, [state])


    return (
        <form className='rounded-xl bg-white mt-8 px-5 py-4 w-[95%] md:w-4/5 h-fit 
            transition-all duration-500 absolute'
            ref={ref}>
            <h1 className='text-xl py-2'>Personal Information</h1>
            <div className='h-[3px] bg-red-800'></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-x-8 gap-y-4 mt-8'>
                <VisaFloatingLabelInput label={'First name'} type='text' />
                <VisaFloatingLabelInput label={'Surname'} type='text' />
                <VisaTextInput label={'Date of Birth'} type='date' style={{}} />
                <Select
                    defaultValue={selectedOption}
                    onChange={(newValue) => setSelectedOption(newValue.label)}
                    options={gender}
                    styles={customStyles}
                    theme={customTheme}
                    placeholder={'Sex'}
                />

                <Select
                    defaultValue={selectedOption}
                    onChange={(newValue) => setSelectedOption(newValue.label)}
                    options={maritalStatus}
                    styles={customStyles}
                    theme={customTheme}
                    placeholder={'Marital Status'}
                />

                <VisaFloatingLabelInput label={'City of birth'} type='text' />

                <VisaFloatingLabelInput label={'State/Province of birth'} type='text' />

                <Select
                    defaultValue={selectedOption}
                    onChange={(newValue) => setSelectedOption(newValue.label)}
                    options={countries}
                    styles={customStyles}
                    theme={customTheme}
                    placeholder={'Country of birth'}
                />

                <VisaFloatingLabelInput label={'Nationality'} type='text' style={{}} />

                <VisaFloatingLabelInput label={'National Identification Number'} type='text' style={{}} />

                <VisaFloatingLabelInput label={'U.S Social Security Number'} type='text' style={{}} />

                <VisaRadioInput label={'Do you hold multiple nationalities?'} />

                <VisaFloatingLabelInput label={'U.S Taxpayer Id Number'} type='text' style={{}} />

                <VisaRadioInput label={'Do you belong to a tribe or clan?'} />
            </div>

            <div className='flex justify-between items-center mt-4'>
                <button type='button' className='bg-orange-500 text-white py-2 px-8 rounded-md'
                    onClick={() => onNavigate(index, 'prev')}
                >Prev</button>

                <button type='button' className='bg-orange-500 text-white py-2 px-8 rounded-md'
                    onClick={() => onNavigate(index, 'next')}
                >Next</button>
            </div>
        </form>
    )
}

export default PersonalInfo

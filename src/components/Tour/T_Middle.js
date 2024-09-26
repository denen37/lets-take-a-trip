import React, { useState } from 'react'
import { images } from '../../assets/resources'
import Select from 'react-select'
import { customStyles, customTheme } from '../../utils/selectStyles'
import { VisaFloatingLabelInput, VisaFloatingLabelTextArea } from '../Shared/Inputs'

const gender = [{ value: 'Male', label: 'Male' }, { value: 'Female', label: 'Female' }]

const T_Middle = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className='flex-1 flex flex-col px-4'>
            <div className='grid grid-cols-[1fr_200px] gap-3'>
                <div className='mt-6'>
                    <div className='flex items-start gap-3'>
                        <div className='w-16'>
                            <img className='w-full' src={images.bubble} alt='' />
                        </div>
                        <h1 className='text-3xl font-normal'>Tour Booking</h1>

                    </div>
                    <div>
                        <p className='text-base text-[#848588] font-light'>
                            Your dreams awaits, Where will your next next journey take you?
                            Fill in the booking form below and let us plan your next trip?
                        </p>
                    </div>
                </div>
            </div>

            <div className='px-3 bg-white rounded-lg shadow-lg mt-10 mx-auto max-w-[600px] pt-5 pb-7'>
                <h1 className='text-2xl font-normal text-center text-gray-500'>Tour Booking</h1>
                <div className='grid grid-cols-2 gap-5 mt-3'>
                    <VisaFloatingLabelInput type='text' label={'UserName'} />
                    <Select
                        defaultValue={selectedOption}
                        onChange={(newValue) => setSelectedOption(newValue.label)}
                        options={gender}
                        styles={customStyles}
                        theme={customTheme}
                        placeholder={'Sex'}
                    />

                    <VisaFloatingLabelInput type='text' label={'From'} />

                    <VisaFloatingLabelInput type='text' label={'To'} />
                </div>

                <div className='mt-5'>
                    <h2 className='text-gray-500'>How many place will you love to explore</h2>
                    <VisaFloatingLabelInput type='text' label={'Enter up to five and seperate by comma'} />
                </div>

                <div className='mt-5'>
                    <h2 className='text-gray-500'>Purpose of Tour Booking</h2>
                    <VisaFloatingLabelTextArea label={'Tell us why you want to apply for tourist visa'} />
                </div>

                <div className='flex items-center justify-center mt-5'>
                    <button className='bg-orange-600 text-white py-2 px-16 rounded-full font-light hover:opacity-75 transition-opacity duration-300'>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default T_Middle

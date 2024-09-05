import React, { useRef, useEffect } from 'react'
import Select from 'react-select'
import { customStyles, customTheme } from '../../../utils/selectStyles'
import { countryList } from '../../../utils/countryList'
import { useState } from 'react'

const familyMembers = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
];

const DestinationInfo = ({ index, onNavigate, state }) => {
    const ref = useRef();
    const [selectedOption, setSelectedOption] = useState(null);
    const [countries, setCountries] = useState([]);


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
        <form className={`rounded-xl bg-white mt-8 px-5 py-4 w-3/5 h-fit 
            transition-transform duration-500 absolute`}
            ref={ref}>
            <h1 className='text-xl py-2'>Destination Information</h1>
            <div className='h-[3px] bg-red-800'></div>
            <div className='flex gap-8 mt-4'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <p className='text-gray-600 text-sm py-3'>Country of Departure</p>
                        <Select
                            defaultValue={selectedOption}
                            onChange={(newValue) => setSelectedOption(newValue.label)}
                            options={countries}
                            styles={customStyles}
                            theme={customTheme}
                            placeholder={'Select your departure country'}
                        />
                    </div>

                    <div>
                        <p className='text-gray-600 text-sm py-3'>Travel to Other Countries (Within the last five years) </p>
                        <input className='border-2 rounded-md border-gray-300 py-1.5 px-2.5 text-gray-500 outline-none focus:outline-none focus:border-red-800' type='text' placeholder='Travel to other Countries' />
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <div>
                        <p className='text-gray-600 text-sm py-3'>Country of Destination</p>
                        <Select
                            defaultValue={selectedOption}
                            onChange={(newValue) => setSelectedOption(newValue.label)}
                            options={countries}
                            styles={customStyles}
                            theme={customTheme}
                            placeholder={'Select your destination country'}
                        />
                    </div>
                    <div className='flex flex-wrap gap-10'>
                        <div>
                            <p className='text-gray-600 text-sm py-3 '>Family Members</p>
                            <Select
                                defaultValue={selectedOption}
                                onChange={(newValue) => setSelectedOption(newValue.label)}
                                options={familyMembers}
                                styles={customStyles}
                                theme={customTheme}
                                placeholder={'Select Total'}
                            />
                        </div>
                        <div className='self-end'>
                            <button type='button' className='bg-gray-300 py-2 px-8 rounded-md'
                                onClick={() => onNavigate(index, 'next')}
                            >Start</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default DestinationInfo

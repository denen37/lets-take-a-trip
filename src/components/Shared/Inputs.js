import React from 'react'
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FloatingLabelInput = ({ label, inputStyle }) => {
    return (
        <div class="relative">
            <input type="text" id="floating_outlined" class="block px-2.5 pb-2 pt-3.5 w-full text-gray-400 font-light bg-transparent rounded-lg border border-gray-300 focus:border-[#FF6600] appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer" placeholder=" "
                style={inputStyle}
            />
            <label for="floating_outlined" class="absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f0f1f1] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 peer-focus:text-[#FF6600]">
                {label}
            </label>
        </div>
    )
}

const FloatingLabelInputLine = ({ label, type = 'text', value, icon, inputStyle, labelStyle, onChange }) => {
    return (
        <div className='relative'>
            <div class="relative">
                <input type={type} id="floating_outlined" class="block px-2.5 pb-2 pt-3.5 w-full text-gray-600 font-light bg-transparent border-b-2 border-b-black focus:border-[#FF6600] appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer" placeholder=" "
                    style={inputStyle}
                    onChange={(e) => onChange(e)}
                    value={value}
                />
                <label for="floating_outlined" class="absolute text-sm text-orange-600 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                    {label}
                </label>
            </div>
            <FontAwesomeIcon icon={icon} className='absolute top-1/2 -translate-y-1/2 right-0 text-orange-600' />
        </div>
    )
}

const TextInput = ({ label, placeholder, type = 'text', value, onChange, style }) => {
    const handleChange = (e) => {
        // onChange(e.target.value)
    }

    return (
        <div className='rounded-lg relative'>
            <input type={type}
                className='border border-gray-300 rounded-lg py-1.5 px-2 w-full text-base font-light text-gray-400 outline-none peer focus:border-[#FF6600]' placeholder={placeholder}
                value={value}
                onChange={() => { }}
                style={style}

            />
            <label className='absolute -top-3 left-1.5 px-1 bg-white text-sm font-light peer-focus:text-[#FF6600] text-gray-600'>{label}</label>
        </div>
    )
}

const SelectInput = ({ label, options, value, onChange }) => {
    return (
        <div className='rounded-lg relative'>
            <select className='border border-gray-300 rounded-lg py-1.5 px-2 w-full text-base font-light text-gray-400 outline-none peer focus:border-[#FF6600]'>
                <option disabled selected>Select an option</option>
                {options.map((option, index) => {
                    return <option key={index} className='hover:bg-gray-400'>{option}</option>
                })}
            </select>
            <label className='absolute -top-3 left-1.5 px-1 bg-white text-sm font-light peer-focus:text-[#FF6600] text-gray-600'>{label}</label>
        </div>
    )
}

const SelectCountryInput = ({ label, options, value, onChange }) => {
    return (
        <div className='rounded-lg relative'>
            {/* <select className='border border-gray-300 rounded-lg py-1.5 px-2 w-full text-base font-light text-gray-400 outline-none peer focus:border-[#FF6600]'>
                <option disabled selected>Select an option</option>
                {options.map((option, index) => {
                    return <option key={index} value={options.code} className='hover:bg-gray-400'>{options.country}</option>
                })}
            </select> */}
            <Select options={options} />
            <label className='absolute -top-3 left-1.5 px-1 bg-white text-sm font-light peer-focus:text-[#FF6600] text-gray-600'>{label}</label>
        </div>

    )
}

export { FloatingLabelInput, TextInput, SelectInput, SelectCountryInput, FloatingLabelInputLine }

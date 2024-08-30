import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { TextInput, SelectInput, SelectCountryInput } from '../Shared/Inputs';
import VerifyOTP from './VerifyOTP';
import country_and_states from '../../data/country-states';



const EditAccountModal = ({ trigger }) => {
    const [isValidOTP, setIsValidOTP] = useState(false);
    const [countries, setCountries] = useState([]);

    const validateOTP = (state) => {
        setIsValidOTP(state);
    }

    const getCountries = () => {
        let countries = Object.entries(country_and_states.country).map((item, index) => {
            return {
                value: item[0],
                label: item[1]
            }
        });

        return countries
    }

    useEffect(() => {
        setCountries(getCountries());
        //getCountries().map(item => item.country)
    }, [])

    useEffect(() => {
        console.log(countries)
    }, [countries])

    return (
        <Popup trigger={trigger} modal
            contentStyle={{ borderRadius: 10 }}
            closeOnDocumentClick={false}>
            <div className='rounded-lg grid grid-cols-2'>
                <div className='flex items-center justify-center'>
                    <img src={'/images/Account/edit_account.jpg'} className='w-full object-cover' />
                </div>
                {
                    isValidOTP ? <div className='flex flex-col gap-3 items-center pb-2 px-6 pt-6 border-s border-s-gray-400'>
                        <h1 className='text-blue-600 text-2xl'>Edit Account</h1>
                        <p className='text-base font-light text-center text-gray-600'>Please your new details below</p>
                        <div className='flex flex-col gap-5 mt-5'>
                            <TextInput label={'Name'} placeholder={'Enter your name'} />
                            <SelectInput label={'Gender'} options={['Male', 'Female']} />
                            <TextInput label={'Address'} placeholder={'Enter your address'} />
                            {/* <SelectInput label={'Country'} options={countries} /> */}
                            <SelectCountryInput label={'Country'} options={countries} />
                            <SelectInput label={'State'} options={['Abuja', 'Benue']} />
                            <TextInput label={'Zip/Postal code'} placeholder={'Enter your zip/postal code'} />

                            <button className='bg-[#ff6600] text-white py-2  font-light w-full rounded-lg'>Save Changes</button>
                        </div>
                    </div> :
                        <VerifyOTP header={'Edit Account'} headerColor={'#2563eb'} validateOTP={validateOTP} />
                }
            </div>
        </Popup>
    )
}

export default EditAccountModal

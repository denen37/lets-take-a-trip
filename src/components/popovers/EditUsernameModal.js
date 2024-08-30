import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { TextInput, SelectInput } from '../Shared/Inputs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import VerifyOTP from './VerifyOTP';

const EditUsernameModal = ({ trigger }) => {
    const [isValidOTP, setIsValidOTP] = useState(false);

    const validateOTP = (state) => {
        setIsValidOTP(state);
    }

    return (
        <Popup trigger={trigger} modal
            contentStyle={{ borderRadius: 10 }}
            closeOnDocumentClick={false}>
            <div className='rounded-lg grid grid-cols-2'>
                <div className='flex items-center justify-center p-4'>
                    <img src={'/images/Account/edt_username.webp'} className='w-4/5 object-cover' />
                </div>
                {
                    isValidOTP ? <div className='flex flex-col gap-3 items-center pb-2 px-6 pt-6 border-s border-s-gray-400'>
                        <h1 className='text-blue-600 text-2xl'>Change Your Username</h1>
                        <p className='text-base font-light text-center text-gray-600'>Please your new details below</p>
                        <div className='flex flex-col gap-5 mt-8'>
                            <TextInput label={'Current username'} placeholder={''} />
                            <div className='relative'>
                                <TextInput label={'New username'} placeholder={''} style={{ paddingRight: 30 }} />
                                <FontAwesomeIcon icon={faCircleCheck} size='md' color='#FF6600' className='absolute right-2 top-1/2 -translate-y-1/2' />
                            </div>

                            <button className='bg-[#ff6600] text-white py-2  font-light w-full rounded-lg mt-5'>Save Changes</button>
                        </div>
                    </div> :
                        <VerifyOTP header={'Change Your Username'} headerColor={'#2563eb'} validateOTP={validateOTP} />
                }
            </div>
        </Popup>
    )
}

export default EditUsernameModal


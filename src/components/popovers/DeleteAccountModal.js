import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { TextInput, SelectInput } from '../Shared/Inputs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import VerifyOTP from './VerifyOTP';

const DeleteAccountModal = ({ trigger }) => {

    const [isValidOTP, setIsValidOTP] = useState(true);

    const validateOTP = (state) => {
        setIsValidOTP(state);
    }

    return (
        <Popup trigger={trigger} modal
            contentStyle={{ borderRadius: 10 }}
            closeOnDocumentClick={false}>
            <div className='rounded-lg grid grid-cols-2'>
                <div className='flex items-center justify-center p-4'>
                    <img src={'/images/Account/delete_account.jpg'} className='w-4/5 object-cover' />
                </div>
                {
                    isValidOTP ? <div className='flex flex-col gap-3 items-center pb-2 px-6 pt-6 border-s border-s-gray-400'>
                        <h1 className='text-red-600 text-2xl'>Delete Account?</h1>
                        <p className='text-base font-light text-center text-gray-600'>
                            This action might erase all data including your application process. We advise you to
                            <span className='text-green-700'>keep account</span>
                        </p>
                        <div className='flex flex-col gap-5 mt-8'>
                            <div className='relative'>
                                <TextInput label={'Enter username'} placeholder={''} style={{ paddingRight: 30 }} />
                                <FontAwesomeIcon icon={faCircleCheck} size='md' color='#FF6600' className='absolute right-2 top-1/2 -translate-y-1/2' />
                            </div>

                            <div className='relative'>
                                <TextInput label={'Enter password'} placeholder={''} style={{ paddingRight: 30 }} />
                                <FontAwesomeIcon icon={faCircleCheck} size='md' color='#FF6600' className='absolute right-2 top-1/2 -translate-y-1/2' />
                            </div>

                            <button className='bg-[#ff6600] text-white py-2  font-light w-full rounded-lg mt-5'>Save Changes</button>
                        </div>
                    </div> :
                        <VerifyOTP header={'Delete Account?'} headerColor={'#dc2626'} validateOTP={validateOTP} />
                }
            </div>
        </Popup>
    )
}

export default DeleteAccountModal

import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { Popover, ArrowContainer } from 'react-tiny-popover'
// import EnterOTPModal from './verifyOTP';
import EditAccountModal from './EditAccountModal';
import EditUsernameModal from './EditUsernameModal';
import DeleteAccountModal from './DeleteAccountModal';
import EditEmailModal from './EditEmailModal';


// const AccountSettingsPopover = ({ trigger }) => {
//     return (
//         <Popup trigger={trigger} position="right bottom" className='py-3 px-4'
//             contentStyle={{ padding: '12px 16px', top: '50px' }}
//             arrowStyle={{ bottom: '20px' }}
//         >
//             <h1 className='text-gray-500 font-semibold'>Account Settings</h1>
//             <ul className='mt-3 text-gray-400 font-light text-sm flex flex-col gap-1.5'>
//                 <li className='hover:text-[#FF6600] cursor-pointer'>Edit my account</li>
//                 <li className='hover:text-[#FF6600] cursor-pointer'>Change username</li>
//                 <li className='hover:text-[#FF6600] cursor-pointer'>Change password</li>
//             </ul>

//             <ul className='mt-3 text-gray-400 font-light text-sm flex flex-col gap-1.5'>
//                 <li className='bg-gray-200 rounded-md text-center hover:text-[#FF6600] border hover:border-[#ff6600] cursor-pointer py-1'>Terms of use</li>
//                 <li className='bg-gray-200 rounded-md text-center hover:text-[#FF6600] border hover:border-[#ff6600] cursor-pointer py-1'>Privacy policy</li>
//                 <li className='bg-red-500 rounded-md text-center hover:text-red-500 hover:bg-transparent border hover:border-red-500 cursor-pointer py-1 text-white'>Delete my account</li>
//             </ul>
//         </Popup>
//     )
// }

// export default AccountSettingsPopover

const AccountSettingsPopover = ({ trigger }) => {
    const [isMorePopoverOpen, setIsMorePopoverOpen] = useState(false);


    return (
        <Popover
            isOpen={isMorePopoverOpen}
            positions={['right']}
            align={'start'}
            padding={6}
            reposition={false}
            onClickOutside={() => setIsMorePopoverOpen(false)}
            containerStyle={{ zIndex: 100, top: '-210px' }}
            content={({ position, childRect, popoverRect }) => (
                <ArrowContainer
                    position={position}
                    childRect={childRect}
                    style={{ position: 'absolute' }}
                    popoverRect={popoverRect}
                    arrowColor={'#eff0f0'}
                    arrowSize={10}
                    arrowStyle={{ zIndex: 100, top: 210 }}
                >
                    <div className='bg-[#eff0f0] rounded-lg text-gray-500 py-3 px-4 w-[15vw] text-base'>
                        <h1 className='text-gray-500 font-semibold'>Account Settings</h1>
                        <ul className='mt-3 text-gray-400 font-light text-sm flex flex-col gap-1.5'>
                            <li className='hover:text-[#FF6600] cursor-pointer'>
                                <EditAccountModal trigger={<span>Edit my account</span>} />
                            </li>
                            <li className='hover:text-[#FF6600] cursor-pointer'>
                                <EditUsernameModal trigger={<span>Change username</span>} />
                            </li>
                            <li className='hover:text-[#FF6600] cursor-pointer'>
                                <EditEmailModal trigger={<span>Change email</span>} />
                            </li>
                            <li className='hover:text-[#FF6600] cursor-pointer'>Change password</li>
                        </ul>

                        <ul className='mt-3 text-gray-400 font-light text-sm flex flex-col gap-1.5'>
                            <li className='bg-gray-200 rounded-md text-center hover:text-[#FF6600] border hover:border-[#ff6600] cursor-pointer py-1'>Terms of use</li>
                            <li className='bg-gray-200 rounded-md text-center hover:text-[#FF6600] border hover:border-[#ff6600] cursor-pointer py-1'>Privacy policy</li>
                            <li className='bg-red-500 rounded-md text-center hover:text-red-500 hover:bg-transparent border hover:border-red-500 cursor-pointer py-1 text-white'>
                                <DeleteAccountModal trigger={<span>Delete my account</span>} />
                            </li>
                        </ul>
                    </div>
                </ArrowContainer>
            )}
        >
            <FontAwesomeIcon icon={faEllipsisVertical} size='lg' color='#9ca3af' className='cursor-pointer'
                onClick={() => setIsMorePopoverOpen(!isMorePopoverOpen)}
            />
        </Popover>
    )
}

export default AccountSettingsPopover



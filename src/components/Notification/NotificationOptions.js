import React, { useState } from 'react'
import { Popover, ArrowContainer } from 'react-tiny-popover'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { useImmer } from 'use-immer'

const itemsObj = [
    { items: 5, checked: false },
    { items: 10, checked: false },
    { items: 15, checked: false },
    { items: 20, checked: false }
]

const NotificationOptions = () => {
    const [options, setOptions] = useImmer(itemsObj);
    const [isMorePopoverOpen, setIsMorePopoverOpen] = useState(false);

    const handleClick = (index) => {
        setOptions((option) => {
            option.forEach((opt, item) => opt.checked = false)
            option[index].checked = true;
        })
    }

    return (
        <Popover
            isOpen={isMorePopoverOpen}
            positions={['right']}
            align={'start'}
            padding={6}
            reposition={false}
            onClickOutside={() => setIsMorePopoverOpen(false)}
            containerStyle={{ zIndex: 100 }}
            content={({ position, childRect, popoverRect }) => (
                <ArrowContainer
                    position={position}
                    childRect={childRect}
                    style={{ position: 'absolute', top: -40 }}
                    popoverRect={popoverRect}
                    arrowColor={'#eff0f0'}
                    arrowSize={20}
                    arrowStyle={{ top: 30 }}
                >
                    <div
                        className='bg-[#eff0f0] rounded-lg text-gray-500 py-3 px-4 w-[15vw] text-base'
                    >
                        <p className='my-2 text-center'>Show more message</p>
                        <hr className='border-b border-b-gray-500 w-full' />
                        <div>
                            <p className='my-2'>Show up to</p>
                            <ul className='flex flex-col gap-2'>
                                {
                                    options.map((item, index) => <li className='grid grid-cols-[25px_1fr] items-center'>
                                        {
                                            item.checked ? <FontAwesomeIcon icon={faCheck} /> : <div></div>
                                        }
                                        <p className='cursor-pointer'
                                            onClick={() => handleClick(index)}
                                        >{item.items} items</p>
                                    </li>)
                                }

                                <a href='#' className='my-2 text-sm'>Manage Notifications</a>
                            </ul>
                        </div>
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

export default NotificationOptions

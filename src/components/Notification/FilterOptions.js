import React, { useState, useEffect } from 'react'
import { Popover, ArrowContainer } from 'react-tiny-popover'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { useImmer } from 'use-immer'

const filterObj = [
    { filter: 'All', normalizedName: 'all', checked: true },
    { filter: 'Favourite', normalizedName: 'favourite', checked: false },
    { filter: 'Archived', normalizedName: 'archive', checked: false },
    { filter: 'Trash', normalizedName: 'trash', checked: false },
]

const FilterOptions = ({ onFiltersChanged }) => {
    const [filters, setFilters] = useImmer(filterObj);
    const [isFilterPopoverOpen, setIsFilterPopoverOpen] = useState(false);

    const loopFilters = () => {
        filters.forEach((filter) => {
            filter.checked = true
        })
    }

    const handleClick = (name) => {
        setFilters((filters) => {
            let filter = filters.find(filter => filter.normalizedName === name)
            filter.checked = !filter.checked;
        })
    }

    useEffect(() => {
        onFiltersChanged(filters);
    }, [filters])

    return (
        <Popover
            isOpen={isFilterPopoverOpen}
            positions={['right']}
            align={'start'}
            padding={6}
            reposition={false}
            onClickOutside={() => setIsFilterPopoverOpen(false)}
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
                        <p className='my-2 text-center'>Filter</p>
                        <hr className='border-b border-b-gray-500 w-full' />
                        <div>
                            <ul className='flex flex-col gap-2'>
                                {
                                    filters.map((item, index) => <li className='grid grid-cols-[25px_1fr] items-center'>
                                        {
                                            item.checked ? <FontAwesomeIcon icon={faCheck} /> : <div></div>
                                        }
                                        <p className='cursor-pointer'
                                            onClick={() => handleClick(item.normalizedName)}
                                        >{item.filter}</p>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
                </ArrowContainer>
            )}
        >
            <FontAwesomeIcon icon={faEllipsisVertical} size='lg' color='#9ca3af' className='cursor-pointer'
                onClick={() => setIsFilterPopoverOpen(!isFilterPopoverOpen)}
            />
        </Popover>
    )
}

export default FilterOptions

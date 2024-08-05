import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSquare, faSquareCheck, faFolder, faTrashCan } from '@fortawesome/free-regular-svg-icons'



const NewsItem = ({ news, onClick, onSeeMore }) => {
    return (
        <div className='bg-gray-100 grid grid-cols-[auto_1fr] gap-y-2 items-center gap-x-4 px-8 py-4 text-gray-700 border-b border-b-gray-300 transition-colors hover:bg-[rgba(253,217,202,0.2)]'
            style={{ backgroundColor: news.active ? 'rgba(253,217,202,0.2)' : '#f3f4f6' }}
        >
            <div onClick={() => onClick('check', news.id)}>
                <FontAwesomeIcon icon={news.checked ? faSquareCheck : faSquare} size='xl' color={'#9ca3af'} />
            </div>
            <div className='group flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                    <FontAwesomeIcon icon={faStar} size='lg' color={news.favourite ? '#FF6600' : '#9ca3af'}
                        onClick={() => onClick('favourite', news.id)}
                    />
                    <h1 className='text-xl'>{news.header}</h1>
                </div>
                <div className='flex items-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                    <FontAwesomeIcon icon={faFolder} color={news.archive ? '#FF6600' : '#9ca3af'} size='lg'
                        onClick={() => onClick('archive', news.id)}
                    />
                    <FontAwesomeIcon icon={faTrashCan} color='#9ca3af' size='lg'
                        onClick={() => onClick('trash', news.id)}
                    />
                </div>
            </div>
            <div></div>
            <p className='text-sm cursor-pointer'
                onClick={() => onSeeMore(news.id)}
            >{news.details}</p>
        </div>
    )
}

export default NewsItem

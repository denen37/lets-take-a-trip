import { faAngleUp, faCaretDown, faEllipsisVertical, faRotateRight, } from '@fortawesome/free-solid-svg-icons'
import { faSquare, faSquareCheck, faFolder, faStar, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useReducer, useEffect } from 'react'
import NewsItem from './NewsItem'
import NewsPreview from './NewsPreview'
import { newsObj } from '../../data/news'
import { useImmer } from 'use-immer'
import { images } from '../../assets/resources';
import NotificationOptions from './NotificationOptions'
import FilterOptions from './FilterOptions';

const Notification = () => {
    const [news, setNews] = useImmer(newsObj)
    const [activeNews, setActiveNews] = useImmer();
    const [checkAll, setCheckAll] = useState(false);
    const [favouriteAll, setFavouriteAll] = useState(false);
    const [trashAll, setTrashAll] = useState(false);
    const [archiveAll, setArchiveAll] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [filters, setFilters] = useState([]);

    const handleFiltersChanged = (filterObj) => {
        setFilters(filterObj);
    }

    const NumOfFilters = () => {
        let filtersText = ''
        filters.forEach(filter => {
            if (filter.checked) {
                let count = news.filter(item => {
                    if (filter.normalizedName === 'all')
                        return true;
                    return item[filter.normalizedName];
                }).length
                filtersText = filtersText + filter.filter + '(' + count + ')' + ' | ';
            }
        })

        filtersText = filtersText.slice(0, filtersText.length - 3);

        return <p>{filtersText}</p>;
    }

    const handleNewsClick = (id) => {
        setNews((news) => {
            news.forEach((item) => item.active = false);
            news.find(item => item.id == id).active = true;
        })

        setActiveNews(news.find(item => item.id == id))
    }

    const handleClick = (action, id) => {
        setNews(news => {
            let newsItems = news.find(item => item.id === id);

            switch (action) {
                case 'check':
                    newsItems.checked = !newsItems.checked;
                    break;
                case 'favourite':
                    newsItems.favourite = !newsItems.favourite;
                    break;

                case 'archive':
                    newsItems.archive = !newsItems.archive;
                    break;
                case 'trash':
                    newsItems.trash = !newsItems.trash;
                    break;

                default:
                    break;
            }
        })
    }


    const handleClickAll = (action) => {
        setNews(news => {
            let state;
            switch (action) {
                case 'check':
                    state = !checkAll
                    setCheckAll(state === true);
                    news.forEach(item => item.checked = state);
                    break;

                case 'favourite':
                    state = !favouriteAll;
                    setFavouriteAll(state === true);
                    news.forEach(item => item.favourite = state);
                    break;

                case 'archive':
                    state = !archiveAll;
                    setArchiveAll(state === true);
                    news.forEach(item => item.archive = state);
                    break;
                case 'trash':
                    state = !trashAll;
                    setTrashAll(state === true);
                    news.forEach(item => item.trash = state);
                    break;

                default:
                    break;
            }
        })
    }

    useEffect(() => {
        setShowFilter(news.find(item => item.checked === true))
    }, [news])


    const NoMessage = () => {
        return (
            <div className='bg-white h-full text-gray-400 flex items-center justify-center'>
                <div className='flex flex-col gap-2 items-center'>
                    <img src={images.no_message} alt='' className='w-[80px]' />
                    <p className=''>No message selected</p>
                </div>
            </div>
        )
    }
    return (
        <div className='bg-[#e5e6e7] h-[120vh] flex-1 mx-8 mt-5 pt-5 rounded-2xl flex flex-col overflow-hidden'>
            <div className='flex items-center gap-3 mb-4 ms-8'>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-1'>
                        <FontAwesomeIcon icon={checkAll ? faSquareCheck : faSquare} size='xl' color='#9ca3af'
                            onClick={() => handleClickAll('check')}
                        />
                        <FontAwesomeIcon icon={faCaretDown} color='#9ca3af' size='1x' className='w-4' />
                    </div>

                    <FontAwesomeIcon icon={faRotateRight} color='#9ca3af'
                        className='w-4 p-1 bg-white rounded border border-gray-400 aspect-square cursor-pointer'
                        onClick={() => window.location.reload()}
                    />
                    {
                        !showFilter && <FilterOptions onFiltersChanged={handleFiltersChanged} />
                    }
                </div>

                {
                    showFilter && <div className='flex items-center justify-between w-24'>
                        <FontAwesomeIcon icon={faStar} size='lg' color={favouriteAll ? '#FF6600' : '#9ca3af'}
                            onClick={() => handleClickAll('favourite')}
                        />
                        <FontAwesomeIcon icon={faFolder} size='lg' color={archiveAll ? '#FF6600' : '#9ca3af'}
                            onClick={() => handleClickAll('archive')}
                        />
                        <FontAwesomeIcon icon={faTrashCan} size='lg' color={trashAll ? '#FF6600' : '#9ca3af'}
                            onClick={() => handleClickAll('trash')}
                        />
                    </div>
                }
            </div>
            <div className='grid grid-cols-[500px_1fr] flex-1 max-h-[calc(100%-40px)]'>
                <div className='flex flex-col overflow-y-scroll'>
                    <div className='flex flex-col justify-between h-[60px]'>
                        <div className='flex items-center justify-between text-base px-8'>
                            <div className='flex items-center gap-4'>
                                <FontAwesomeIcon icon={faAngleUp} size='1x' color='#1f2937' />
                                <p className='text-gray-800'>Notifications</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <p className='text-gray-400'>1 - 3 of 3</p>
                                <NotificationOptions />
                            </div>
                        </div>
                        <div className='text-sm text-gray-400 ps-8'>
                            <NumOfFilters />
                        </div>
                    </div>
                    <div className='h-[calc(100%-60px)]'>
                        {/* <NewsItem header={''} text={''} />
                        <NewsItem header={''} text={''} />
                        <NewsItem header={''} text={''} />
                        <NewsItem header={'Welcome to LetsTakeATrip'} text={'LetsTakeATrip makes travel planning effortless. Explore...'} />
                        <NewsItem header={'Welcome to LetsTakeATrip'} text={'LetsTakeATrip makes travel planning effortless. Explore...'} />
                        <NewsItem header={'Welcome to LetsTakeATrip'} text={'LetsTakeATrip makes travel planning effortless. Explore...'} />
                        <NewsItem header={'Welcome to LetsTakeATrip'} text={'LetsTakeATrip makes travel planning effortless. Explore...'} />
                        <NewsItem header={'Welcome to LetsTakeATrip'} text={'LetsTakeATrip makes travel planning effortless. Explore...'} /> */}
                        {
                            news.filter((item, index) => {
                                //return !item.trash
                                let show = false;

                                show = filters.some((filter) => {
                                    if (filter.normalizedName === 'all' && filter.checked) {
                                        return true
                                    }
                                    else if (item[filter.normalizedName] && filter.checked) {
                                        return true;
                                    }
                                    else {
                                        return false;
                                    }
                                })
                                //console.log(show);
                                return show
                            }).map((item, index) => (
                                <div key={item.id}>
                                    <NewsItem news={item} onClick={handleClick} onSeeMore={handleNewsClick} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='overflow-y-scroll flex flex-col'>
                    {
                        activeNews ? <NewsPreview activeNews={activeNews} /> : <NoMessage />
                    }
                </div>
            </div>
        </div>
    )
}

export default Notification

import React, { useState, useEffect, useRef } from 'react'
import { useImmer } from 'use-immer'
import { images } from '../../assets/resources'
import { Link } from 'react-router-dom'
import DestinationInfo from './Forms/DestinationInfo'
import PersonalInfo from './Forms/PersonalInfo'
import PassportInfo from './Forms/PassportInfo'
import TripInfo from './Forms/TripInfo'
import FamilyInfo from './Forms/FamilyInfo'


const pages = [
    {
        id: 1, name: 'Destination', position: 'center', current: true,
        form: function (index, onClick) {
            return <DestinationInfo index={index} state={this.position} onNavigate={onClick} />
        }
    },
    {
        id: 2, name: 'Personal', position: 'right', current: false, form: function (index, onClick) {
            return <PersonalInfo index={index} state={this.position} onNavigate={onClick} />
        }
    },
    {
        id: 3, name: 'Passport', position: 'right', current: false, form: function (index, onClick) {
            return <PassportInfo index={index} state={this.position} onNavigate={onClick} />
        }
    },
    {
        id: 4, name: 'Travel', position: 'right', current: false, form: function (index, onClick) {
            return <TripInfo index={index} state={this.position} onNavigate={onClick} />
        }
    },
    // {
    //     id: 5, name: 'Contact | US', position: 'right', current: false, form: function (index, onClick) {
    //         return null
    //     }
    // },
    {
        id: 6, name: 'Family', position: 'right', current: false, form: function (index, onClick) {
            return <FamilyInfo index={index} state={this.position} onNavigate={onClick} />
        }
    },
    // {
    //     id: 7, name: 'Agreement', position: 'right', current: false, form: function (index, onClick) {
    //         return null
    //     }
    // },
]

const VisaApplicationPage = () => {


    const [forms, setForms] = useImmer(pages);
    const [state, setState] = useState('center');
    const [currentPage, setCurrentPage] = useState(1);

    const handleNavigationClick = (index, dir) => {

        //console.log(index, dir, ref);

        setForms((oldForms) => {
            if (dir == 'next' && index < oldForms.length - 1) {
                oldForms[index].position = 'left';
                oldForms[index + 1].position = 'center';
            } else if (dir == 'prev' && index > 0) {
                oldForms[index].position = 'right';
                oldForms[index - 1].position = 'center';
            } else {
                oldForms[index].position = 'center';
            }
        })
    };



    function renderForm(state) {
        return <PersonalInfo index={1} onNavigate={handleNavigationClick} state={state} />;
    }


    return (
        <div className='min-h-screen flex flex-col'>
            <div className='flex items-center justify-between py-2 px-20'>
                <Link to={'/'} className='w-[150px] px-4 cursor-pointer'>
                    <img src={images.logo} alt='' className='w-full' />
                </Link>
                <div className='flex items-center justify-between gap-20'>
                    <button className='bg-gray-400 py-2 px-1.5 font-semibold text-lg'>
                        <span>English</span>
                        {/* <img src={  } alt=''/> */}
                    </button>
                    <button className='bg-transparent py-2 px-4 font-semibold text-orange-600'>
                        <span>LOG IN</span>
                        {/* <img src={  } alt=''/> */}
                    </button>
                </div>
            </div>
            <div className='flex justify-center gap-10 py-2.5 bg-red-800'>
                <Link className='text-white font-light'>DASHBOARD</Link>
                <Link className='text-white font-light'>HELP</Link>
                <Link className='text-white font-light'>FAQ</Link>
                <Link className='text-white font-light'>ABOUT US</Link>
                <Link className='text-white font-light'>CONTACT</Link>
            </div>
            <div className='flex'>
                {
                    forms.map((form, index) => <div className='flex-1'>
                        <div className='flex items-center gap-5 py-2 bg-gray-200 px-2' key={form.id}>
                            <div className='h-8 aspect-square border border-red-800 rounded-full flex items-center justify-center bg-red-200'>
                                <span className='font-extrabold text-lg'>{form.id}</span>
                            </div>
                            <p className='text-lg'>{form.name}</p>
                        </div>
                        <div className={`bg-red-800 h-0.5 transition-all duration-500 ${form.position == 'center' || form.position == 'left' ? 'w-full' : 'w-0'}`}></div>
                    </div>)
                }
            </div>
            <div className='bg-gray-100 flex-1 pb-10 relative'>
                {
                    forms.map((form, index) => form.form(index, handleNavigationClick))
                }
            </div>
            <div className='flex justify-around py-2 bg-gray-300'>
                <p className='text-sm text-gray-500'>2024 | Lets Take A Trip Global Consult</p>
                <p className='text-sm text-red-800'>Terms of Service</p>
            </div>
        </div>
    )
}

export default VisaApplicationPage

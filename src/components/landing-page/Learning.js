import React from 'react'

const Learning = () => {
    return (
        <div className='bg-[#c1c3c5] flex pr-4 pb-6'>
            <div className='w-[18%] flex flex-col'>
                <Sidebar />
            </div>
            <div className='w-[60%] px-3 flex flex-col'>
                <Middle />
            </div>
            <div className='w-[22%] flex flex-col'>
                <Aside />
            </div>
        </div>
    )
}

export default Learning

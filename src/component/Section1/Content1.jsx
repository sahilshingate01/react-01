import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
const Content1 = () => {
    return (
        <div className='py-10 flex gap-10 items-center px-18 h-[90vh]'>
            <LeftContent />
            <RightContent />
        </div>
    )
}

export default Content1

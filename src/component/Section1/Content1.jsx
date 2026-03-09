import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
const Content1 = (data) => {
    return (
        <div className='py-10 flex gap-10 items-center px-18 h-[90vh]'>
            <LeftContent />
            <RightContent user={data.user}/>
        </div>
    )
}

export default Content1

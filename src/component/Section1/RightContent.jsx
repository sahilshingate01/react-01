import React from 'react'
import Card from './Card'

const RightContent = (info) => {
    return (
        <div id='right' className='h-full w-2/3 bg-blue-200 p-6 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl '>
            {info.user.map((ele,i) => {
                return <Card img={ele.img} tag={ele.tag} intro={ele.intro} />
            })}
        </div>
    )
}

export default RightContent 

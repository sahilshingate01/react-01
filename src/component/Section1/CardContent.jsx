import React from 'react'

const CardContent = (data) => {
  return (
    <div className='h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between'>
        <h2 className='bg-white flex rounded-full h-13 w-13 justify-center items-center text-2xl font-bold'>1</h2>
        <div>
            <p className=' text-lg leading-normal text-white mb-14'>
                {data.intro}
            </p>
            <div className='flex justify-between'>
                <button className=' bg-blue-400 rounded-full py-3 px-7 text-lg text-white font-semibold cursor-pointer'>{data.tag}</button>
                <button className=' bg-blue-400 rounded-full py-3 px-5 text-lg text-white font-semibold cursor-pointer'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
  )
}

export default CardContent

import React from 'react'
import CardContent from './CardContent'
 

const Card = (data) => { 
  return (
    <div className='h-full w-80 bg-amber-200 rounded-4xl overflow-hidden relative shrink-0'>
      <img className='h-full w-full object-cover' src={data.img} alt="" />
      <CardContent tag={data.tag} intro={data.intro} color={data.color} id={data.id} />
    </div>
  )
}

export default Card

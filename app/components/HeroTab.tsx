import React from 'react'
import Button from './Button'

const HeroTab = () => {
  return (
    <div className='flex gap-2 w-fit px-1 bg-blue-100 rounded-3xl p-1'>
        
        <Button className='text-lg !p-1 !px-3  !bg-blue-500' text="Candidate"/>
        <Button className='text-lg !p-1 !px-3  !text-black !bg-transparent' text="Employer"/>
        <Button className='text-lg !p-1 !px-3 !text-black !bg-transparent' text="Trainer"/>
    </div>
  )
}

export default HeroTab

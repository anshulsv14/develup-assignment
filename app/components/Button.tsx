import React from 'react'

const Button = ({text,className}:{text:string,className?:string}) => {
  return (
    <div>
       <button className={`bg-gray-400 text-white px-6 md:px-8 py-2 md:py-3 cursor-pointer rounded-full hover:from-blue-600 hover:to-purple-600  transition duration-300  ${className}`}>
    {text}
  </button>
    </div>
  )
}

export default Button

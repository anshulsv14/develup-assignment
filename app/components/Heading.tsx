import React from 'react'

const Heading = ({heading,className}:{heading: {text: string, color: string}[],className?:string}) => {
  return (
    <h1 className={`font-sora font-bold text-black text-[48px] leading-[40px] tracking-[0] text-center mb-[30px] ${className}`} >
      { heading.map((item,index)=>( <span key={index} className={item.color} >{item.text}</span> ))}
    </h1>
    )
} 

export default Heading 

import React from 'react'

const IconBox = ({icon,iconcolor,title,description,badge}:{icon:any,iconcolor:string,title:string,description:string,badge?:{value:string,color:string}}) => {
   
  return (
    
          <div className="flex flex-col items-center text-center space-y-3 mb-[30px] ">
            <div className={`${iconcolor} p-4 rounded-full`}>
              {icon}
            </div>
            <div className="text-black">{title}</div>
            <p className="text-gray-600 max-w-xs">
              {description}
            </p>
            {badge && (
            <span className={`bg-${badge.color}-100 text-${badge.color}-600 text-xs font-semibold px-3 py-1 rounded-full`}>
              {badge.value}
            </span>
            )}
          </div>
        
    
  )
}

export default IconBox

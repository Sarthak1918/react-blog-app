import React,{useId} from 'react'

function Select({
    options =[],
    label,
    className ='',
},ref) {

    const id = useId()


  return (
    <div className='w-full'>
        {label && <label htmlFor={id}></label>}
        <select 
        id={id} 
        ref={ref}
        {...props}
        className = {`px—3 py—2 rounded—lg
        bg—blue-100 text-black outline-none w-full duration-200 border border-gray-300  ${className}`}
        >
         {
            options?.map((option)=>{
                <option key={option} value={option}>
                    {option}
                </option>
            })
         }
        </select>
    </div>
  )
}

export default React.forwardRef(Select)
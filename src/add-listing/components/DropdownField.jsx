/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

function DropDownField({item,handleInputChange,carInfo}) {
  return (
    <div>
        <Select onValueChange={(value)=> 
        handleInputChange(item.name,value)} 
        defaultValue={carInfo?.[item?.name]}
        required={item.required}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={carInfo?.[item?.name]?carInfo?.[item?.name]:item.label} />
            </SelectTrigger>
            <SelectContent>
                {item?.options?.map((option,index)=>(
                <SelectItem value={option}>{option}</SelectItem>
                ))}
            </SelectContent>
        </Select>

    </div>
  )
}

export default DropDownField
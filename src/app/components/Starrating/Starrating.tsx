"use client"
import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";
interface RatingProps {
    title: string;
    description: string;
    ratingValue: number;
}
const Starrating: React.FC<RatingProps> = ({ title, description, ratingValue = 0 }) => {
    const [rating, setRating] = useState(ratingValue);
    return (
        <div className='py-4 px-4
        '>
            <h3 className='text-2xl font-bold uppercase'>{title}</h3>
            <p className='text-[#333]'>{description}</p>
            <div className='flex gap-x-2 text-3xl my-2 px-2'>
                {Array.from({ length: 5 }, (_, i) => <span
                onClick={()=>setRating(i+1)}
                className={`cursor-pointer ${rating>i?"text-yellow-500":"text-gray-500"}`}
                 key={i}><FaStar /></span>)}
            </div>


        </div>
    )
}

export default Starrating

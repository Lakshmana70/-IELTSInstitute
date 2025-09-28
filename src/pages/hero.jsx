import React from 'react'
import {  Star, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroimage from '../assets/hero-image.jpg'

export default function Hero() {
    const stats = [
    { icon: Users, value: '10,000+', label: 'Students Trained' },
    { icon: Star, value: '8.5', label: 'Average Band Score' },
    { icon: Award, value: '95%', label: 'Success Rate' },
  ];
    return (
   <section className="flex flex-col-reverse md:flex-row items-center px-8 md:px-20 py-20 bg-gray-100 min-h-screen   ">
    
      <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Master IELTS with
              <span className=" text-indigo-600 font-bold ml-2">
                {" "}Expert Guidance
              </span>
            </h1>

            <p className="text-subtitle max-w-xl">
              Achieve your target IELTS band score with our comprehensive preparation program. 
              Join thousands of successful students who achieved their dreams.
            </p>
        <span className='flex mt-4 gap-4 justify-center md:justify-start'>

        <Link to="/" className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700">
          Get Started
        </Link>
        <Link to="/" className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700">
          Book a demo
        </Link>
        </span>
         <div className='grid grid-cols-3 gap-6 mt-10 justify-items-center md:justify-items-start md:grid'>
            {
                stats.map((stat)=>{
                    return (
                        <div className='flex flex-col items-center' key={stat.label}>
                            <stat.icon size={32} className="text-indigo-600 mb-2"/>
                            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                            <p className="text-gray-600">{stat.label}</p>

                        </div>
                    )
                })
            }
         </div>
      </div>
      <div className="flex-1">
        <img
          src={heroimage}
          alt="IELTS Preparation"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
    )
}

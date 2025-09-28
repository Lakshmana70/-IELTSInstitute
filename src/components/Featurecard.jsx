import React from 'react'
import { Link } from 'react-router-dom'

export default function Featurecard({ feature, idx }) {
    return (
       
        <div className="p-8 snap-center bg-white flex flex-col items-center shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <feature.icon className="h-12 w-12 text-indigo-600 mb-4" aria-hidden="true" />
            <h4 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h4>
            <p className="text-gray-600 text-center mb-4 flex-grow">{feature.description}</p>
            <ul className='mt-2 w-full space-y-2'>
                {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-gray-600 text-start">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{benefit}</span>
                    </li>
                ))}
            </ul>
            <Link
             to="#"
              role="button"
              className='block text-center w-full mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors font-semibold'
            >
                Learn More
            </Link>
         </div>

    )
}

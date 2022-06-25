import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Studentcard = () => {
    return (
        <div>
        <Link to="/browse/students/studentDetail">
        <div className="p- mb-20 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 ml-5 ">
                
                <div className="flex items-baseline text-gray-900 ">
                    <span className="text-4xl font-extrabold tracking-tight">Name</span>
                </div>
                {/* List */}
                <ul role="list" className="my-7 space-y-5">
                <li className="flex space-x-3">
                        {/* Icon */}
                        
                        <span className="text-xl font-bold leading-tight text-blue  ">
                            UID : <span className='text-lg font-normal'>{'1000'}</span>
                        </span>
                    </li>
                    <li className="flex space-x-3">
                        {/* Icon */}
                        
                        <span className="text-xl font-bold leading-tight text-blue  ">
                            Course : <span className='text-lg font-normal '>{'Btech '}</span>
                        </span>
                    </li>
                    <li className="flex space-x-3">
                        {/* Icon */}
                        
                        <span className="text-xl font-bold leading-tight text-blue  ">
                            DOB : <span className='text-lg font-normal '>{'22/04/2000 '}</span>
                        </span>
                    </li>
                   
                    <li className="flex space-x-3">
                        {/* Icon */}
                        
                        <span className="text-xl font-bold leading-tight text-blue  ">
                            Mobile : <span className='text-lg font-normal '>{'9873647283'}</span>
                        </span>
                    </li>
                    <li className="flex space-x-3">
                        {/* Icon */}
                        
                        <span className="text-xl font-bold leading-tight text-blue  ">
                            Email : <span className='text-lg font-normal '>{'Yes '}</span>
                        </span>
                    </li>
                    <li className="flex space-x-3">
                        {/* Icon */}
                        
                        <span className="text-xl font-bold leading-tight text-blue  ">
                            Gender : <span className='text-lg font-normal '>{'Male'}</span>
                        </span>
                    </li>

                    
                </ul>
            </div>
        </Link>

        </div>
    )
}

export default Studentcard
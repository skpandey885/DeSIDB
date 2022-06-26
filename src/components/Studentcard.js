import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Studentcard = ({data}) => {
    return (
        <div>
        <Link to="/browse/students/studentDetail">
        <div className="p-2 mb-20 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 ml-5 min-w-[300px] ">
                
                <div className="flex items-baseline text-gray-900 ">
                    <span className="text-4xl font-extrabold tracking-tight">{data.firstName}</span>
                </div>
                {/* List */}
                <ul role="list" className="my-7 space-y-5">
                <li className="flex space-x-3">
                        {/* Icon */}
                        
                        <span className="text-xl font-bold leading-tight text-blue  ">
                            UID : <span className='text-lg font-normal'>{data.sid.toString()}</span>
                        </span>
                    </li>
                    <li className="flex space-x-3">
                        {/* Icon */}
                        
                        <span className="text-xl font-bold leading-tight text-blue  ">
                            Course : <span className='text-lg font-normal '>{data.course}</span>
                        </span>
                    </li>
                    <li className="flex space-x-3">
                        {/* Icon */}
                        
                        <span className="text-xl font-bold leading-tight text-blue  ">
                            DOB : <span className='text-lg font-normal '>{data.dateOfBirth}</span>
                        </span>
                    </li>
                   
                    <li className="flex space-x-3">
                        {/* Icon */}
                        
                        <span className="text-xl font-bold leading-tight text-blue  ">
                            Mobile : <span className='text-lg font-normal '>{data.mobileNumber}</span>
                        </span>
                    </li>
                    <li className="flex space-x-3">
                        {/* Icon */}
                        
                        <span className="text-xl font-bold leading-tight text-blue  ">
                            Email : <span className='text-lg font-normal '>{data.emailId}</span>
                        </span>
                    </li>
                    <li className="flex space-x-3">
                        {/* Icon */}
                        
                        <span className="text-xl font-bold leading-tight text-blue  ">
                            Gender : <span className='text-lg font-normal '>{data.gender}</span>
                        </span>
                    </li>

                    
                </ul>
            </div>
        </Link>

        </div>
    )
}

export default Studentcard
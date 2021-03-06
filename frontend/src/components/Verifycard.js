import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Verifycard = ({ data }) => {
    return (
        <div>
            <Link state={data} to={`/browse/verify/${data?._id} `}>
                <div className="p-5  w-[320px] bg-white rounded-lg border shadow-md sm:p-8  ">
                    <div className="flex items-baseline text-gray-900 ">
                        <span className="text-3xl font-extrabold tracking-tight"> {data.fname +' ' +  data.lname} </span>
                    </div>
                    {/* List */}
                    <ul role="list" className="my-7 space-y-5">
                        <li className="flex space-x-3">
                            {/* Icon */}

                            <span className="text-xl font-bold leading-tight text-blue  ">
                                UID : <span className='text-lg font-normal'>{data._id}</span>
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
                                DOB : <span className='text-lg font-normal '>{data.dob}</span>
                            </span>
                        </li>

                        <li className="flex space-x-3">
                            {/* Icon */}

                            <span className="text-xl font-bold leading-tight text-blue  ">
                                Mobile : <span className='text-lg font-normal '>{data.mobile}</span>
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            {/* Icon */}

                            <span className="text-xl font-bold leading-tight text-blue  ">
                                Email : <span className='text-lg font-normal '>{data.email}</span>
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            {/* Icon */}

                            <span className="text-xl font-bold leading-tight text-blue  ">
                                Gender : <span className='text-lg font-normal '>{data.gender}</span>
                            </span>
                        </li>
                    </ul>
                    <button
                    type="button"
                    className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                >
                    Verify Student
                </button>
                </div>
            </Link>

        </div>
    )
}

export default Verifycard
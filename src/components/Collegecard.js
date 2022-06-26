import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Collegecard = ({data}) => {
    return (
        <div>
            <div className="p-5  min-w-[320px] bg-white rounded-lg border shadow-md sm:p-8  ">
                <div className="flex items-baseline text-gray-900 ">
                    <span className="text-3xl font-extrabold tracking-tight"> {data.collegeName} </span>
                </div>
                {/* List */}
                <ul role="list" className="my-7 space-y-5">
                    <li className="flex space-x-3">
                        {/* Icon */}

                        <span className="text-xl font-bold leading-tight text-blue  ">
                            College Address : <span className='text-lg font-normal '>{data.collegeAddress}</span>
                        </span>
                    </li>
                    <li className="flex space-x-3">
                        {/* Icon */}

                        <span className="text-xl font-bold leading-tight text-blue  ">
                            Telephone : <span className='text-lg font-normal '>{data.tel}</span>
                        </span>
                    </li>
                    <li className="flex space-x-3">
                        {/* Icon */}

                        <span className="text-xl font-bold leading-tight text-blue  ">
                            Website : <span className='text-lg font-normal'>{data.website}</span>
                        </span>
                    </li>
                    <li className="flex space-x-3">
                        {/* Icon */}

                        <span className="text-xl font-bold leading-tight text-blue  ">
                            AICTE Certified : <span className='text-lg font-normal '>{data.aicteCertified ? 'Yes' : 'No' }</span>
                        </span>
                    </li>
                    <li className="flex space-x-3">
                        {/* Icon */}

                        <span className="text-xl font-bold leading-tight text-blue  ">
                            MHRD Affiliated : <span className='text-lg font-normal '>{data.mhrdCertified ? 'Yes' : 'No' }</span>
                        </span>
                    </li>


                </ul>
                <button
                    type="button"
                    className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                >
                    <a href='https://soa.ac.in'>Learn More</a>
                </button>
            </div>

        </div>





    )
}

export default Collegecard  
import React from 'react'
import { FaChild } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'
import CountUp from 'react-countup';
const Stats = () => {
    return (
        <div>
            <section className="py-8 bg-white dark:bg-main-dark-bg">
                <div className="container max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight text-center">
                        Statistics
                    </h2>
                    <p className="mt-2 text-lg text-center text-gray-600">
                        Statistical Data of our Users
                    </p>
                    <div className="grid grid-cols-2 gap-12 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
                        <div className="relative flex flex-col items-center justify-between col-span-6 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-blue-500 rounded-full">
                                <FaChild size={40} />
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Students Connected</h4>
                            <p className="text-base text-xl text-center text-gray-500">
                            <CountUp loading="lazy" duration={30} end={1000} /> + Students Connected
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-6 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-blue-500 rounded-full">

                                <MdSchool size={40}/>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Colleges Registered</h4>
                            <p className="text-base text-xl text-center text-gray-500">
                            <CountUp loading="lazy" duration={30} end={100} /> + Colleges Registered
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Stats
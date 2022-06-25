import React from 'react'
import { GiStrong } from 'react-icons/gi'
import { FaExpandArrowsAlt } from 'react-icons/fa'
import { MdLock } from 'react-icons/md'

const Info = () => {
    return (
        <div>

            <section className="py-8 bg-white dark:bg-main-dark-bg">
                <div className="container max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight text-center">
                        Our Features
                    </h2>
                    <p className="mt-2 text-lg text-center text-gray-600">
                        We have integrated industry standard smart contracts to make the data safe and unmodifiable
                    </p>
                    <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
                        <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-blue-500 rounded-full">
                                <GiStrong size={40} />
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Robust</h4>
                            <p className="text-base text-center text-gray-500">
                                Our App makes use of modern technologies and superior front end libraries.
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-blue-500 rounded-full">

                                <FaExpandArrowsAlt size={40} />
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Scalable</h4>
                            <p className="text-base text-center text-gray-500">
                                With our industry standard integrations, scalability will be as easy as a pie.
                            </p>
                        </div>


                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-blue-500 rounded-full">
                                <MdLock size={40} />
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Secure</h4>
                            <p className="text-base text-center text-gray-500">
                                Our Smart Contract Ensures Tamper-proof data, and prevents data loss
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Info
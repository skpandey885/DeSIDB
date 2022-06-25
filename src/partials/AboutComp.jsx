import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'


const AboutComp = () => {
    return (
        <div>


            <section className="relative py-20 overflow-hidden bg-white">
                <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
                    <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50" />
                </span>
                <span className="absolute bottom-0 left-0"> </span>
                <div className="relative px-16 mx-auto max-w-7xl">
                    <p className="font-medium tracking-wide text-blue-500 uppercase">
                        OUR TEAM
                    </p>
                    <h2 className="relative max-w-lg mt-5 mb-10 text-4xl font-semibold leading-tight lg:text-5xl">
                        Amazing Team of <br />
                        HackerWarriors
                    </h2>
                    <div className="grid w-full grid-cols-4 gap-20 sm:grid-cols-3 lg:grid-cols-4">
                        <div className="flex flex-col items-center justify-center col-span-1">

                            <div className="relative p-5">
                                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50" />
                                <img
                                    className="relative z-20 w-full rounded-full"
                                    src={'/assets/sachin.jpg'}
                                />
                            </div>
                            <div className="mt-3 space-y-2 text-center">
                                <div className="space-y-1 text-lg font-medium leading-6">
                                    <h3>Sachin Pandey</h3>
                                    <p className="text-blue-600">Team Lead</p>
                                </div>
                                <div className="relative flex items-center justify-center space-x-3">
                                    <a href="#_" className="text-gray-300 hover:text-gray-400">
                                        <BsTwitter size={30} />
                                    </a>
                                    <a href="#_" className="text-gray-300 hover:text-gray-400">
                                        <BsGithub size={30} />
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col items-center justify-center col-span-1">

                            <div className="relative p-5">
                                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50" />
                                <img
                                    className="relative z-20 w-full rounded-full"
                                    src={'/assets/adarsh.png'}
                                />
                            </div>
                            <div className="mt-3 space-y-2 text-center">
                                <div className="space-y-1 text-lg font-medium leading-6">
                                    <h3>Adarsh Patel </h3>

                                </div>
                                <div className="relative flex items-center justify-center space-x-3">
                                    <a href="#_" className="text-gray-300 hover:text-gray-400">
                                        <BsTwitter size={30} />
                                    </a>
                                    <a href="#_" className="text-gray-300 hover:text-gray-400">
                                        <BsGithub size={30} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center col-span-1">

                            <div className="relative p-5">
                                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50" />
                                <img
                                    className="relative z-20 w-full rounded-full"
                                    src={'/assets/abhilasha.jpeg'}
                                />
                            </div>
                            <div className="mt-3 space-y-2 text-center">
                                <div className="space-y-1 text-lg font-medium leading-6">
                                    <h3>Abhilasha Panda</h3>
                                </div>
                                <div className="relative flex items-center justify-center space-x-3">
                                    <a href="#_" className="text-gray-300 hover:text-gray-400">
                                        <BsTwitter size={30} />
                                    </a>
                                    <a href="#_" className="text-gray-300 hover:text-gray-400">
                                        <BsGithub size={30} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center col-span-1">

                            <div className="relative p-5">
                                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50" />
                                <img
                                    className="relative z-20 w-full rounded-full"
                                    src={'/assets/mehul.jpeg'}
                                />
                            </div>
                            <div className="mt-3 space-y-2 text-center">
                                <div className="space-y-1 text-lg font-medium leading-6">
                                    <h3>Mehul Puri</h3>
                                </div>
                                <div className="relative flex items-center justify-center space-x-3">
                                    <a href="#_" className="text-gray-300 hover:text-gray-400">
                                        <BsTwitter size={30} />
                                    </a>
                                    <a href="#_" className="text-gray-300 hover:text-gray-400">
                                        <BsGithub size={30} />
                                    </a>
                                </div>
                            </div>
                        </div>






                    </div>
                </div>
            </section>

        </div>
    )
}

export default AboutComp
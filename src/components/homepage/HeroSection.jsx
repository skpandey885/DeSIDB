import React from "react";


const Hero = () => {
    return (
        <div>
            <>
                <section className="px-2 py-32 bg-white dark:bg-main-dark-bg md:px-0">
                    <div className="container items-center max-w-screen-xl px-8 mx-auto xl:px-5">
                        <div className="flex flex-wrap items-center sm:-mx-3">
                            <div className="w-full md:w-1/2 md:px-3">
                                <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                        <span className="block xl:inline">DeSiDB</span>
                                        <span className="block text-5xl font-medium text-blue-500">
                                            Decentralized Student Information Database
                                        </span>
                                    </h1>
                                    <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                                   A decentralised database to store &amp; access the data of students and colleges, to allow educational organisations to track the information.
                                    </p>
                                    <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                        <a
                                            href="/register/student"
                                            className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-500 rounded-md sm:mb-0 hover:bg-blue-700 sm:w-auto"
                                        >
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                    <img
                                        src="https://miro.medium.com/max/580/1*5AKv5i_omy24uvWcz64NpA.png"
                                        className="object-center object-cover h-full w-full" alt="..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </div>
    )
}

export default Hero
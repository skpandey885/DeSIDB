import React from 'react'

import { AiFillCaretDown } from 'react-icons/ai'

const StudentForm = () => {
    return (
        <div>

            <>
                {/* Container */}
                <div className="container mx-auto">
                    <div className="flex justify-center px-6 my-12">
                        {/* Row */}
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                            {/* Col */}
                            <div
                                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                                style={{
                                    backgroundPosition: 0 - 240,
                                    backgroundImage:
                                        'url("https://cdn3d.iconscout.com/3d/premium/thumb/holding-book-girl-5083061-4444667.png")'
                                }}
                            />
                            {/* Col */}
                            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                                <h3 className="pt-4 text-2xl text-center">Sign Up Now!</h3>

                                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">

                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="firstName"
                                            >
                                                First Name
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="firstName"
                                                type="text"
                                                placeholder="First Name"
                                            />
                                        </div>

                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="lastName"
                                            >
                                                Last Name
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="lastName"
                                                type="text"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="fatherName"
                                            >
                                                Father's Name
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="fatherName"
                                                type="text"
                                                placeholder="Father's Name"
                                            />
                                        </div>

                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="motherName"
                                            >
                                                Mother's Name
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="motherName"
                                                type="text"
                                                placeholder="Mother's Name"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="gender"
                                            >
                                                Gender
                                            </label>
                                            <select
                                                className="w-full px-12 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="gender"
                                                placeholder="Father's Name"
                                            >
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>

                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="dob"
                                            >
                                                Date of Birth
                                            </label>
                                            <input
                                                className="w-full px-8 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="date"
                                                type="date"
                                                placeholder="Date"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="mobileNumber"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="mobileNumber"
                                            type="text"
                                            placeholder="Phone Number"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="gender"
                                            >
                                                Country
                                            </label>
                                            <select
                                                className="w-full px-12 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="gender"
                                                placeholder="Father's Name"
                                            >
                                                <option value="Country1">Country 1</option>
                                                <option value="Country2">Country 2</option>
                                            </select>
                                        </div>
                                    </div>


                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="level"
                                            >
                                                Education Level
                                            </label>
                                            <select
                                                className="w-full px-10 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="level"
                                                type="text"
                                                placeholder="Highest Qualification"
                                            >
                                                <option value="10">10th</option>
                                                <option value="12">12th</option>
                                            </select>

                                        </div>
                                        <div className="md:ml-2">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="course"
                                            >
                                                Course
                                            </label>
                                            <select
                                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="course"
                                                type="text"
                                                placeholder="Courses"
                                            >
                                                <option id='BE/B.Tech- Bachelor of Technology'>BE/B.Tech- Bachelor of Technology</option>
                                                <option id='B.Arch- Bachelor of Architecture'>B.Arch- Bachelor of Architecture</option>
                                                <option id='BCA- Bachelor of Computer Applications'>BCA- Bachelor of Computer Applications</option>
                                                <option id='B.Sc.- Information Technology'>B.Sc.- Information Technology</option>
                                                <option id='B.Sc- Nursing'>B.Sc- Nursing</option>
                                                <option id='BPharma- Bachelor of Pharmacy'>BPharma- Bachelor of Pharmacy</option>
                                                <option id='B.Sc- Interior Design'>B.Sc- Interior Design</option>
                                                <option id='BDS- Bachelor of Dental Surgery'>BDS- Bachelor of Dental Surgery</option>
                                                <option id='Animation, Graphics and Multimedia'>Animation, Graphics and Multimedia</option>
                                                <option id='B.Sc. – Nutrition & Dietetics'>B.Sc. – Nutrition & Dietetics</option>
                                                <option id='BPT- Bachelor of Physiotherapy'>BPT- Bachelor of Physiotherapy</option>
                                                <option id='B.Sc- Applied Geology'>B.Sc- Applied Geology</option>
                                                <option id='BA/B.Sc. Liberal Arts'>BA/B.Sc. Liberal Arts</option>
                                                <option id='B.Sc.- Physics'>B.Sc.- Physics</option>
                                                <option id='B.Sc. Chemistry'>B.Sc. Chemistry</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-6 text-center">
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="button"
                                        >
                                            Register Account
                                        </button>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <a
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                            href="./index.html"
                                        >
                                            Already have an account? Login!
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
    )
}

export default StudentForm
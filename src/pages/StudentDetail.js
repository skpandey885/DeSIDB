import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContract, useSigner } from 'wagmi';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../components/contract/contract';

const StudentDetail = () => {
    const [data,setData] = useState();
    let params = useParams();
    const id = params.id;

    const  {data:signer } = useSigner();

    const contract = useContract({
        addressOrName: CONTRACT_ADDRESS,
        contractInterface: CONTRACT_ABI,
        signerOrProvider:signer
      })
      

    const getStudentData = async () =>{
        try{
                const _data = await contract.getStudentByID(id);
                console.log(_data); 
                setData(_data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
     if(signer){
        getStudentData();
     } 
    }, [signer])
    

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
                                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-4/12 bg-cover rounded-l-lg"
                                style={{
                                    backgroundPosition: 0 - 180,
                                    backgroundImage:
                                        'url("https://cdn3d.iconscout.com/3d/premium/thumb/holding-book-girl-5083061-4444667.png")'
                                }}
                            />
                            {/* Col */}
                            <div className="w-full lg:w-7/12 bg-white p-5 rounded-md lg:rounded-l-none">
                                <h3 className=" ml-32  block p-4 text-2xl text-center text-white bg-blue-500  w-5/12 text-sm text-gray-900  rounded-lg border ">Student Info</h3>

                                <form className="px-24 pt-6 pb-8 mb-4 bg-white rounded">

                                    <div className=" mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="firstName"
                                            >
                                                First Name
                                            </label>
                                            <span className="w-full px-10 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                                                {'Ramesh'}
                                            </span>
                                        </div>

                                        <div className="mb-4 md:mr-2 md:mb-0 text-center">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="lastName"
                                            >
                                                Last Name
                                            </label>
                                            <span className="w-full text-center px-14 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                                                {'Mundi'}
                                            </span>
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
                                            <span className="w-full px-10 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                                                {'Pitashree'}
                                            </span>
                                        </div>

                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="motherName"
                                            >
                                                Mother's Name
                                            </label>
                                            <span className="w-full px-14 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                                            {'ammijan'}
                                            </span>
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
                                            <span className="w-full px-14  py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                                              {'Male'}  
                                            </span>
                                        </div>

                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="dob"
                                            >
                                                Date of Birth
                                            </label>
                                            <span className="w-full px-10 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                                                {'22/03/2000'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <span className="w-full px-10 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                                            {'random@gmail.com'}
                                        </span>
                                    </div>

                                    <div className="mb-4">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="mobileNumber"
                                        >
                                            Phone Number
                                        </label>
                                        <span className="w-full px-10 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                                            {'9283938489'}
                                        </span>
                                    </div>
                                    </div>

                                    <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="gender"
                                            >
                                                Country
                                            </label>
                                            <span className="w-full px-10 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="gender">
                                                    {'India'}
                                                </span>
                                        </div>
                                    </div>
                                    
                                    <div className="md:ml-2 relative right-10">
                                            <label
                                                className="text-center block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="course"
                                            >
                                                Course
                                            </label>
                                            <span className="w-full relative px-14 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                                                {'BTech'}
                                            </span>
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
                                            <span className="w-full px-10 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                                                {'12th'}
                                            </span>

                                        </div>

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

export default StudentDetail
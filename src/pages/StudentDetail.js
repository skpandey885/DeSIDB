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
      <section className="h-auto px-12 pb-12">
        <p className="mt-1 mb-8 text-3xl font-semibold border-b pb-4 text-gray-900  ">
          Student Info 
        </p>
        <div className='grid grid-cols-3 '>
          <div className='col-span-1'>

            <div className='grid grid-cols-2  gap-x-12 max-w-screen-md'>
              <div className="mb-5 col-span-1">
                <label
                  htmlFor="first-name"
                  className="mb-3  block text-base font-semibold"
                >
                  First Name
                </label>
                <p className='bg-gray-100 p-1 rounded'>{data?.firstName}</p>
            
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="last-name"
                  className="mb-3 block text-base font-semibold"
                >
                  Last Name
                </label>
                <p className='bg-gray-100 p-1 rounded'>{data?.lastName}</p> 
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="father-name"
                  className="mb-3 block text-base font-medium "
                >
                  Father's Name
                </label>
               <p className='bg-gray-100 p-1 rounded'>{data?.fatherName}</p>
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="mother-name"
                  className="mb-3 block text-base font-semibold "
                >
                  Mother's Name
                </label>
              <p className='bg-gray-100 p-1 rounded'>{data?.motherName}</p>
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="gender"
                  className="mb-3 block text-base font-semibold "
                >
                  Gender
                </label>
                <p className='bg-gray-100 p-1 rounded'>{data?.gender}</p>
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="dob"
                  className="mb-3 block text-base font-semibold"
                >
                  Date Of Birth
                </label>
                <p className='bg-gray-100 p-1 rounded'>{data?.dateOfBirth}</p>               
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-semibold "
                >
                  Email
                </label>
                <p className='bg-gray-100 p-1 rounded'>{data?.emailId}</p>           
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="college-name"
                  className="mb-3 block text-base font-semibold "
                >
                  College
                </label>
              <p className='bg-gray-100 p-1 rounded'>{data?.collegeName}</p>
              </div>
              <div className='mb-5 col-span-1'>
                <label
                  htmlFor="mobile-text"
                  className="mb-3 block text-base font-semibold "
                > Course </label>
               <p className='bg-gray-100 p-1 rounded'>{data?.course}</p>
              </div>
              <div className="mb-5 col-span-1">
                <label
                  htmlFor="mobile-text"
                  className="mb-3 block text-base font-semibold "
                >
                  Level
                </label>
                <p className='bg-gray-100 p-1 rounded'>{data?.level}</p>
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="mobile-text"
                  className="mb-3 block text-base font-semibold"
                >
                  Mobile
                </label>
              <p className='bg-gray-100 p-1 rounded'>{data?.mobileNumber}</p>
              </div>
              
            </div>
            </div>
          <div className='col-span-2 flex items-center justify-center '>
            <img src="https://i.postimg.cc/3wPQjJFm/undraw-Scrum-board-re-wk7v.png" className="h-[500px]" alt="..." />
          </div>
        </div>
      </section>
    </div>
    )
}

export default StudentDetail
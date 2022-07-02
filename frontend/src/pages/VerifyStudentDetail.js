import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useContract, useSigner } from 'wagmi';
import axios from 'axios'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../components/contract/contract';
import moment from 'moment';

const courses = [
    'B.Tech',
    'B.Arch',
    'BCA',
    'B.Sc',
    'B.Pharma',
    'BDS',
    'BPT',
    'B.A'
  ]

  const level = [
    'Higher Secondary',
    'Bachelors',
    'Masters',
    'Doctorate'
  ]

const VerifyStudentDetail = () => {
    const [state, setState] = useState();
    const [date, setDate] = useState();
    const [data,setData] = useState();
    let params = useParams();
    const id = params.id;

    const  {data:signer } = useSigner();

    const contract = useContract({
        addressOrName: CONTRACT_ADDRESS,
        contractInterface: CONTRACT_ABI,
        signerOrProvider:signer
      })
      
      useEffect(() => {
        if(signer){
           getStudents();
           dateFunc();  
        } 
       }, [signer])

    const location = useLocation();

    const getStudents = async () => {
        const data = await location.state;
        setData(data);
        console.log(data);
    }

    const dateFunc = async () => {
        const isoDate = await data.dob;
        const newDate = moment.utc(isoDate).format("MMM Do, YYYY");
        setDate(newDate);
        console.log(newDate);
    }

    
    
    if (!signer) {
        return <div className='h-[90vh] w-screen flex items-center justify-center'>Pleae Connect to your metamask wallet</div>
      }

    return (
        <div>
      <section className="h-auto px-12 pb-12">
        <p  className="mt-1 mb-8 text-3xl font-semibold border-b pb-4 text-gray-900  ">
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
                <input defaultValue={data?.fname}  type="text" className='bg-gray-100 p-1 rounded'  />
            
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="last-name"
                  className="mb-3 block text-base font-semibold"
                >
                  Last Name
                </label>
                <input defaultValue={data?.lname} type="text" className='bg-gray-100 p-1 rounded' />
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="father-name"
                  className="mb-3 block text-base font-medium "
                >
                  Father's Name
                </label>
                <input defaultValue={data?.father} type="text" className='bg-gray-100 p-1 rounded' />
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="mother-name"
                  className="mb-3 block text-base font-semibold "
                >
                  Mother's Name
                </label>
                <input defaultValue={data?.mother} type="text" className='bg-gray-100 p-1 rounded' />
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="gender"
                  className="mb-3 block text-base font-semibold "
                >
                  Gender
                </label>
                <select defaultValue={data?.gender} name='gender' >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="dob"
                  className="mb-3 block text-base font-semibold"
                >
                  Date Of Birth
                </label>
                <input value={date} type="text" className='bg-gray-100 p-1 rounded' />              
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-semibold "
                >
                  Email
                </label>
                <input type="email" defaultValue={data?.email} className='bg-gray-100 p-1 rounded' />   
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="college-name"
                  className="mb-3 block text-base font-semibold "
                >
                  College
                </label>
              <input type="text" defaultValue={data?.college} className='bg-gray-100 p-1 rounded' />
              </div>

              <div className='mb-5 col-span-1'>
                <label
                  htmlFor="mobile-text"
                  className="mb-3 block text-base font-semibold "
                > Course </label>
                <select defaultValue={data?.course} name='course' >
                  {courses.map((course, i) => (
                    <option value={course} key={i}>{course}</option>
                  ))}
                </select>
        
              </div>
              <div className="mb-5 col-span-1">
                <label
                  htmlFor="mobile-text"
                  className="mb-3 block text-base font-semibold "
                >
                  Level
                </label>
                <select defaultValue={data?.level} name='level' >
                  {level.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="mobile-text"
                  className="mb-3 block text-base font-semibold"
                >
                  Mobile
                </label>
              <input type="text" defaultValue={data?.mobile} className='bg-gray-100 p-1 rounded' />
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

export default VerifyStudentDetail
import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useParams, useNavigate} from 'react-router-dom'
import { useContract, useSigner } from 'wagmi';
import axios from 'axios'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../components/contract/contract';
import moment from 'moment';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Loader from '../components/Loader';

const courses = [
  'B.Tech',
  'B.Arch',
  'BCA',
  'B.Sc',
  'B.Pharma',
  'B.Com',
  'BDS',
  'BPT',
  'B.A',
  'I.Sc',
  'I.Com',
  'I.A',
  'Diploma',
  'M.Sc',
  'M.Com',
  'M.A',
  'MCA',
  'Phd'
]

const level = [
  'Higher Secondary',
  'Bachelors',
  'Masters',
  'Doctorate'
]

const UpdateStudentDetail = () => {
      const [loading,setLoading] = useState(false);
       const [data,setData] = useState();
       const {register,handleSubmit,setValue} = useForm();
       
  const [submitStatus, updateSubmit] = useState("Update");
  const [currClass, updateClass] = useState("text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2");
  const [disabledStatus, disabledUpdate] = useState(false);
  const navigate = useNavigate();
  //db stuff
      let params = useParams();
      const id = params.id;

      const  {data:signer } = useSigner();

      const contract = useContract({
          addressOrName: CONTRACT_ADDRESS,
          contractInterface: CONTRACT_ABI,
          signerOrProvider:signer
        })
        

      const getStudentData = async () =>{
        setLoading(true)
          try{
              const _data = await contract.getStudentByID(id);
              for(const key in _data){
                  setValue(key.toString(),_data[key]);
              } 
              setLoading(false)
                  setData(_data);
                  console.log(_data)
          }catch(err){
              console.log(err);
          }
      }
      

      const updateInfo = async (_data) => {
        console.log(data);
        try{
            updateClass("text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2");
            updateSubmit("Updating...")
            disabledUpdate(true);
            const updateTx = await contract.updateStudentData(
            _data.firstName,
            _data.lastName,
            _data.fatherName,
            _data.motherName,
            _data.gender,
            _data.dateOfBirth,
            _data.emailId,
            _data.collegeName,
            _data.level,
            _data.course,
            _data.mobileNumber
          );

          await updateTx.wait();
          console.log(updateTx);
          toast.success("Update Successfull")
          updateSubmit("Updated Successfully");
          //navigate to student details page after successfull update
          navigate('/browse/students/'+id);
        } catch(err){
          console.log(err);
          toast.error("Update Failed")
          updateSubmit('Update')
          updateClass("text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2")
          disabledUpdate(false)
        }
      }
    
    useEffect(() => {
     if(signer){
        getStudentData();
     } 
    }, [signer])
    
    if (!signer) {
        return <div className='h-[90vh] w-screen flex items-center justify-center'>Pleae Connect to your metamask wallet</div>
      }
      if (loading) {
        return <div className='h-[90vh] w-screen flex items-center justify-center'><Loader /></div>
      }
    return (
        <div>
      <section className="h-auto px-12 pb-12">
        <p className="mt-1 mb-8 text-3xl font-semibold border-b pb-4 text-gray-900  ">
          Student Info 
          
        </p>

        <form onSubmit={handleSubmit(updateInfo)}>

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
                <p className='bg-gray-100 p-2 px-3 rounded'>{data?.firstName}</p>
            
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="last-name"
                  className="mb-3 block text-base font-semibold"
                >
                  Last Name
                </label>
                <p className='bg-gray-100 p-2 px-3 rounded'>{data?.lastName}</p> 
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="father-name"
                  className="mb-3 block text-base font-medium "
                >
                  Father's Name
                </label>
               <p className='bg-gray-100 p-2 px-3 rounded'>{data?.fatherName}</p>
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="mother-name"
                  className="mb-3 block text-base font-semibold "
                >
                  Mother's Name
                </label>
              <p className='bg-gray-100 p-2 px-3 rounded'>{data?.motherName}</p>
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="gender"
                  className="mb-3 block text-base font-semibold "
                >
                  Gender
                </label>
                <p className='bg-gray-100 p-2 px-3 rounded'>{data?.gender}</p>
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="dob"
                  className="mb-3 block text-base font-semibold"
                >
                  Date Of Birth
                </label>
                <p className='bg-gray-100 p-2 px-3 rounded'>{data?.dateOfBirth}</p>               
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-semibold "
                >
                  Email
                </label>
                <p className='bg-gray-100 p-2 px-3 rounded'>{data?.emailId}</p>        
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="college-name"
                  className="mb-3 block text-base font-semibold "
                >
                  College
                </label>
                <input {...register('collegeName')} type='text'/>    
              </div>
              <div className='mb-5 col-span-1'>
                <label
                  htmlFor="mobile-text"
                  className="mb-3 block text-base font-semibold "
                > Course </label>
                <select {...register('course')} >
                    {courses.map((l) => (
                      <option key={l} value={l}>{l}</option>
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
                <select  {...register('level')} >
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
                <input {...register('mobileNumber')} type='text' /> 
              </div>
            </div>
            <button type='submit' className={currClass} disabled={disabledStatus}>
                  {submitStatus}
                </button>
            </div>
          <div className='col-span-2 flex items-center justify-center '>
            <img src="https://i.postimg.cc/3wPQjJFm/undraw-Scrum-board-re-wk7v.png" className="h-[500px]" alt="..." />
          </div>
        </div>
        </form>
      </section>
    </div>
  )
}

export default UpdateStudentDetail
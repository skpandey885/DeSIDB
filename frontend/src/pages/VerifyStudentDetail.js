import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useParams, useNavigate} from 'react-router-dom'
import { useContract, useSigner } from 'wagmi';
import axios from 'axios'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../components/contract/contract';
import moment from 'moment';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

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

const VerifyStudentDetail = () => {
  const [state, setState] = useState();
  const [date, setDate] = useState();
  const [data, setData] = useState();
  const {register,handleSubmit,setValue} = useForm()
  const [submitStatus, updateSubmit] = useState("Verify");
  const [currClass, updateClass] = useState("text-white bg-gradient-to-r from-blue-500 w-full via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2");
  const [disabledStatus, disabledUpdate] = useState(false);

  let params = useParams();
  const id = params.id;

  const { data: signer } = useSigner();

  const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    signerOrProvider: signer
  })

  useEffect(() => {
    if (signer) {
      getStudents();
      dateFunc();
    }
  }, [signer])

  const location = useLocation();

  const getStudents = async () => {
    const data = await location.state;
    setData(data);
    for(const key in data){
      if(key.toString() === 'dob'){
        const newDate = moment.utc(data[key]).format("MMM Do, YYYY");
        setValue('dob',newDate);
        continue;
      }
      setValue(key,data[key])
    }    // console.log(data);
  }

  const dateFunc = async () => {
    const isoDate = await data.dob;
    const newDate = moment.utc(isoDate).format("MMM Do, YYYY");
    setDate(newDate);
    // console.log(newDate);
  }

  const deleteFun = async () => {
    
    const id = await data._id;
    console.log(id);
    
    const res = await fetch('https://desidbbackend.herokuapp.com/delete', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id
      })

    });
    // Redirect to /verify route after verifying successfully
    navigate('/browse/verify',{replace:true})

  }
  
  const navigate = useNavigate();
  
  const registerStudentToBlockhain = async (data) => {
    console.log(data);
    try {
      disabledUpdate(true);
      updateSubmit("Saving data to blockchain...")
      updateClass("text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2");
      // Send transaction to save data to blockchain
      const registerTx = await contract.registerStudent(data.fname, data.lname, data.father, data.mother, data.gender,data.dob, data.email, data.college, data.level, data.course, data.mobile.toString());
      await registerTx.wait();
      toast.success("Data saved to blockchain successfully!");
      // Delet data from mongodb after  saving to blockchain successfully
      const res = await deleteFun()
      console.log(res);
      updateSubmit("Verified & Pubished");
      console.log(registerTx);
      
    } catch (err) {
      console.log(err);
    }

  }


  if (!signer) {
    return <div className='h-[90vh] w-screen flex items-center justify-center'>Please Connect to your metamask wallet</div>
  }

  return (
    <div>
        <section className="h-auto px-12 pb-12">
          <div className='flex items-center justify-between'>

          <p className="mt-1 mb-8 text-3xl font-semibold border-b pb-4 text-gray-900  ">
            Verify Student Info
          </p>
          <button onClick={()=>deleteFun()} className="text-white bg-gradient-to-r from-red-500 w-full via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:red-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-56" >
                      Remove Student
                    {/* {loading ? "Processing Transaction..." : "Register Student "} */}
                  </button>
          </div>
      <form onSubmit={handleSubmit(registerStudentToBlockhain)}>
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
                  <input {...register('fname')} type="text" className='bg-gray-100 p-1 rounded' />

                </div>

                <div className="mb-5 col-span-1">
                  <label
                    htmlFor="last-name"
                    className="mb-3 block text-base font-semibold"
                  >
                    Last Name
                  </label>
                  <input {...register('lname')} type="text" className='bg-gray-100 p-1 rounded' />
                </div>

                <div className="mb-5 col-span-1">
                  <label
                    htmlFor="father-name"
                    className="mb-3 block text-base font-medium "
                  >
                    Father's Name
                  </label>
                  <input {...register('father')} type="text" className='bg-gray-100 p-1 rounded' />
                </div>

                <div className="mb-5 col-span-1">
                  <label
                    htmlFor="mother-name"
                    className="mb-3 block text-base font-semibold "
                  >
                    Mother's Name
                  </label>
                  <input {...register('mother')} type="text" className='bg-gray-100 p-1 rounded' />
                </div>

                <div className="mb-5 col-span-1">
                  <label
                    htmlFor="gender"
                    className="mb-3 block text-base font-semibold "
                  >
                    Gender
                  </label>
                  <select {...register('gender')}  >
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
                  <input {...register('dob')} type="text" className='bg-gray-100 p-1 rounded' />
                </div>

                <div className="mb-5 col-span-1">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-semibold "
                  >
                    Email
                  </label>
                  <input type="email" {...register('email')} className='bg-gray-100 p-1 rounded' />
                </div>

                <div className="mb-5 col-span-1">
                  <label
                    htmlFor="college-name"
                    className="mb-3 block text-base font-semibold "
                  >
                    College
                  </label>
                  <input type="text" {...register('college')} className='bg-gray-100 p-1 rounded' />
                </div>

                <div className='mb-5 col-span-1'>
                  <label
                    htmlFor="mobile-text"
                    className="mb-3 block text-base font-semibold "
                  > Course </label>
                  <select {...register('course')} >
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
                  <select {...register('level')} >
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
                  <input type="text" {...register('mobile')} className='bg-gray-100 p-1 rounded' />
                </div>

                <div className='col-span-2 grid gap-4 grid-cols-2'>
                  <button className={currClass} disabled={disabledStatus} type='submit'  >
                    {submitStatus}
                    {/* {loading ? "Processing Transaction..." : "Register Student "} */}
                  </button>
                  
                </div>

              </div>
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

export default VerifyStudentDetail
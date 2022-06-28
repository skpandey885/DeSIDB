import { Signer } from 'ethers';
import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import toast from 'react-hot-toast';
import { useContract, useSigner } from 'wagmi';
import ButtonLoader from '../../components/ButtonLoader';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../components/contract/contract';

const RegisterCollegePage = () => {
  const [loading,setLoading] = useState(false);
  const [isAdmin,setIsAdmin] = useState(false);
  const {register,handleSubmit,formState:{errors}} = useForm();
  
  const {data:signer} = useSigner();
  const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    signerOrProvider:signer
  })
  
  const checkIfAdmin = async () =>{
    console.log("Inside check admin")
    try{
      if(contract && signer){
        const _isAdmin = await contract.checkIfAdmin();
        console.log(_isAdmin);
        setIsAdmin(_isAdmin);         
      }
    } catch(err){
      console.log(err);
    }
  } 

  useEffect(() => {
    checkIfAdmin();    
  }, [signer])
  
  
  const registerCollege = async (data) => {
    setLoading(true);
    try{
      const registerTx = await contract.registerCollege(data.collegeName,data.collegeAddress,data.mobile,data.collegeEmail,data.website,data.aicte,data.mhrd);
      await registerTx.wait();
      console.log(registerTx);
      toast.success("College added successfully"); 
    } catch(err) {
      toast.error("Failed to add college due to some error")
      console.log(err);
    }
    setLoading(false);
  }
  if(!signer){
    return <div className='h-[90vh] w-screen flex items-center justify-center'>Please Connect to your metamask wallet</div>
  }

  if(!isAdmin){
    return <div className='h-[90vh] w-screen flex items-center justify-center'>You do not have the authority to add colleges . Please contact the admin at xyz@gmail.com</div>
  }
  
  return (
    <div class="px-4">
        <div className="ml-[150px] mt-10 register-college-text">
           <p className="mt-1 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-100 mb-5 pb-5  ">
              Register Your college and Avail Incremental Benefits
            </p>
            <p className=" ml-[100px] text-xl  mt-5 text-md text-gray-500">
              Registering here makes your college to avail multiple benefits like Fellowships, Programs and Trainings.
            </p>
      </div>      
        <div className="float-left md:pt-[80px] pl-[100px] register-sign">
        <img src="/assets/register.png" className="max-w-full h-auto" alt="..." />
     </div> 
    <div className="flex items-end justify-end py-[50px]">
    <div className="mx-auto w-full max-w-[550px]">
    <form onSubmit={handleSubmit(registerCollege)}>
      <div className="mb-5">
        <label
          className="mb-3 block text-base font-medium "
        >
         College Name
        </label>
        <input
          type="text"
          {...register('collegeName',{required:true})}
          placeholder="Full Name"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="address-text"
          className="mb-3 block text-base font-medium"
          required
        >
         Address
        </label>
        <input
          type="text"
          {...register('collegeAddress',{required:true})}
          placeholder="Address"
          required
        />
      </div>
      <div className="mb-5">
        <label
          className="mb-3 block text-base font-medium"
        >
        Mobile
        </label>
        <input
          type="tel"
          pattern='^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$'
          {...register('mobile',{required:true})}
          placeholder="Mobile"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="website-text"
          className="mb-3 block text-base font-medium"
          required
        >
       Website
        </label>
        <input
        type="text"
          {...register('website',{required:true})}
          placeholder="Website"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium"
        >
          Email Address
        </label>
        <input
          type="email"
          {...register('collegeEmail',{required:true})}
          placeholder="example@domain.com"
          required
        />
      </div>
      <div className='mb-5 flex text-xl items-center gap-2'>
          <label>Is college AICTE affiliated ? </label>
          <input {...register('aicte',{required:true})} className='h-5 w-5' type='radio' value={true}/> Yes
          <input {...register('aicte',{required:true})} className='h-5 w-5' type='radio' value={false} /> No
      </div>
      <div className='mb-5 flex text-xl items-center gap-2'>
          <label>Is college MHRD affiliated ? </label>
          <input {...register('mhrd',{required:true})} className='h-5 w-5' type='radio' value={true}/> Yes
          <input {...register('mhrd',{required:true})} className='h-5 w-5' type='radio' value={false} /> No
      </div>
    <div>
      <button type='submit' disabled={loading} className="primary-btn disabled:bg-gray-400">
          {loading ? <ButtonLoader /> : "Add College"}
      </button>
      </div>
    </form>
  </div>
  </div> 
    </div>
  )
}

export default RegisterCollegePage

import React from 'react'
import { useForm } from 'react-hook-form';
import { useContract, useSigner } from 'wagmi';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../components/contract/contract';

import StudentForm from '../../partials/StudentForm'

const Student = () => {
  const {register,handleSubmit} = useForm();
 const {data:signer} = useSigner();
  
  
  const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    signerOrProvider:signer
  }) 
  
  const registerStudent = async (data) => {
    try{
      const registerTx = await contract.registerCollege();
      await registerTx.wait();
      console.log(registerTx); 
    } catch(err) {
      console.log(err);
    }
  }
  
  return (
    <div>
        <section className="h-auto dark:bg-main-dark-bg dark:text-white">
          <div className="px-4 py-16 mx-auto text-center max-w-7xl sm:py-24 sm:px-6 lg:px-8">
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Register Yourself and Get an early start on your Career
            </p>
            <p className="max-w-3xl mx-auto mt-5 text-xl text-gray-500">
              Registering here makes you visible to Nation's top colleges and might help you get your dream college.
            </p>
            <StudentForm />
          </div>
        </section>

    </div>
  )
}

export default Student
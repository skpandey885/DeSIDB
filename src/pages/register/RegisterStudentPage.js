import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useContract, useSigner } from 'wagmi';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../components/contract/contract';
import toast from 'react-hot-toast'
const level = [
  'Higher Secondary',
  'Bachelors',
  'Masters',
  'Doctorate'
]
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

const Student = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const { data: signer } = useSigner();

  const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    signerOrProvider: signer
  })

  const registerStudent = async (data) => {
    setLoading(true);
    try {
      console.log(data);
      const registerTx = await contract.registerStudent(data.firstName, data.lastName, data.fatherName, data.motherName, data.gender, data.dob, data.email, data.collegeName, data.level, data.course, data.mobile);
      await registerTx.wait();
      toast.success("Student registered successfully!");
      console.log(registerTx);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  if (!signer) {
    return <div className='h-[90vh] w-screen flex items-center justify-center'>Pleae Connect to your metamask wallet</div>
  }

  return (
    <div>
      <section className="h-auto px-12 pb-12">
        <p className="mt-1 mb-8 text-3xl font-semibold border-b pb-4 text-gray-900  ">
          Register Student Information
        </p>
        <div className='grid grid-cols-2 '>
          <form className='col-span-1' onSubmit={handleSubmit(registerStudent)}>

            <div className='grid grid-cols-2 gap-x-12 max-w-screen-md'>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="first-name"
                  className="mb-3 block text-base font-medium"
                >
                  First Name
                </label>

                <input
                  type="text"
                  {...register('firstName')}
                  placeholder="First Name"
                />
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="last-name"
                  className="mb-3 block text-base font-medium"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  {...register('lastName')}
                  placeholder=" Last Name"
                />
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="father-name"
                  className="mb-3 block text-base font-medium "
                >
                  Father's Name
                </label>
                <input
                  type="text"
                  {...register('fatherName')}
                  placeholder="Father's Name"
                />
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="mother-name"
                  className="mb-3 block text-base font-medium "
                >
                  Mother's Name
                </label>
                <input
                  type="text"
                  {...register('motherName')}
                  placeholder=" Mother's Name"
                />
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="gender"
                  className="mb-3 block text-base font-medium "
                >
                  Gender
                </label>
                <select {...register('gender')}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Female</option>
                </select>

              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="dob"
                  className="mb-3 block text-base font-medium"
                >
                  Date Of Birth
                </label>
                <input
                  type="date"
                  {...register('dob')}
                  placeholder="Date Of Birth"
                />
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium "
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register('email')}
                  placeholder="example@domain.com"
                />
              </div>

              <div className="mb-5 col-span-1">
                <label
                  htmlFor="college-name"
                  className="mb-3 block text-base font-medium "
                >
                  College
                </label>
                <input
                  type="text"
                  {...register('collegeName')}
                  placeholder="College"
                />
              </div>
              <div className='mb-5 col-span-1'>
                <label
                  htmlFor="mobile-text"
                  className="mb-3 block text-base font-medium "
                > Course </label>
                <select {...register('course')}>
                  {courses.map((course, i) => (
                    <option value={course} key={i}>{course}</option>
                  ))}
                </select>
              </div>
              <div className="mb-5 col-span-1">
                <label
                  htmlFor="mobile-text"
                  className="mb-3 block text-base font-medium "
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
                  className="mb-3 block text-base font-medium"
                >
                  Mobile
                </label>
                <input
                  type="tel"
                  pattern='^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$'
                  {...register('mobile')}
                  placeholder="Mobile"
                  required
                />
              </div>
              <div className='col-span-2'>
                <button type='submit' disabled={loading} className="primary-btn disabled:bg-gray-400 px-10">
                  {loading ? "Processing Transaction..." : "Register Student "}
                </button>
              </div>
            </div>
          </form>
          <div className='col-span-1'>
            <img src="/assets/register-student2.png" className="" alt="..." />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Student
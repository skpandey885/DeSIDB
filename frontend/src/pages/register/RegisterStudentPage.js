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

  //db stuff
  const [user, setUser] = useState({
    fname: "",lname:"",father: "",mother: "", gender:"Male",dob:"",email: "",college: "",course: "B.Tech",level: "Higher Secondary",mobile: ""
  });
  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value= e.target.value;
    setUser({...user, [name]:value});
    
  }

  const PostData = async (e) => {
    e.preventDefault();

    const {fname,lname,father,mother, gender,dob,email,college,course,level,mobile} = user;
    console.log(fname);
    
   const res = await fetch('/compose', {
    method : "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({
      fname,lname,father,mother, gender,dob,email,college,course,level,mobile
    })
    
   });
  }




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

  // if (!signer) {
  //   return <div className='h-[90vh] w-screen flex items-center justify-center'>Please Connect to your metamask wallet</div>
  // }

  return (
    <div>
      <section className="h-auto px-12 pb-12">
        <p className="pb-5 mb-5 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-100">
          Register Student Information
        </p>
        <div className='grid grid-cols-2 '>
          <form className='col-span-1' method='POST'>

            <div className='grid max-w-screen-md grid-cols-2 gap-x-12'>

              <div className="col-span-1 mb-5">
                <label
                  htmlFor="first-name"
                  className="block mb-3 text-base font-medium"
                >
                  First Name
                </label>

                <input
                  
                  name='fname'
                  onChange={handleInputs}
                  type="text"
                 
                  placeholder="First Name"
                />
              </div>

              <div className="col-span-1 mb-5">
                <label
                  htmlFor="last-name"
                  className="block mb-3 text-base font-medium"
                >
                  Last Name
                </label>
                <input
                value={user.lname}
                  type="text"
                  name='lname'
                  onChange={handleInputs}
                  placeholder=" Last Name"
                />
              </div>

              <div className="col-span-1 mb-5">
                <label
                  htmlFor="father-name"
                  className="block mb-3 text-base font-medium "
                >
                  Father's Name
                </label>
                <input
                value={user.father}
                name='father'
                  type="text"
                  onChange={handleInputs}
                  placeholder="Father's Name"
                />
              </div>

              <div className="col-span-1 mb-5">
                <label
                  htmlFor="mother-name"
                  className="block mb-3 text-base font-medium "
                >
                  Mother's Name
                </label>
                <input
                  value={user.mother}
                  name='mother'
                  type="text"
                  onChange={handleInputs}
                  placeholder=" Mother's Name"
                />
              </div>

              <div className="col-span-1 mb-5">
                <label
                  htmlFor="gender"
                  className="block mb-3 text-base font-medium "
                >
                  Gender
                </label>
                <select value={user.gender} onChange={handleInputs} name='gender' >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>

              </div>

              <div className="col-span-1 mb-5">
                <label
                  htmlFor="dob"
                  className="block mb-3 text-base font-medium"
                >
                  Date Of Birth
                </label>
                <input
                  value={user.dob}
                  name='dob'
                  type="date"
                  onChange={handleInputs}
                  placeholder="Date Of Birth"
                />
              </div>

              <div className="col-span-1 mb-5">
                <label
                  htmlFor="email"
                  className="block mb-3 text-base font-medium "
                >
                  Email
                </label>
                <input
                  value={user.email}
                  name='email'
                  type="email"
                  onChange={handleInputs}
                  placeholder="example@domain.com"
                />
              </div>

              <div className="col-span-1 mb-5">
                <label
                  htmlFor="college-name"
                  className="block mb-3 text-base font-medium "
                >
                  College
                </label>
                <input
                  value={user.college}
                  name='college'
                  type="text"
                  onChange={handleInputs}
                  placeholder="College"
                />
              </div>
              <div className='col-span-1 mb-5'>
                <label
                  htmlFor="mobile-text"
                  className="block mb-3 text-base font-medium "
                > Course </label>
                <select value={user.course} onChange={handleInputs} name='course' >
                  {courses.map((course, i) => (
                    <option value={course} key={i}>{course}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-1 mb-5">
                <label
                  htmlFor="mobile-text"
                  className="block mb-3 text-base font-medium "
                >
                  Level
                </label>
                <select value={user.level} name='level' onChange={handleInputs} >
                  {level.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              <div className="col-span-1 mb-5">
                <label
                  htmlFor="mobile-text"
                  className="block mb-3 text-base font-medium"
                >
                  Mobile
                </label>
                <input
                  value={user.mobile}
                  name='mobile'
                  type="tel"
                  // pattern='^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$'
                  onChange={handleInputs}
                  placeholder="Mobile"
                  required
                />
              </div>
              <div className='col-span-2'>
                <button type='submit' onClick={PostData}  className="px-10 primary-btn disabled:bg-gray-400">
                Register Student
                  {/* {loading ? "Processing Transaction..." : "Register Student "} */}
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

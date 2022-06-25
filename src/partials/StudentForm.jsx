import React from 'react'

// import { AiFillCaretDown } from 'react-icons/ai'

const StudentForm = () => {
    return (
        <div>

             
            <div class="flow-root"> 

     <div className="float-left md:pt-[0px] pl-[-120px] register-sign">
     <img src="/assets/register-student2.png" className="h-[80%] w-[80%]" alt="..." />
     </div> 

   <div className="flex items-end justify-end py-[50px]">
     
  <div className="mx-auto w-full max-w-[550px]">
  <form action="https://formbold.com/s/FORM_ID" method="POST">

      <div className="mb-5">
       
        <label
          htmlFor="first-name"
          className="mb-3  block text-base font-medium text-[#07074D]" >
         First Name
        </label>

        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="First Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="last-name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Last Name
        </label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          placeholder=" Last Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="father-name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Father's Name
        </label>
        <input
          type="text"
          name="father-name"
          id="father-name"
          placeholder="Father's Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="mother-name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Mother's Name
        </label>
        <input
          type="text"
          name="mother-name"
          id="mother-name"
          placeholder=" Mother's Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>


      <div className="mb-5">
        <label
          htmlFor="gender"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Gender
        </label>
        <input
          type="text"
          name="gender"
          id="gender"
          placeholder="Gender"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>


      <div className="mb-5">
        <label
          htmlFor="dob"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
      Date Of Birth
        </label>
        <input
          type="date"
          name="dob"
          id="dob"
          placeholder="Date Of Birth"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>


      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
     

      <div className="mb-5">
        <label
          htmlFor="college-name"
          className="mb-3 block text-base font-medium text-[#07074D]" >
         College

        </label>
        <input
          type="text"
          name="college-name"
          id="college-name"
          placeholder="College"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
           />
      </div>

 
      <div className="mb-5">
        <label
          htmlFor="mobile-text"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Level
        </label>
      

   



      </div>





      <div className="mb-5">
        <label
          htmlFor="mobile-text"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Mobile
        </label>
        <input
          type="text"
          name="mobile-text"
          id="mobile-text"
          placeholder="Mobile"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>









      <div>
  <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>








    </div>
  









        </div>
    )
}

export default StudentForm
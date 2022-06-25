import React from 'react'

const RegisterCollegePage = () => {
  return (
  
    <div class="flow-root ">
     <div className="float-left md:pt-[125px] pl-8 register-sign">
     <img src="/assets/register.png" class="max-w-full h-auto" alt="..." />
     </div> 

   <div className="flex items-end justify-end p-20">
  <div className="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         College Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      


      <div className="mb-5">
        <label
          htmlFor="address-text"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Address
        </label>
        <input
          type="text"
          name="address-text"
          id="address-text"
          placeholder="Address"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
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


      <div className="mb-5">
        <label
          htmlFor="website-text"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
       Website
        </label>
        <input
          type="text"
          name="website-text"
          id="website-text"
          placeholder="Website"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>


      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
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
  )
}

export default RegisterCollegePage
import React from 'react'

import StudentForm from '../../partials/StudentForm'

const Student = () => {
  return (
    <div>
        <section className="h-auto dark:bg-main-dark-bg dark:text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Register Yourself and Get an early start on your Career
            </p>
            <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
              Registering here makes you visible to Nation's top colleges and might help you get your dream college.
            </p>
            <StudentForm />
          </div>
        </section>

    </div>
  )
}

export default Student
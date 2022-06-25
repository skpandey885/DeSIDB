import React from 'react'
import { MdFacebook } from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
    
    <section className="bg-white dark:bg-main-dark-bg w-full  bottom-0 border-t">
        <div className="max-w-screen-xl px-4 py-5 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <a
                href="/About"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                About Us
              </a>
            </div>



            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Team
              </a>
            </div>


            <div className="px-5 py-2">
              <a
                href="/Contact"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Contact Us
              </a>
            </div>

            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Terms
              </a>
            </div>
          </nav>

          <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <MdFacebook size={30} />
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <BsTwitter size={30} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <BsGithub size={30} />
            </a>

          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2022 TeamDEV
          </p>
        </div>
      </section>
    </div>
  )
}

export default Footer
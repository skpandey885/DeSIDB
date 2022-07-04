import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { HiChevronDown as ChevronDownIcon } from 'react-icons/hi/index'
import { Link } from 'react-router-dom'

export default function BrowseDropdown() {
  return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex items-center rounded hover:bg-gray-100 hover:text-blue-500 font-medium px-4 py-2 ">
            Browse
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 "
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-40 z-50 origin-top-left bg-white ring-1 ring-gray-200 shadow-lg rounded">
            <div className="p-1  flex flex-col i">
            <Menu.Item>
                  <Link className='px-4 py-2 rounded hover:bg-gray-100 duration-100' to='/browse/add-admin'>
                    Add Admin
                  </Link>
              </Menu.Item>
            
            <Menu.Item>
                  <Link className='px-4 py-2 rounded hover:bg-gray-100 duration-100' to='/browse/verify'>
                    Verify Details
                  </Link>
              </Menu.Item>

              <Menu.Item>
                  <Link className='px-4 py-2 rounded hover:bg-gray-100 duration-100' to='/browse/students'>
                    Students
                  </Link>
              </Menu.Item>
              <Menu.Item>
              <Link className='px-4 py-2 rounded hover:bg-gray-100 duration-100' to='/browse/colleges'>
                  Colleges
              </Link>
              </Menu.Item>
            
            </div>
          </Menu.Items>
        </Transition>
      </Menu>    
  )
}

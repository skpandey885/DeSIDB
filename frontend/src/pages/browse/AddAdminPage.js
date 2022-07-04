import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../components/contract/contract';
import { useContract, useSigner } from 'wagmi';


const AddAdminPage = () => {
    const [isAdmin,setIsAdmin] = useState(false);
    const [address, setAddress] = useState('')
    const { data: signer } = useSigner();

    const contract = useContract({
        addressOrName: CONTRACT_ADDRESS,
        contractInterface: CONTRACT_ABI,
        signerOrProvider: signer
    })

    const checkIfAdmin = async () => {
        console.log("Inside check admin")
        try {
            if (contract && signer) {
                const _isAdmin = await contract.checkIfAdmin();
                console.log(_isAdmin);
                setIsAdmin(_isAdmin);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        checkIfAdmin();
    }, [signer])


    const addAdmin = async (address) => {
        try {
            if (contract && signer) {
                const addAdminTx = await contract.addAdmin(address);
                await addAdminTx.wait();
                console.log(addAdminTx);
                toast.success("Admin added successfully")
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='min-h-screen px-12 py-4 ml-[30%] mt-[12%]'>
            <h1 className="mt-1 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-100 mb-5 pb-5  ">Add an Admin</h1>
            <div className='flex gap-4'>
                <input type="text" className='max-w-[300px]' placeholder='Add Ethereum Address' />
                <button onClick={addAdmin()} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add Admin</button>
            </div>

        </div>
    )
}

export default AddAdminPage
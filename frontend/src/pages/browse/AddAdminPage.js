import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../components/contract/contract';
import { useContract, useSigner } from 'wagmi';


const AddAdminPage = () => {
    const [isAdmin,setIsAdmin] = useState(false);
    const [address, setAddress] = useState('')
    const { data: signer } = useSigner();
    const [status,setStatus] = useState('Add Admin');
    const [loading,setLoading] = useState(false)
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
        if(address === ''){
            toast.error('Address cannot be empty')
            return
        }
        setLoading(true);
        try {

            if (contract && signer && isAdmin) {
                setStatus('Adding Admin....')
                const addAdminTx = await contract.addAdmin(address);
                await addAdminTx.wait();
                console.log(addAdminTx);
                toast.success("Admin added successfully")
                setStatus('Add Admin')
                setAddress('')
            }
        } catch (err) {
            console.log(err);
        }
        setLoading(false)
    }

    if(!signer){
        return <div className='h-[90vh] w-screen flex items-center justify-center'>Please Connect to your metamask wallet</div>
    }
    
    if(!isAdmin){
        return <div className='h-[90vh] w-screen flex items-center justify-center'>You do not have the authority to add colleges . Please contact the admin at xyz@gmail.com</div>
    }

    return (
        <div className='min-h-[70vh] flex flex-col items-center justify-center'>
            <h1 className="mt-1 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-100 mb-5 pb-5  ">Add an Admin</h1>
            <div className='flex gap-4 w-full justify-center'>
                <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text" className='max-w-lg' placeholder='Add Ethereum Address' />
                <button disabled={loading} onClick={()=>addAdmin(address)} className="text-white disabled:from-green-400 disabled:via-green-500 disabled:to-green-600 bg-gradient-to-r whitespace-nowrap from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center">{status}</button>
            </div>

        </div>
    )
}

export default AddAdminPage
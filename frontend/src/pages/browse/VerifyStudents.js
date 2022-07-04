import React, { useEffect, useState } from 'react'
import { useContract, useSigner } from 'wagmi'
import Studentcard from '../../components/Studentcard'
import Verifycard from '../../components/Verifycard'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../components/contract/contract';
import Loader from '../../components/Loader';
import axios from 'axios'

const VerifyStudents = () => {
    const [loading, setLoading] = useState(false);
    const [filterBy, setFilterBy] = useState('name')
    const [isAdmin, setIsAdmin] = useState(false);
    const [allStudents, setAllStudents] = useState([]);
    const { data: signer } = useSigner();
    const [query, setQuery] = useState('');
    const [students, setStudents] = useState([]);

    const contract = useContract({
        addressOrName: CONTRACT_ADDRESS,
        contractInterface: CONTRACT_ABI,
        signerOrProvider: signer
    })

    const checkIfAdmin = async () => {

        try {
            if (contract && signer) {
                const _isAdmin = await contract.checkIfAdmin();
                setIsAdmin(_isAdmin);
            }
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        checkIfAdmin();
        getStudents();
    }, [signer])


    

    //function to get data
    const getStudents = async () => {
        // 'https://desidbbackend.herokuapp.com/api'
        const res = await axios.get('https://desidbbackend.herokuapp.com/api');
        const data = res.data;
        console.log(data);
        setStudents(data);
        console.log("Data received")
    }


    if (loading) {
        return <div className='h-[90vh] w-screen flex items-center justify-center'><Loader /></div>
    }

    if (!isAdmin) {
        return <div className='h-[90vh] w-screen flex items-center justify-center'>You do not have the permission to verify students, Please contact an admin</div>
    }

    return (
        <div className='min-h-screen px-12 py-4 '>
  
            <h1 className="mt-1 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-100 mb-5 pb-5  ">Verify Student Information</h1>
            <div className='flex gap-4'>
                <input type="text" className='max-w-[300px]' placeholder='Search by name' value={query} onChange={(e) => setQuery(e.target.value)} />
                <label className='flex items-center gap-4'>
                    Search By Name
                    <input type='radio' checked name='filterBy' value='name' onChange={(e => setFilterBy(e.target.value()))} className='h-5 w-5' />
                </label>
                <label className='flex items-center gap-4'>
                    Search By ID
                    <input type='radio' name='filterBy' value='id' className='h-5 w-5' />
                </label>
            </div>
            <div className="flex flex-wrap gap-8 py-8  ">

                {students.map((data) => (
                    <Verifycard key={data._id} data={data} />
                ))}


            </div>
        </div>

    )
}

export default VerifyStudents;

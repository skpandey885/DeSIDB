import React from 'react'
import { useState, useEffect } from 'react';
import Studentcard from '../components/Studentcard';
import { useContract, useSigner } from 'wagmi';
import { CONTRACT_ABI , CONTRACT_ADDRESS  } from '../components/contract/contract';
import Loader from '../components/Loader';
import { data } from 'autoprefixer';

const StudentIdHelper = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const [selectedStudent, setSelectedStudent] = useState([]);
    const { data: signer } = useSigner();
    const [query, setQuery] = useState('');

    const contract = useContract({
        addressOrName: CONTRACT_ADDRESS,
        contractInterface: CONTRACT_ABI,
        signerOrProvider: signer
      })

    const getStudentByID = async () => {
        setLoading(true);
        try {
            const _data = await contract.getStudentByID();
            console.log(_data);
           setData(_data);
        } catch (err) {
            console.log(err)
        }
        setLoading(false)
    }

    useEffect(() => {
        if (signer) {
          getStudentByID(query);
        }
      }, [signer])


    return (
        <div className='min-h-screen justify-center text-center  px-12 py-4 '>
            <h1 className='text-5xl mb-8 font-semibold '>Get Student By Id</h1>
            <div>
                <input type="number" pattern='(100[0-9]|10[1-9][0-9]|1[1-9][0-9]{2}|[2-9][0-9]{3})' className='max-w-[300px]' placeholder='Search By Id' value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div className="flex flex-wrap gap-8 py-8 justify-center text-center  ">
                {data ? <Studentcard data /> : 'No Student'}
            </div>
        </div>
    )
}

export default StudentIdHelper
import React, { useEffect, useState } from 'react'
import { useContract, useSigner } from 'wagmi'
import Studentcard from '../../components/Studentcard'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../components/contract/contract';
import Loader from '../../components/Loader';

const BrowseStudentPage = () => {
  const [loading, setLoading] = useState(false);
  const [allStudents, setAllStudents] = useState([]);
  const { data: signer } = useSigner();
  const [query, setQuery] = useState('');

  const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    signerOrProvider: signer
  })

  const getAllStudents = async () => {
    setLoading(true);
    try {
      const _data = await contract.getAllStudents();
      console.log(_data);
      setAllStudents(_data);
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (signer) {
      getAllStudents();
    }
  }, [signer])


  if (!signer) {
    return <div className='h-[90vh] w-screen flex items-center justify-center'>Pleae Connect to your metamask wallet</div>
  }

  if (loading) {
    return <div className='h-[90vh] w-screen flex items-center justify-center'><Loader /></div>
  }

  return (
    <div className='min-h-screen px-12 py-4 '>
      <h1 className='text-5xl  mb-8 font-semibold '>Browse Registered Students</h1>
      <div>
        <input type="text" className='max-w-[300px]' placeholder='Search by name' value={query} onChange={(e)=>setQuery(e.target.value)}/>
      </div>
      <div className="flex flex-wrap gap-8 py-8  ">
        {allStudents.filter((data) => (data.firstName+" "+ data.lastName).includes(query)).map(filteredStudent => <Studentcard data={filteredStudent} />)}
      </div>
    </div>

  )
}

export default BrowseStudentPage
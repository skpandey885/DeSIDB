import React, { useEffect, useState } from 'react'
import { useContract, useSigner } from 'wagmi'
import Collegecard from '../../components/Collegecard'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../components/contract/contract';
import Loader from '../../components/Loader';

const BrowseCollegesPage = () => {
  const [loading, setLoading] = useState(false);
  const [allColleges, setAllColleges] = useState([]);
  const { data: signer } = useSigner();
  const [query,setQuery] = useState('');

  const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    signerOrProvider: signer
  })

  const getAllColleges = async () => {
    setLoading(true);
    try {
      const _data = await contract.getAllColleges();
      console.log(_data);
      setAllColleges(_data);
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (signer) {
      getAllColleges();
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
      <h1 className='text-5xl  mb-8 font-semibold '>Browse Registered Colleges</h1>
      <div>
        <input type="text" className='max-w-[300px]' placeholder='Search by name' value={query} onChange={(e)=>setQuery(e.target.value)}/>
      </div>
        <div className="flex gap-6 flex-wrap pt-8">
          {allColleges.filter((data) => data.collegeName.includes(query)).map(filteredCollege => <Collegecard data={filteredCollege} />)}
        </div>
    </div>
  )
}

export default BrowseCollegesPage
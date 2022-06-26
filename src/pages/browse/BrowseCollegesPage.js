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
  const [filterBy,setFilterBy] = useState('name')

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
      <h1 className="mt-1 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-100 mb-5 pb-5  ">Browse Registered Colleges</h1>
      <div className='flex gap-4'>
        <input type="text" className='max-w-[300px]' placeholder='Search by name' value={query} onChange={(e)=>setQuery(e.target.value)}/> 
        <label className='flex items-center gap-4'>
          Search By Name 
        <input type='radio' checked name='filterBy' value='name' onChange={(e=>setFilterBy(e.target.value()))} className='h-5 w-5' />
        </label>
        <label className='flex items-center gap-4'>
          Search By ID 
        <input type='radio' name='filterBy' value='id'  className='h-5 w-5' />
        </label>
      </div>
        <div className="flex flex-wrap gap-8 py-8  ">
        {filterBy === 'name' && allColleges?.filter((data) => (data.collegeName).includes(query)).map(filteredCollege => <Collegecard key={filteredCollege.cid} data={filteredCollege} />)}
        {filterBy === 'id' && allColleges?.filter((data) => (data?.cid.toString()).includes(query)).map(filteredCollege => <Collegecard keu={filteredCollege.cid} data={filteredCollege} />)}
        </div>
    </div>
  )
}

export default BrowseCollegesPage
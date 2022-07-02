import React, { useEffect, useState } from 'react'
import { useContract, useSigner } from 'wagmi'
import Studentcard from '../../components/Studentcard'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../components/contract/contract';
import Loader from '../../components/Loader';

const BrowseStudentPage = () => {
  const [loading, setLoading] = useState(false);
  const [filterBy,setFilterBy] = useState('name')
  const [allStudents, setAllStudents] = useState([]);
  const [isAdmin,setIsAdmin] = useState(false);
  const { data: signer } = useSigner();
  const [query, setQuery] = useState('');

  const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    signerOrProvider: signer
  })

  const checkIfAdmin = async () =>{
    console.log("Inside check admin")
    try{
      if(contract && signer){
        const _isAdmin = await contract.checkIfAdmin();
        console.log(_isAdmin);
        setIsAdmin(_isAdmin);         
      }
    } catch(err){
      console.log(err);
    }
  } 

  useEffect(() => {
    checkIfAdmin();    
  }, [signer])
  

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
    return <div className='h-[90vh] w-screen flex items-center justify-center'>Please Connect to your metamask wallet</div>
  }
  
  if(!isAdmin){
    return <div className='h-[90vh] w-screen flex items-center justify-center'>You do not have the authority to view colleges . Please get admin access</div>
  }

  if (loading) {
    return <div className='h-[90vh] w-screen flex items-center justify-center'><Loader /></div>
  }


  return (
    <div className='min-h-screen px-12 py-4 '>
      <h1 className="mt-1 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-100 mb-5 pb-5  ">Browse Registered Students</h1>
      <div className='flex gap-4'>
        <input type="text" className='max-w-[300px]' placeholder='Search by name' value={query} onChange={(e)=>setQuery(e.target.value)}/> 
        <div>

        <select value={filterBy} onChange={(e)=>setFilterBy(e.target.value)} name='filterBy'>
           <option value="id">Filter by ID</option>
           <option value="name">Filter by name</option> 
        </select> 
        </div>
      </div>
      <div className="flex flex-wrap gap-8 py-8  ">
        {filterBy === 'name' && allStudents.filter((data) => (data.firstName+" "+ data.lastName).includes(query)).map(filteredStudent => <Studentcard key={filteredStudent.sid} data={filteredStudent} />)}
        {filterBy === 'id' && allStudents.filter((data) => (data?.sid.toString()).includes(query)).map(filteredStudent => <Studentcard key={filteredStudent.sid} data={filteredStudent} />)}
      </div>
    </div>

  )
}

export default BrowseStudentPage

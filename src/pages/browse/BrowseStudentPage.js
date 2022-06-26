import React, { useEffect, useState } from 'react'
import { useContract, useSigner } from 'wagmi'
import Studentcard from '../../components/Studentcard'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../components/contract/contract';
import Loader from '../../components/Loader';

const BrowseStudentPage = () => {
  const [loading, setLoading] = useState(false);
  const [allStudents, setAllStudents] = useState([]);
  const { data: signer } = useSigner();

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
    <div className='min-h-screen px-6 py-4 '>
      <h1 className='text-5xl ml-5 mb-20 font-semibold '>Registered Students</h1>
      <div className='ml-5'>
        <div className="flex gap-6 flex-wrap -m-2">
          {allStudents.map((data) => (
            <Studentcard data={data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrowseStudentPage
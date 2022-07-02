import React, { useEffect, useState } from 'react'
import { useAccount, useConnect, useContract, useSigner } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { HiCheckCircle } from 'react-icons/hi'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../contract/contract';

export const shortenAddress = (address) => {
  return address.slice(0, 6) + "..." + address.slice(-5, -1);
};


const ConnectWallet = () => {
  const [isAdmin,setIsAdmin] = useState(false);
  const {data:account} = useAccount();
  const {data:signer} = useSigner();
  const {connect} = useConnect({
    connector: new InjectedConnector()
  });
  
  const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    signerOrProvider:signer
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
  
  if(isAdmin){
    return (
      <div className='bg-green-50 inline-flex items-center gap-1 text-green-500  font-medium px-4 py-2 rounded cursor-pointer'>{shortenAddress(account.address)} <span>{<HiCheckCircle className='h-5 w-5'/>}</span></div> 
    );
  }

  if(account) {
    return(
      <div className='bg-blue-50 text-blue-500 font-medium px-4 py-2 rounded cursor-pointer'>{shortenAddress(account.address)}</div>
    )
  }
 
  return (
    <button onClick={connect} className='primary-btn'>Connect Wallet</button>
  )
}

export default ConnectWallet;
import React from 'react'
import { useAccount, useConnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
export const shortenAddress = (address) => {
  return address.slice(0, 6) + "..." + address.slice(-5, -1);
};
const ConnectWallet = () => {

const {data:account} = useAccount();
const {connect} = useConnect({
    connector: new InjectedConnector()
});

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
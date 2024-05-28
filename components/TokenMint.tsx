import React from 'react'

const TokenMint = () => {
  return (
    <div className='w-full flex justify-center p-10'>
    
        <form className='w-full flex flex-col items-center gap-8 p-8 border rounded-lg bg-blur-lg bg-slate-400 z-10' action="">
            <div className='w-[60%] flex flex-col items-center gap-2'>
                <label htmlFor="token-mint-pubKey" className='text-black font-bold text-lg'>Token Mint:</label>
                <input id='token-mint-pubKey' type="text" className='w-full bg-gray-800 text-white px-4 py-2 rounded' placeholder='Enter Token Mint' />
            </div>
            <div className='w-[60%] flex flex-col items-center gap-2'>
                <label htmlFor="recipient-mint" className='text-black font-bold text-lg'>Recipient:</label>
                <input id='recipient-mint' type="text" className='w-full bg-gray-800 text-white px-4 py-2 rounded' placeholder='Enter Recipient Publickey (Address)' />
            </div>
            <div className='w-[60%] flex flex-col items-center gap-2'>
                <label htmlFor="amount-tokens" className='text-black font-bold text-lg'>Amount of Tokens to Mint:</label>
                <input id='amount-tokens' type="number" className='w-full bg-gray-800 text-white px-4 py-2 rounded' placeholder='e.g. 100' />
            </div>
            <button className='w-[20%] bg-gray-500 text-white px-4 py-2 rounded hover:bg-green-600' type="submit">Mint Tokens</button>
        </form>
    </div>
  )
}

export default TokenMint
import React from 'react'
import { createMint } from "@solana/spl-token";
import "dotenv/config";
import { getKeypairFromEnvironment, getExplorerLink, } from "@solana-developers/helpers";
import { Connection, clusterApiUrl } from "@solana/web3.js";
const connection = new Connection(clusterApiUrl("devnet"));

const user = getKeypairFromEnvironment("SECRET_KEY");


const CreateTokenAcc = () => {
    return (
        <div className='w-full flex justify-center p-10'>
                         
            <svg className='absolute top-0 left-0 w-full h-full z-0' viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 50 Q 25 10, 50 50 T 100 50" fill="transparent" stroke="white" strokeWidth="0.2">
                    <animate attributeName="stroke-dasharray" values="0, 100; 50, 50; 0, 100" dur="15s" repeatCount="indefinite" />
                    <animate attributeName="stroke-dashoffset" values="0; -50; -100" dur="15s" repeatCount="indefinite" /> 
                </path>
                <path d="M0 60 Q 25 20, 50 60 T 100 60" fill="transparent" stroke="lightblue" strokeWidth="0.4">
                    <animate attributeName="stroke-dasharray" values="0, 100; 50, 50; 0, 100" dur="20s" repeatCount="indefinite" />
                    <animate attributeName="stroke-dashoffset" values="0; -50; -100" dur="20s" repeatCount="indefinite" />
                </path>
            </svg>
            
            <form className='w-full flex flex-col items-center gap-8 p-8 border rounded-lg bg-blur-lg bg-slate-400 z-10' action="">
                <div className='w-[60%] flex flex-col items-center gap-2'>
                    <label htmlFor="token-mint-pubKey" className='text-black font-bold text-lg'>Token Mint:</label>
                    <input id='token-mint-pubKey' type="text" className='w-full bg-gray-800 text-white px-4 py-2 rounded' placeholder='Enter Token Mint' />
                </div>
                <div className='w-[60%] flex flex-col items-center gap-2'>
                    <label htmlFor="token-acc-owner" className='text-black font-bold text-lg'>Token Account Owner:</label>
                    <input id='token-acc-owner' type="text" className='w-full bg-gray-800 text-white px-4 py-2 rounded' placeholder='Enter Token Account Owner Publickey (Address)' />
                </div>
                <button className='w-[20%] bg-gray-500 text-white px-4 py-2 rounded hover:bg-green-600' type="submit">Create Token Account</button>
            </form>
        </div>
    )
}

export default CreateTokenAcc
import React from 'react'
import { createMint } from "@solana/spl-token";
import "dotenv/config";
import { getKeypairFromEnvironment, getExplorerLink, } from "@solana-developers/helpers";
import { Connection, clusterApiUrl } from "@solana/web3.js";
const connection = new Connection(clusterApiUrl("devnet"));

const user = getKeypairFromEnvironment("SECRET_KEY");


const CreateMint = () => {
    return (
        <div className='w-full flex justify-center p-10 '>
            <form className='w-full flex flex-col items-center justify-center gap-4 p-8 border rounded-lg bg-blur-lg bg-slate-400 z-10' action="">
                <p>{`Sol Balance: 1 ◎`}</p>
                <button className='w-[20%] bg-gray-500 text-white px-4 py-2 rounded hover:bg-green-600' type="submit">Create Mint</button>
            </form>
        </div>
    )
}

export default CreateMint
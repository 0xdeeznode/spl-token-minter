'use client';
import React, { useState } from 'react';
import { createMint } from "@solana/spl-token";
import "dotenv/config";
import { getKeypairFromEnvironment, getExplorerLink } from "@solana-developers/helpers";
import { Connection, clusterApiUrl } from "@solana/web3.js";


const CreateMint = () => {
    const connection = new Connection(clusterApiUrl("devnet"));
    const user = getKeypairFromEnvironment("SECRET_KEY");
    const [link, setLink] = useState('');

    const mintAccount = async () => {
        try {
            const tokenMint = await createMint(connection, user, user.publicKey, null, 8);
            const mintLink = getExplorerLink("address", tokenMint.toString(), "devnet");
            setLink(mintLink);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='w-full flex justify-center p-10 '>
            <form className='w-full flex flex-col items-center justify-center gap-4 p-8 border rounded-lg bg-blur-lg bg-slate-400 z-10' action="">
                <p>{`Sol Balance: 1 ◎`}</p>
                <button className='w-[20%] bg-gray-500 text-white px-4 py-2 rounded hover:bg-green-600' type="button" onClick={mintAccount}>Create Mint</button>
                {link && (
                    <div>
                        <a target="_blank" href={link}>{link}</a>
                    </div>
                )}
            </form>
        </div>
    );
};


export default CreateMint;

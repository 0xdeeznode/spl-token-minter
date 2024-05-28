'use client';
import React, { useState } from 'react';

const CreateMint = () => {
    const [link, setLink] = useState('');

    const mintAccount = async () => {
        try {
            const response = await fetch('/api/createMintData', {
                method: 'POST',
            });
            const data = await response.json();
            if (response.ok) {
                const mintLink = `https://explorer.solana.com/address/${data.tokenMint}?cluster=devnet`;
                setLink(mintLink);
            } else {
                console.error('Failed to create mint:', data.error);
            }
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

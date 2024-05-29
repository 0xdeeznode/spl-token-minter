'use client';
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { FC, useState } from "react";
import styles from "../styles/Home.module.css";
import {
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
  getMinimumBalanceForRentExemptMint,
  createInitializeMintInstruction,
} from "@solana/spl-token";

const CreateMintForm: FC = () => {
    const [txSig, setTxSig] = useState("");
    const [mint, setMint] = useState("");
    
    const { connection } = useConnection();
    const { publicKey } = useWallet();

    return (
        <div className='w-full flex justify-center p-10 '>
            <form className='w-full flex flex-col items-center justify-center gap-4 p-8 border rounded-lg bg-blur-lg bg-slate-400 z-10' action="">
                <p>{`Sol Balance: 1 ◎`}</p>
                <button className='w-[20%] bg-gray-500 text-white px-4 py-2 rounded hover:bg-green-600' type="button">Create Mint</button>
            </form>
        </div>
    );
};

export default CreateMintForm;

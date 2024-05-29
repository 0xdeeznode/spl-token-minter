import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Navbar: FC = () => {
    return (
        <nav className='w-full flex justify-between text-white z-50'>
            <ul className='w-full flex items-center justify-between py-4 px-10'>
                <li>
                    <Link className='flex items-center gap-4' href="/">
                        <Image 
                            src="/sol-logo.png" 
                            alt="Solana Logo" 
                            width={40}
                            height={40}
                        />
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <span>Solana SPL-TOKEN Generator</span>    
                </li>
                <li>
                    <WalletMultiButton />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className='w-full flex justify-between text-white'>
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
                    <p>Solana SPL-TOKEN Generator</p>    
                </li>
                <li>
                    <Link href="/contact">
                        <p>Contact</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
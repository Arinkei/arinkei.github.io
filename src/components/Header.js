import Image from 'next/image';
import Link from 'next/link'

export default function Header() {
    return (
        <div className="flex justify-center bg-white w-screen h-20 sticky">
            <nav className='flex items-center justify-end gap-8'>
                <Link className='flex items-center' href="/">Home</Link>
                <Link className='flex items-center' href="/about">About</Link>
                <Link className='flex items-center' href="/projects">Projects</Link>
            </nav>
        </div>
    );    
}

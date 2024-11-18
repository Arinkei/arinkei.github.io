import Image from 'next/image';

export default function Header() {
    return (
        <div className="flex item-center justify-center gap-6 bg-white w-screen h-20">
            <Image
                className="dark:invert" 
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority>
            </Image>
        </div>
    )    
}

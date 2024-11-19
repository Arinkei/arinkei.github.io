import Image from 'next/image';

export default function AboutPage(){
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div className="flex justify-center gap-10 items-center min-w-96 min-h-96 bg-white bg-opacity-60 m-16 ">
                <Image
                    src="/images/mypicture.jpg"
                    className="flex justify-start"
                    alt="mypicture img"
                    width={200}
                    height={200}
                    unoptimized>
                </Image>
                <ol className='list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
                    <li className="mb-2">이름 : 옴바</li>
                    <li className="mb-2">나이 : 52</li>
                    <li className="mb-2">사는 곳 : 울산</li>
                    
                </ol>
                </div>
        </main>
    );
}
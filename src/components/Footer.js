import Image from 'next/image';

export default function Footer() {
    return (
      <div className="flex item-center justify-center gap-6 bg-white w-screen h-20">
        <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://discord.com"
        target="_blank"
        rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/discord.svg"
            alt="discord icon"
            width={16}
            height={16}
          />
        Discord
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/arinkei"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/github.svg"
          alt="github icon"
          width={16}
          height={16}
        />
        Github
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://instagram.com/ohmbada"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/instagram.svg"
          alt="instagram icon"
          width={16}
          height={16}
        />
        Instagram
      </a>
    </div>
  );
}

import Image from 'next/image'

export function Footer() {
  return (
    <footer className="mt-auto flex w-full items-center justify-center gap-4 py-12">
      <div className="overflow-hidden rounded">
        <Image
          src="https://github.com/rodrigomsrocha.png"
          width={40}
          height={40}
          alt="Profile picture from github"
        />
      </div>
      <span>
        Personal blog by{' '}
        <a
          target="__blank"
          className="font-bold text-rosePineDawn-iris underline dark:text-rosePineMoon-iris"
          href="https://rod-portfolio.vercel.app"
        >
          Rodrigo M.
        </a>
      </span>
    </footer>
  )
}

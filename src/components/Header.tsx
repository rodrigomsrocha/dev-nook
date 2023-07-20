import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="flex items-center justify-between py-12">
      <Link href="/" className="flex gap-1 font-alt text-4xl">
        <strong className="flex min-h-[2.5rem] min-w-[2.5rem] items-center justify-center rounded bg-rosePineDawn-highlightMed text-rosePineDawn-iris dark:bg-rosePineMoon-highlightMed dark:text-rosePineMoon-iris">
          D
        </strong>
        <span className="hidden sm:block">evnook</span>
      </Link>
      <ThemeToggle />
    </header>
  )
}

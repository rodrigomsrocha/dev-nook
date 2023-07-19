import { LuCalendar, LuClock } from 'react-icons/lu'

export function PostItem() {
  return (
    <div className="space-y-2 text-rosePineDawn-subtle dark:text-rosePineMoon-subtle">
      <h1 className="font-alt text-2xl font-bold text-rosePineDawn-iris dark:text-rosePineMoon-iris">
        Introduction to Web Development: HTML, CSS, and JavaScript Basics
      </h1>
      <p>
        In this blog post, we will embark on an exciting journey into the world
        of web development, where we&apos;ll explore the fundamental building
        blocks of the web - HTML, CSS, and JavaScript.
      </p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <LuCalendar />
          <time>Jul 19, 2023</time>
        </div>
        <div className="flex items-center gap-2">
          <LuClock />
          <span>5 min read</span>
        </div>
      </div>
    </div>
  )
}

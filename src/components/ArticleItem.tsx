import { formatDate } from '@/utils/formatDate'
import { getReadingTime } from '@/utils/getReadingTime'
import Link from 'next/link'
import { LuCalendar, LuClock } from 'react-icons/lu'

interface ArticleItemProps {
  article: {
    title: string
    description: string
    published_at: string
    slug: string
    raw: string
  }
}

export function ArticleItem({ article }: ArticleItemProps) {
  return (
    <div className="space-y-2 text-rosePineDawn-subtle dark:text-rosePineMoon-subtle">
      <Link
        href={article.slug}
        className="font-alt text-2xl font-bold text-rosePineDawn-iris dark:text-rosePineMoon-iris"
      >
        {article.title}
      </Link>
      <p className="line-clamp-3 sm:line-clamp-none">{article.description}</p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <LuCalendar />
          <time>{formatDate(article.published_at)}</time>
        </div>
        <div className="flex items-center gap-2">
          <LuClock />
          <span>{getReadingTime(article.raw.length)} min read</span>
        </div>
      </div>
    </div>
  )
}

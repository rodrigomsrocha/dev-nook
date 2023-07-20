import { allArticles } from '.contentlayer/generated'
import { ArticleItem } from '@/components/ArticleItem'
import { compareDesc } from 'date-fns'

export default function Home() {
  const articles = allArticles
    .sort((a, b) =>
      compareDesc(new Date(a.published_at), new Date(b.published_at)),
    )
    .map((article) => {
      return {
        ...article,
        raw: article.body.raw,
      }
    })

  return (
    <article className="space-y-8">
      {articles.map((article) => {
        return <ArticleItem key={article._id} article={article} />
      })}
    </article>
  )
}

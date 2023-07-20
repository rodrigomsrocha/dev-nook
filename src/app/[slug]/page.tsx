import { allArticles } from '.contentlayer/generated'
import { notFound } from 'next/navigation'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { LuChevronLeft } from 'react-icons/lu'
import Link from 'next/link'
import Image from 'next/image'

interface ArticleProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article._raw.flattenedPath,
  }))
}

export default async function Article({ params }: ArticleProps) {
  const article = allArticles.find(
    (article) => article._raw.flattenedPath === params.slug,
  )

  if (!article) notFound()

  const ArticleComponent = getMDXComponent(article.body.code)

  return (
    <div className="flex flex-col">
      <h1 className="mb-4 font-alt text-3xl font-bold text-rosePineDawn-iris dark:text-rosePineMoon-iris">
        {article.title}
      </h1>
      {article.cover_url && (
        <div className="relative mb-8 h-72 w-full overflow-hidden rounded">
          <Image
            src={article.cover_url}
            alt={article.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <article className="prose prose-rosePine dark:prose-invert">
        <ArticleComponent />
      </article>
    </div>
  )
}

import { allArticles } from '.contentlayer/generated'
import { notFound } from 'next/navigation'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { LuChevronLeft } from 'react-icons/lu'
import Link from 'next/link'

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
      <header className="mb-8 flex items-center gap-2">
        <Link href="/" className="block text-3xl">
          <LuChevronLeft />
        </Link>
        <h1 className="font-alt text-3xl font-bold text-rosePineDawn-iris">
          {article.title}
        </h1>
      </header>
      <article className="prose prose-rosePine dark:prose-invert">
        <ArticleComponent />
      </article>
    </div>
  )
}

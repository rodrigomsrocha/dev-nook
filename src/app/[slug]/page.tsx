import { allArticles } from '.contentlayer/generated'
import { notFound } from 'next/navigation'
import { getMDXComponent } from 'next-contentlayer/hooks'

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
    <div className="prose prose-rosePine dark:prose-invert prose-h1:text-rosePineDawn-iris dark:prose-h1:text-rosePineMoon-iris">
      <ArticleComponent />
    </div>
  )
}

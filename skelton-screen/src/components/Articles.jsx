import React, { useEffect, useState } from 'react'
import SkeletonArticle from '../skeletons/SkeletonArticle'

export default function Articles() {

  const [articles, setArticles] = useState(null)

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      setArticles(data)
    }, 3000)
  }, [])

  console.log(articles)

  return (
    <div>
      <h2>Articles</h2>

      {articles && articles.map(article => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </div>
      ))}

      {!articles && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => <SkeletonArticle
        key={n}/>)}
    </div>
  )
}

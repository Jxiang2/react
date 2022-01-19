import React, { useState, useEffect, useRef } from 'react';

export default function Articles() {

  const [articles, setArticles] = useState(null)
  const currentArticles = useRef(articles).current

  useEffect(()=>{
    setTimeout(async()=>{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      setArticles(data)
    }, 1500)
  }, [currentArticles])


  return (
    <div className='articles'>
        <h2>Articles</h2>

        {articles && articles.map(article => (
          <div className='article' key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}

        {!articles && <div>loading...</div>}
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'

// hooks
import { useFetch } from '../hooks/useFetch'

// styles
import '../styles/StarWidget.css'

const fiveStarList = [
  {
    rating: 1,
    previewRating: 1,
  },
  {
    rating: 2,
    previewRating: 2,
  },
  {
    rating: 3,
    previewRating: 3,
  },
  {
    rating: 4,
    previewRating: 4,
  },
  {
    rating: 5,
    previewRating: 5,
  },
]

export default function StarWidget({ product, url }) {

  const ratingUrl = url + '/' + product.id
  const [rating, setRating] = useState(product.rating)
  const [previewRating, setPreviewRating] = useState(0)

  const { patchData } = useFetch(ratingUrl, 'PATCH')
  const patchDataFunction = useRef(patchData).current

  useEffect(() => {
    const updateRating = () => {
      patchDataFunction({
        rating: rating,
      })
    }
    // console.log('productID:',product.id, 'rating:',rating)
    updateRating()
  }, [product.id, rating, patchDataFunction])

  return (
    <div className="widget">
      {fiveStarList.map((item, index) => {
        return (
          <div key={index}
               onClick={() => setRating(item.rating)}
               onMouseOver={() => setPreviewRating(item.previewRating)}
               onMouseLeave={() => setPreviewRating(0)}>
            {rating >= item.rating ? <div>★</div> :
              (previewRating >= item.previewRating ? <div className="greyStar">★</div> :
                <div>☆</div>)}
          </div>)
      })}
    </div>
  )
}

// components
// styles
import '../styles/Product.css'
import StarWidget from './StarWidget'

export default function Product({ product, url }) {
  return (
    <div>
      {product && product.title}
      <StarWidget product={product} url={url}/>
    </div>
  )
}

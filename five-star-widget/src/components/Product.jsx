// components
import StarWidget from "./StarWidget"

// styles
import '../styles/Product.css'

export default function Product({ product, url }) {
  return (
    <div>
      {product && product.title}
      <StarWidget product={product} url={url}/>
    </div>
  )
}

// components
import Product from "./components/Product";

// hooks
import { useFetch } from "./hooks/useFetch";

function App() {
  const url = "http://localhost:8000/products";
  const { data: products, error, isPending } = useFetch(url);

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {products &&
        products.map((product) => (
          <div key={product.id} style={{ margin: "20px auto" }}>
            <Product product={product} url={url} />
          </div>
        ))}
    </div>
  );
}

export default App;

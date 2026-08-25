import { Link } from "react-router-dom";
function Products({ product }) {
  return (
    <div className="products">
      {product.map((products) => (
        <div key={products.id}>
          <p>{products.name}</p>
          <p>{products.description}</p>
          <p>Price: ${products.price}</p>
          <div className="buttons">
            <Link to={`/products/${products.id}`}>View</Link>
            <Link to={`/products/${products.id}/edit`}>Edit</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
[];

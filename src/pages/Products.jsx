function Products({product}) {
    return(
           <div className="products">
            {product.map((products) => (
                <p key={product.id}>{products}</p>
            ))}
        </div>
    )

}

export default Products;[]
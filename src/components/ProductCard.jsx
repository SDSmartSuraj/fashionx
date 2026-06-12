function ProductCard({ product }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        overflow: "hidden",
        transition: "0.3s",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "20px" }}>
        <h3>{product.name}</h3>

        <p
          style={{
            margin: "10px 0",
            fontWeight: "bold",
          }}
        >
          ₹{product.price}
        </p>

        <button
          style={{
            width: "100%",
            padding: "12px",
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
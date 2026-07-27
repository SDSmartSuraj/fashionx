import { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    oldPrice: "",
    image: "",
    category: "",
    rating: "",
    badge: "",
  });

  const fetchProducts = async () => {
    const { data } = await axios.get(
  "https://fashionx-u0u9.onrender.com/api/products"
);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      "https://fashionx-u0u9.onrender.com/api/products",
      form
    );

    alert("Product Added");

    setForm({
      name: "",
      price: "",
      oldPrice: "",
      image: "",
      category: "",
      rating: "",
      badge: "",
    });

    fetchProducts();
  };

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 mb-10"
      >
        <input
          placeholder="Name"
          className="border p-3 w-full"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="Price"
          className="border p-3 w-full"
          onChange={(e) =>
            setForm({
              ...form,
              price: e.target.value,
            })
          }
        />

        <input
          placeholder="Image URL"
          className="border p-3 w-full"
          onChange={(e) =>
            setForm({
              ...form,
              image: e.target.value,
            })
          }
        />

        <button className="bg-black text-white px-8 py-3 rounded-xl">
          Add Product
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">
        Products
      </h2>

      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="flex justify-between items-center border p-4 rounded-xl"
          >
            <div>
              <h3 className="font-bold">
                {product.name}
              </h3>

              <p>₹{product.price}</p>
            </div>

           <div className="flex gap-3">
  <button
  onClick={async () => {
    const newName = prompt(
      "Enter New Product Name",
      product.name
    );

    if (!newName) return;

    await axios.put(
      `https://fashionx-u0u9.onrender.com/api/products/${product._id}`,
      {
        ...product,
        name: newName,
      }
    );

    fetchProducts();
  }}
  className="bg-blue-500 text-white px-4 py-2 rounded"
>
  Edit
</button>

  <button
    onClick={async () => {
      await axios.delete(
        `https://fashionx-u0u9.onrender.com/api/products/${product._id}`
      );

      fetchProducts();
    }}
    className="bg-red-500 text-white px-4 py-2 rounded"
  >
    Delete
  </button>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
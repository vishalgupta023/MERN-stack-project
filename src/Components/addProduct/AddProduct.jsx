import React, { useState } from "react";
import "./addproduct.css";

function Form() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const id=JSON.parse(localStorage.getItem("users"))._id;
    let result=await fetch("http://localhost:5000/add-product",{
        method:"Post",
        body: JSON.stringify({
            name:product,
            price:price,
            category:category,
            userId:id,
            company:company
        }),
        headers:{"Content-Type":"application/json"}
    })
    result=await result.json();
    console.log(result)
     
  };

  return (
    <form className="my-form" onSubmit={handleSubmit}>
        <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <button type="submit">Submit Product</button>
    </form>
  );
}

export default Form;

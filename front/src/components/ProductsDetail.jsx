import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProductsDetail = () => {
  const [productDetail, setProductDetail] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getApiProducts();
  }, []);

  const getApiProducts = async () => {
    let response = await fetch(`http://localhost:5000/api/products/${id}`);
    let data = await response.json();
    console.log(data);
    setProductDetail(data);
  };

  return (
    <section className="product-detail">
      <figure className="product-detail-image">
        <img
          src={`http://localhost:5000${productDetail.image}`}
          alt={productDetail.name}
        />
      </figure>
      <h2>{productDetail.name}</h2>
      <h3>{productDetail.brand}</h3>
      <h3>{productDetail.category}</h3>
      <h4>{productDetail.countInStock}</h4>
      <p>{productDetail.description}</p>
      <p>{productDetail.numReviews}</p>
      <p>{productDetail.price}</p>
      <p>{productDetail.rating}</p>

      <style jsx>{``}</style>
    </section>
  );
};

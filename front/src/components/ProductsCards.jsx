import React from "react";

export const ProductsCards = ({ image, name, brand, price }) => {
  return (
    <article className="product-card flex-column scale">
      <figure className="product-card-image">
        <img src={`http://localhost:5000${image}`} alt={name} />
      </figure>

      <div className="flex-gap">
        <span className="fas fa-box"></span>
        <h2 className="product-card-name margin-bottom-8">{name}</h2>
      </div>
      <div className="flex-gap">
        <span className="fas fa-tag"></span>
        <p className="product-card-brand margin-bottom-8">{brand}</p>
      </div>
      <div className="flex-gap">
        <span className="fas fa-hand-holding-usd"></span>
        <h3 className="product-card-price margin-bottom-8">$ {price}</h3>
      </div>
      <style jsx>{`
        .product-card {
          width: 100%;
          max-width: 320px;
          height: 400px;
          background-color: var(--white);
          border-radius: 10px;
          padding: 14px;
          font-family: var(--font-sans-serif);
          font-size: 1.6rem;
          color: var(--hover-gray);
        }
        .product-card-image {
          width: 260px;
          height: 220px;
          margin: 15px auto;
        }
        .product-card-name {
          font-weight: var(--bold);
          font-size: var(--card-name);
          color: var(--black);
        }
        .product-card-brand {
          font-weight: var(--light);
          font-size: var(--card-brand);
          color: var(--black);
        }
        .product-card-price {
          font-family: var(--font-display);
          font-size: var(--card-price);
          font-weight: var(--bold);
          color: var(--black);
        }
      `}</style>
    </article>
  );
};

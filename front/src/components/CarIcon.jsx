import React from "react";

export const CarIcon = ({ counter }) => {
  return (
    <div className="car-item flex-center">
      <h3 className="car-item-number">{counter}</h3>
      <span className="fas fa-shopping-bag"></span>
      <style jsx>{`
        .car-item {
          position: relative;
          width: 40px;
          height: 40px;
          background-color: var(--white);
          border-radius: 10px;
          font-size: 3rem;
          transition: all .8s ease;
        }
        .car-item:hover {
            color: var(--hover-gray);
            transform: scale(1.2);
        }
        .car-item-number {
          color: var(--black);
          font-size: 2.4rem;
          right: -2px;
          top: -18px;
          position: absolute;}
        }
      `}</style>
    </div>
  );
};

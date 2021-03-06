import React from "react";
import { Products } from "../Products/Products";

const ProductPane = ({ products, setSelected, selected }) => {
  let product = [];
  for (let key in products) {
    product = [
      ...product,
      <Products
        products={products[key]}
        setSelected={(val) => setSelected(val)}
        selected={selected}
      />,
    ];
  }
  const clickHandler = (e) => {
    setSelected(null);
    e.stopPropagation();
  };

  return (
    <div
      className="w-3/4 pl-4 overflow-y-scroll overflow-x-hidden scrollbar-hide max-h-screen max-w-screen "
      onClick={(e) => {
        clickHandler(e);
      }}
    >
      <p className="text-4xl font-bold mb-5">Edvora</p>
      <p className="text-2xl font-medium opacity-50 mb-4">Products</p>
      {product}
    </div>
  );
};

export default ProductPane;

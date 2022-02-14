import React from "react";
import { Product } from "./Product/Product";
export const Products = ({ products, setSelected, selected }) => {
  let elements = products.map((val) => (
    <Product
      product={val}
      setSelected={(val) => setSelected(val)}
      selected={selected}
    />
  ));
  return (
    <div className="mb-8">
      <p className="text-lg">{products[0].product_name}</p>
      <hr className="mb-2" />
      <div className="w-inherit p-3 flex flex-row overflow-hidden bg-secondary rounded-[1.1rem]">
        <div className="productDiv w-inherit min-w-full flex flex-row overflow-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-slate-300 ">
          {elements}
        </div>
      </div>
    </div>
  );
};

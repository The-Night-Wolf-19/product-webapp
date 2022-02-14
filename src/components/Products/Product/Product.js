import React, { useRef } from "react";

export const Product = ({ product }) => {
  const clickHandler = (e) => {
    console.log(e);
    // let sel = null;
    // sel = document.getElementsByClassName(`hover\\:scale-110:hover`);
    // console.log(sel);
  };
  let eleRef = useRef(null);
  return (
    <div
      className="bg-primary rounded-md p-2 mr-6 mb-4 w-fit min-w-[30%] max-w-[30%] h-auto overflow-hidden transition-transform hover:scale-110 focus:scale-110"
      onClick={(e) => {
        eleRef.current.classList.add("scale-110");
        console.log(eleRef.current);
        clickHandler(e);
      }}
      ref={eleRef}
    >
      <div className=" flex flex-column min-h-[60%] mb-2">
        <div className="max-width-1/3 w-1/3 h-auto rounded-md overflow-hidden">
          <img src={product.image} className="object-cover" alt="" />
        </div>
        <div className="pl-4 ">
          <p className="mb-1">{product.product_name}</p>
          <p className="mb-1 opacity-60 text-sm">{product.brand_name}</p>
          <p>$&nbsp;{product.price}</p>
        </div>
      </div>
      <div className="flex flex-column justify-between mb-1">
        <p className="opacity-60 text-sm">
          {product.address.city},&nbsp;{product.address.state}
        </p>
        <p className="opacity-60 text-sm">{product.date.slice(0, 10)}</p>
      </div>
      <p className="opacity-60 text-sm">{product.discription}</p>
    </div>
  );
};

import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
export const Product = ({ products }) => {
  const [drop, setDrop] = useState(false);
  const clickHandler = () => {
    setDrop(!drop);
  };
  let elements = [];
  for (let key in products) {
    elements = [...elements, <p>{key}</p>];
  }

  return (
    <div className="max-h-44 mb-3 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300">
      <div
        className="mb-3 flex flex-row sticky top-0 justify-between bg-primary p-2 rounded-lg"
        onClick={() => clickHandler()}
      >
        <p>Products</p>
        <ChevronDownIcon className=" h-7 w-6" />
      </div>
      {drop ? <div className="bg-secondary pl-2">{elements}</div> : ""}
    </div>
  );
};

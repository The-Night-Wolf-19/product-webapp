import React from "react";
import { City } from "./City/City";
import { Product } from "./Product/Product";
import { State } from "./State/State";
const Filter = ({ products, city, state }) => {
  return (
    <div className="w-1/4 p-2 pr-4 ">
      <div className="p-3 pr-6 bg-secondary rounded-[1.1rem] max-h-full overflow-auto scrollbar-hide">
        <div className="mb-6">
          <p className="text-xl text-[#A5A5A5]">Filters</p>
          <hr className=" text-[#A5A5A5] opacity-75" />
        </div>
        <div className="max-h-full overflow-auto scrollbar-hide">
          <Product products={products} />
          <State state={state} />
          <City city={city} />
        </div>
      </div>
    </div>
  );
};

export default Filter;

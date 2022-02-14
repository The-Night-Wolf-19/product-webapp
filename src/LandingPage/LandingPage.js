import React, { useState, useEffect, useRef } from "react";
import Filter from "../components/Filter/Filter";
import ProductPane from "../components/ProductPane/ProductPane";

const axios = require("axios");
const LandingPage = () => {
  const [data, setData] = useState(null);
  const [product, setProduct] = useState({});
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(
          "https://assessment-edvora.herokuapp.com"
        );

        if (response.status === 200) {
          console.log(response.data, "got data");
          if (response.data !== null) setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (data != null) {
      let pro = {};
      let sta = [];
      let cit = [];
      for (let ele of data) {
        let p = ele.product_name;
        let s = ele.address.state;
        let c = ele.address.city;
        if (p in pro) {
          pro[p].push(ele);
        } else pro = { ...pro, [p]: [ele] };
        if (!sta.includes(s)) sta = [...sta, s];
        if (!cit.includes(c)) cit = [...cit, c];
      }
      console.log(pro);
      setProduct(pro);
      setCity(cit);
      setState(sta);
    }
  }, [data]);

  return (
    <div className="flex flex-column p-8 w-screen h-screen">
      <Filter products={product} city={city} state={state} />
      <ProductPane products={product} setSelected={(val) => setSelected(val)} />
    </div>
  );
};

export default LandingPage;

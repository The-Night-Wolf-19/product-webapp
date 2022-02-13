import React, { useState, useEffect } from "react";

const axios = require("axios");
const LandingPage = () => {
  const [data, setData] = useState(null);
  const [product, setProduct] = useState({});
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
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
      setProduct(pro);
      setCity(cit);
      setState(sta);
    }
  }, [data]);

  return (
    <div>
      <div>LandingPage</div>
    </div>
  );
};

export default LandingPage;

import React from "react";
import Product from "./product";

const ProdudctList = (props) => {
  console.log("yeh", props);
  return props.ProdudctList.map((product, i) => {
    return <Product product={product} key={i} />;
  });
};

export default ProdudctList;

import React from "react";
import Produdct from "./product";
import ProdudctList from "./productList";

const MyShopping = () => {
  const product = [
    {
      price: 999,
      name: "mi4",
      quantity: 2
    },
    {
      price: 999,
      name: "mi4",
      quantity: 2
    },
    {
      price: 999,
      name: "mi4",
      quantity: 2
    }
  ];
  return (
    <>
      <main className="container">
        <ProdudctList products={product} />
      </main>
    </>
  );
};

export default MyShopping;

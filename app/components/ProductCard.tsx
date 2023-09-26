// 'use client'

import React from "react";
import AddToCart from "./AddToCart";

// server side component, cannot pass a handleClick into here

const ProductCard = () => {
  return (
    <div>
      <AddToCart />
    </div>
  );
};

export default ProductCard;

import React, { useContext, useEffect } from "react";

import { useParams } from "react-router-dom";

import { ShopContext } from "../context/shopContenxt";

const ProductPage = () => {
  const { handle } = useParams();

  const { fetchProductWithHandle, addItemToCheckout, product } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) return <div>Loading...{handle}</div>;

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductPage;

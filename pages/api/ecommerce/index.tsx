import React from "react";

const apiUrl = "https://fakestoreapi.com";

export const getProduct = async () => {
  try {
    const response = await fetch(apiUrl + "/products").then((res) =>
      res.json()
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

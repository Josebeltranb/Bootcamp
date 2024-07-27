"use client";

import {useState} from "react";

export default function Lab1Page() {
  const [count] = useState(10000);
  const [products] = useState(
    [{ name: 'Tablet', price: 100 }, { name: 'Computador', price: 1000 }]
  );
  const [coupon] = useState("hola mundo");

  return (
    <div className="App">
      <span>conteo: {count}</span>
      <ul>
        {products.map(product => <li>name: {product.name}, price: {product.price}</li>)}
      </ul>
      <span>coupon: {coupon}</span>
    </div>
  );
}
"use client";

import {useState} from "react";

export default function Lab2Page() {

  let [count, setCount] = useState(0);
  let [products, setProduct] = useState([{ name: 'plato', price: 100 }]);
  let [coupon, setCoupon] = useState("hola mundo");

  const addCount = () => setCount(count + 1);
  const addProduct = () => setProduct(
    [{ name: 'Tablet', price: 100 }, { name: 'Computador', price: 1000 }]
  );
  const addCoupon = () => setCoupon("0123456789abcde");

  return (
    <div className="App">
      <span>conteo: {count}</span>
      <ul>
        {products.map(product => <li>name: {product.name}, price: {product.price}</li>)}
      </ul>
      <span>coupon: {coupon}</span><br/>
      <hr />
      <h2>Agregando elementos</h2>
      <span>adicionar al conteo</span> <button onClick={() => addCount()}>Adicionar +1</button><br />
      <span>adicionar producto</span> <button onClick={() => addProduct()}>Adicionar una sola vez</button><br />
      <span>adicionar cupon</span> <button onClick={() => addCoupon()}>Adicionar cupon una vez</button><br />

    </div>
  );
}
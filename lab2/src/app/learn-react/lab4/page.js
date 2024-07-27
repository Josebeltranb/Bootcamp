"use client";

import {useState} from "react";

export default function Lab4Page() {

  let [firstname, setFirstname] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Nombre ${firstname}`);
  };

  const onChange = (event, setValue) => setValue(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input name="firstname" type="text"
             onChange={event => onChange(event, setFirstname)}
      />
      <input type="submit" value="Enviar"/>
    </form>
  );
}
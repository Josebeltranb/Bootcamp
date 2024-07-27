"use client";

import {useEffect, useState} from "react";

export default function Lab6Page() {

  let [firstname,setFirstname] = useState();
  let [lastname,setLastname] = useState();
  let [email,setEmail] = useState();
  let [phone,setPhone] = useState();
  let [user,setUser] = useState(null);

  useEffect(() => {
    user && localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const handleClick = (event) => {
    event.preventDefault();
    setUser({firstname, lastname, email, phone});
  };

  const onChange = (event, setValue) => setValue(event.target.value);

  return (
    <form>
      <label>Nombre(s):</label>
      <input name="firstname" type="text"
             onChange={event => onChange(event, setFirstname)}
      />
      <br />
      <label>Apellido(s):</label>
      <input name="firstname" type="text"
             onChange={event => onChange(event, setLastname)}
      />
      <br />
      <label>Email(s):</label>
      <input name="firstname" type="email"
             onChange={event => onChange(event, setEmail)}
      />
      <br />
      <label>Telefono:</label>
      <input name="firstname" type="text"
             onChange={event => onChange(event, setPhone)}
      />
      <br />
      <input type="submit" value="Enviar" onClick={handleClick}/>
    </form>
  );
}
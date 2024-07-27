/**
 *     @author jose jeferson beltran  <josejefersonbbb@gmail.com>
 *     @fileOverview Descripción: Este script maneja la lógica del formulario de registro.
 *    
 */

// Definición de variables
let email = "";
let pass = "";
let login = {};

const getLoginDataForm = () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  return { email, pass };
};

const buildLoginDataForRequest = () => {
  const loginData = getLoginDataForm();
  const login = {
      email: loginData.email,
      pass: loginData.pass
  };
  return login;
};


/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generadorExcusas();
  });
  console.log("Hello Rigo from the console!");
};

let generadorExcusas = () => {
  let pronoun = ["Un", "El"];
  let subjet = [
    "perro",
    "gato",
    "leon",
    "tigre",
    "listillo",
    "compañero de trabajo"
  ];
  let action = ["me rompio", "me robo", "me tiro", "me ensucio"];
  let possetion = ["mi casa", "mi coche", "mi bici", "mi moto", "mi bocadillo"];
  let where = [
    "en el parque",
    "en la calle",
    "en el trabajo",
    "en el gimnasio"
  ];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subjet.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let posIndx = Math.floor(Math.random() * possetion.length);
  let wheIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subjet[subjIndx] +
    " " +
    action[actIndx] +
    " " +
    possetion[posIndx] +
    " " +
    where[wheIndx]
  );
};

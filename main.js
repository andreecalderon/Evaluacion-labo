import { componeDiv } from "./componentes/componente_1.js";

let DOM = document.querySelector("#root");


let compone = document.createElement('section');
compone.className = "seccion";
compone.appendChild(componeDiv);
DOM.appendChild(compone);

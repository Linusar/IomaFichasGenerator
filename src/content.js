/*global chrome*/
/* src/content.js */
import React from "react";
import ReactDOM from "react-dom";
import { DataAfiliado } from "./utilities";

const SetStateDataAfiliado = () => {
  const handleClick = () => {
    const afiliadoDom = DataAfiliado();
    chrome.storage.sync.set({ afiliado: afiliadoDom }, () => {
      console.log("Value is set to Storage");
    });
  };

  return (
    <a className="btn btn-danger btn-sm" onClick={handleClick}>
      Actualizar Ficha
    </a>
  );
};

const app = document.createElement("a");

//Append <a> element to div
document
  .getElementById("formu")
  .getElementsByTagName("div")[1]
  .appendChild(app);

ReactDOM.render(<SetStateDataAfiliado />, app);

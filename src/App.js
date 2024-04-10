/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    // sempre que o componente for montado, essa função será executada chamando a API
    function loadApi() {
      let api = "https://sujeitoprogramador.com/rn-api/?api=posts";

      fetch(api)
        .then((res) => res.json())
        .then((json) => {
          const data = json;

          setNutri(data);
        });
    }

    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((items) => {
        // percorre o array da api, a api contém ID, então da para usar o ID como key do article
        return (
          <article key={items.id} className="post">
            <strong className="titulo">{items.titulo}</strong>
            <img src={items.capa} alt={items.titulo} />
            <p className="subtitulo">{items.subtitulo}</p>
            <a className="botao" href="#">
              Acessar
            </a>
          </article>
        );
      })}
    </div>
  );
}

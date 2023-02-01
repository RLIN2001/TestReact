import React from "react";

const record1 = {
  nome: "pippo",
  cognome: "pluto"
};

const record2 = {
  nome: "Mario",
  cognome: "Bruno"
};

const record3 = {
  nome: "a",
  prezzo: 2.5
};

const persona = [
  {
    nome: "pippo",
    cognome: "pluto"
  },
  {
    nome: "Mario",
    cognome: "Bruno"
  }
];

const Componente = () => {
  return (
    <section>
      <Componente1 {...record1}>
        <>Sono il contenuto di Pippo</>
      </Componente1>
      <Componente1 {...record2} />
      <Componente2 {...record3} />
    </section>
  );
};

const Componente1 = ({ nome, cognome, children }) => {
  return (
    <React.Fragment>
      <h1>{nome}</h1>

      <p>{children}</p>
    </React.Fragment>
  );
};

const Componente2 = (props) => {
  const { nome, prezzo } = props;
  return (
    <h2>
      {nome} costa: {prezzo}
    </h2>
  );
};

export default Componente;

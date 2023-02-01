import React from "react";

const value = "valore";

const stile = {
  color: "red"
};
const number = 5;
const image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png";

const Prodotto = () => {
  return (
    <article>
      <div className="card">
        <img src={image} />
        <h1 style={stile}>
          {value} {number} {"pippo " + 10}
        </h1>

        <button>{number}</button>
      </div>
    </article>
  );
};

export default Prodotto;

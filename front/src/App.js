import React, { useEffect, useState } from "react";

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState("");

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch("http://localhost:5000/")
        .then((res) => res.text())
        .then((res) => setResponse(res));
    };
    getApiResponse();
  }, []);
  // -------------------------------------------------

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getApiProducts();
  }, []);

  const getApiProducts = async () => {
    let response = await fetch("http://localhost:5000/api/products");
    let data = await response.json();
    console.log(data);
    setProducts(data);
    setIsLoading(true);
  };

  return (
    <section>
      <h1> Prueba tecnica front Ecomsur 2021</h1>
      <p>Borra esto y comienza aqui.</p>
      {!isLoading && (
        <section>
          <h1>Esta cargando los productos</h1>
        </section>
      )}

      {
        isLoading && (
          <section>
            {products.map((item) => (
              <h1 key={item._id}>{item.name}</h1>
            ))}
          </section>
        )

        /* Chec
        k to see if express server is running correctly */
      }
      <h5>{response}</h5>
    </section>
  );
};

export default App;

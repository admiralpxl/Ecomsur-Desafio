import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { ProductsCards } from "./components/ProductsCards";
import { Loader } from "./components/Loader";
import { ProductsDetail } from "./components/ProductsDetail";

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
  const [carItem, setCarItem] = useState("0");

  useEffect(() => {
    setTimeout(() => {
      getApiProducts();
    }, 1500);
  }, []);

  const getApiProducts = async () => {
    let response = await fetch("http://localhost:5000/api/products");
    let data = await response.json();
    console.log(data);
    setProducts(data);
    setIsLoading(true);
  };

  const counter = (carProduct) => {
    let count;
    if (carProduct === 0) {
      setCarItem(count);
      console.log("hecho");
    } else {
      console.log("else hecho");
      count += 1;
      setCarItem(count);
    }
  };

  return (
    <Router>
      <section>
        <Header counter={carItem} />

        <Switch>
          <Route path="/products/:id">
            <ProductsDetail />
          </Route>

          <Route path="/carrito">pagina de los carritos</Route>

          <Route path="/">
            {!isLoading && <Loader />}
            {isLoading && (
              <section className="flex-wrap padding center">
                {products.map((item) => (
                  <>
                    <ProductsCards
                      key={item._id}
                      image={item.image}
                      name={item.name}
                      brand={item.brand}
                      price={item.price}
                      rating={item.rating}
                      reviews={item.numReviews}
                      disable={item.countInStock === 0 ? "disable" : ""}
                      productId={item._id}
                      add={() => {
                        counter(item.countInStock);
                      }}
                    />
                  </>
                ))}
              </section>
            )}
          </Route>
        </Switch>
      </section>
    </Router>
  );
};

export default App;

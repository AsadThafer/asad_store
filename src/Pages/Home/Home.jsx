import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "../../Components/Product/Product.jsx";
import products from "../../data/products.jsx";
import "./Home.css";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop for Games</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              لدينا أفضل الألعاب الإلكترونية لك
            </p>
          </div>
        </div>
      </header>
      {/* Section*/}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div class="input-group mb-3">
            <div className="input-group-prepend">
              <label
                htmlFor="search"
                className="input-group-text"
                id="inputGroup-sizing-default"
              >
                ابحث عن منتج
              </label>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={searchTerm}
              onChange={handleChange}
              id="search"
            />
          </div>

          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {searchResults.length === 0 ? (
              <div className="text-center text-black">
                <h1 className="display-4 fw-bolder">No Results</h1>
                <p className="lead fw-normal text-black-50 mb-0">
                  Try searching for something else
                </p>
              </div>
            ) : (
              searchResults.map((product) => (
                <Product key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

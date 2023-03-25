import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "../../Components/Product/Product.jsx";
import products from "../../data/products.jsx";
import categories from "../../data/categories";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState(0);

  const updateCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = products.filter((product) => {
      if (category == 0 && searchTerm === "") {
        return product.name.toLowerCase().includes(searchTerm);
      }
      if (category === 0 && searchTerm !== "") {
        return product.name.toLowerCase().includes(searchTerm);
      }
      if (category !== 0 && searchTerm === "") {
        return product.category === category;
      }

      return (
        product.category == category &&
        product.name.toLowerCase().includes(searchTerm)
      );
    });
    setSearchResults(results);
    console.log(results);
    console.log(category);
  }, [searchTerm, category]);

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
        <div className="container px-4 px-lg-5 mt-5 ">
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
          <div class="input-group mb-3 ">
            <div className="input-group-prepend ">
              <label
                htmlFor="search"
                className="input-group-text"
                id="inputGroup-sizing-default"
              >
                فرز حسب الفئة
              </label>
            </div>
            <select
              className="form-select text-center "
              aria-label="Default select example"
              onChange={updateCategory}
            >
              <option value={0} selected>
                الكل
              </option>
              {categories.map((category) => (
                <option value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {searchResults.length === 0 ? (
              <div className="text-center text-black">
                <h1 className="display-6 fw-bolder">
                  لا يوجد نتائج مطابقة للبحث
                </h1>
                <p className="lead fw-normal text-black-50 mb-0">
                  يرجى إعادة المحاولة مرة أخرى
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

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.jsx";
const dumpimage = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";
const ProductPage = () => {
  const { id } = useParams();
  console.log(products);
  const [quantity, setQuantity] = useState(1);

  const [product, setProduct] = useState(products[id - 1]);
  const sendonWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=972595681131&text=I%20want%20to%20buy%20%20x${quantity}%20${product.name}`
    );
  };

  useEffect(() => {
    if (product) {
      setProduct(products[id - 1]);
    }
  }, [id]);

  return (
    <>
      {/* Product section*/}
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              {product.image === "" ? (
                <img
                  className="card-img-top mb-5 mb-md-0"
                  src={dumpimage}
                  alt={dumpimage}
                />
              ) : (
                <img
                  className="card-img-top mb-5 mb-md-0"
                  src={product.image}
                  alt={product.name}
                />
              )}
            </div>
            <div className="col-md-6">
              <div className="small mb-1">
                {product.code ? product.code : "No code"}
              </div>
              <h1 className="display-5 fw-bolder">{product.name}</h1>
              <div className="fs-5 mb-5">
                <div className="text-decoration-line-through">
                  {product.oldprice} ₪
                </div>
                <div>{product.newprice} ₪</div>
              </div>
              <p className="lead">{product.description}</p>
              <div className="d-flex">
                <label className="lead" htmlFor="inputQuantity">
                  {" "}
                  Quantity :{" "}
                </label>
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  style={{ maxWidth: "3rem" }}
                />
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  onClick={sendonWhatsApp}
                >
                  <i className="bi bi-whatsapp" /> Contact us on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer*/}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright © Asad's Store 2023
          </p>
        </div>
      </footer>
    </>
  );
};

export default ProductPage;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.jsx";
import paymentMethods from "../../data/paymentMethods.jsx";
import WhatsAppButton from "../../Components/WhatsAppButton/WhatsAppButton.jsx";
import "./ProductPage.css";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import logo from "../../data/logo.png";

const dumpimage = logo;
const ProductPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);
  const [finalPrice, setFinalPrice] = useState(0);
  const [product, setProduct] = useState(products[id - 1]);

  useEffect(() => {
    if (product) {
      setProduct(products[id - 1]);
    }
    if (paymentMethod.tax) {
      setFinalPrice(
        Math.ceil(
          product.newprice + (product.newprice * paymentMethod.taxrate) / 100
        )
      );
    } else {
      setFinalPrice(product.newprice);
    }
  }, [product, id, paymentMethod]);

  return (
    <>
      {/* Product section*/}
      <section className="py-5">
        <Helmet>
          <title>{product.name ? product.name : "قريبا"}</title>
          <meta
            name="description"
            content={product.description ? product.description : "قيد الإنشاء"}
          />
          <meta
            property="og:image"
            content={product.image ? product.image : logo}
          />
        </Helmet>

        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center bg-light">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0 imgcardpage"
                src={product.image ? product.image : dumpimage}
                alt={product.name ? product.name : "قريبا"}
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">
                {product.code ? product.code : null}
              </div>
              <h1 className="display-5 fw-bolder">
                {product.name ? product.name : "قريبا"}
              </h1>
              <div className="fs-5 mb-5">
                {product.oldprice ? (
                  <div className="text-decoration-line-through">
                    {product.oldprice} ₪
                  </div>
                ) : null}
                {product.newprice ? `${product.newprice} ₪` : null}
              </div>
              {product.platform ? (
                <div className="alert alert-primary fw-bolder" role="alert">
                  المنصة :{" "}
                  {product.platform ? product.platform : "غير محدد بعد"}
                </div>
              ) : null}
              {product.note ? (
                <div className="alert alert-danger fw-bolder" role="alert">
                  {product.note ? product.note : "قيد الإنشاء"}
                </div>
              ) : null}
              <div className="lead">
                {product.description ? product.description : "قيد الإنشاء"}
              </div>
              <div className="d-flex flex-column">
                <div>
                  <div className="row align-items-center">
                    <div
                      className="col-auto"
                      style={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <label className="lead" htmlFor="inputQuantity">
                        الكمية :
                      </label>
                    </div>
                    <div className="col-auto">
                      <input
                        className="form-control text-center me-3"
                        id="inputQuantity"
                        type="number"
                        min="1"
                        max="100"
                        value={quantity}
                        onChange={(e) => {
                          if (e.target.value > 0 && e.target.value < 101) {
                            setQuantity(e.target.value);
                          }
                          if (e.target.value < 1) {
                            setQuantity(1);
                          }
                        }}
                        style={{ maxWidth: "4rem" }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row align-items-center">
                    <div
                      className="col-auto"
                      style={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <label className="lead" htmlFor="inputPaymentMethod">
                        طريقة الدفع :
                      </label>
                    </div>
                    <div className="col-auto">
                      <select
                        className="form-select text-center me-3 "
                        id="inputPaymentMethod"
                        aria-label="Default select example"
                        onChange={(e) => {
                          setPaymentMethod(paymentMethods[e.target.value - 1]);
                        }}
                      >
                        {paymentMethods.map((paymentMethod) =>
                          (product.newprice > 50) &
                          (paymentMethod.id === 4) ? null : (
                            <option
                              className="text-center"
                              key={paymentMethod.id}
                              value={paymentMethod.id}
                            >
                              {paymentMethod.name}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                </div>
                {paymentMethod.tax ? (
                  <div
                    className="alert alert-danger fw-bolder tax-note"
                    role="alert"
                  >
                    {paymentMethod.taxrate} % عمولة زيادة
                    <br />
                    {product.newprice ? (
                      <>السعر النهائي : {finalPrice}₪</>
                    ) : null}
                  </div>
                ) : null}

                <WhatsAppButton
                  product={product}
                  quantity={quantity}
                  paymentMethod={paymentMethod}
                  width={50}
                  price={finalPrice}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <Link
            className="btn btn-outline-dark m-auto "
            to={`/`}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <i className="bi bi-arrow-left"></i> العودة للصفحة الرئيسية
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProductPage;

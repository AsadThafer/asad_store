import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.jsx";
import paymentMethods from "../../data/paymentMethods.jsx";
import WhatsAppButton from "../../Components/WhatsAppButton/WhatsAppButton.jsx";

const dumpimage = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";
const ProductPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);

  const [product, setProduct] = useState(products[id - 1]);

  useEffect(() => {
    if (product) {
      setProduct(products[id - 1]);
    }
  }, [product, id]);

  return (
    <>
      {/* Product section*/}
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center bg-light">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={product.image ? product.image : dumpimage}
                alt={product.name}
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">
                {product.code ? product.code : null}
              </div>
              <h1 className="display-5 fw-bolder">{product.name}</h1>
              <div className="fs-5 mb-5">
                {product.oldprice ? (
                  <div className="text-decoration-line-through">
                    {product.oldprice} ₪
                  </div>
                ) : null}
                {product.newprice ? `${product.newprice} ₪` : null}
              </div>
              {product.note ? (
                <div className="alert alert-danger fw-bolder" role="alert">
                  {product.note}
                </div>
              ) : null}
              <div className="lead">{product.description}</div>
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
                        type="num"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
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
                        {paymentMethods.map((paymentMethod) => (
                          <option
                            key={paymentMethod.id}
                            value={paymentMethod.id}
                          >
                            {paymentMethod.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                {paymentMethod.tax ? (
                  <div className="alert alert-danger fw-bolder" role="alert">
                    {paymentMethod.taxrate} % عمولة زيادة على الرصيد الجوال
                    <br />
                    {product.newprice ? (
                      <>
                        {" "}
                        السعر النهائي :{" "}
                        {product.newprice +
                          (product.newprice * paymentMethod.taxrate) / 100}{" "}
                        ₪
                      </>
                    ) : null}
                  </div>
                ) : null}

                <WhatsAppButton
                  product={product}
                  quantity={quantity}
                  paymentMethod={paymentMethod}
                  width={50}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;

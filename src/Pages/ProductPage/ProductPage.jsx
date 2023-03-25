import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.jsx";
import paymentMethods from "../../data/paymentMethods.jsx";

const dumpimage = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";
const ProductPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);
  console.log(paymentMethod);

  const [product, setProduct] = useState(products[id - 1]);
  const [finalPrice, setFinalPrice] = useState(product.newprice);
  const sendonWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=972595681131&text=السلام عليكم ورحمة الله وبركاته%0A%0Aأريد شراء ${product.name} عدد ${quantity} وطريقة الدفع ${paymentMethod.name} %0A%0Aمع تحياتي`
    );
  };

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
                {product.code ? product.code : null}
              </div>
              <h1 className="display-5 fw-bolder">{product.name}</h1>
              <div className="fs-5 mb-5">
                {product.oldprice ? (
                  <div className="text-decoration-line-through">
                    {product.oldprice} ₪
                  </div>
                ) : null}
                <div>{product.newprice} ₪</div>
              </div>
              {product.note ? (
                <div className="alert alert-danger fw-bolder" role="alert">
                  {product.note}
                </div>
              ) : null}
              <p className="lead">{product.description}</p>
              <div className="d-flex flex-column">
                <p>
                  <label className="lead" htmlFor="inputQuantity">
                    الكمية :
                  </label>
                  <input
                    className="form-control text-center me-3"
                    id="inputQuantity"
                    type="num"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    style={{ maxWidth: "3rem" }}
                  />
                </p>
                <p>
                  <label className="lead" htmlFor="inputPaymentMethod">
                    طريقة الدفع :
                  </label>

                  <select
                    className="form-select text-center me-3"
                    id="inputPaymentMethod"
                    aria-label="Default select example"
                    onChange={(e) => {
                      setPaymentMethod(paymentMethods[e.target.value - 1]);
                    }}
                  >
                    {paymentMethods.map((paymentMethod) => (
                      <option key={paymentMethod.id} value={paymentMethod.id}>
                        {paymentMethod.name}
                      </option>
                    ))}
                  </select>
                </p>
                {paymentMethod.tax ? (
                  <div className="alert alert-danger fw-bolder" role="alert">
                    {paymentMethod.taxrate} % عمولة زياد على الرصيد الجوال
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

                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  onClick={sendonWhatsApp}
                >
                  <i className="bi bi-whatsapp" /> تواصل معنا عبر الواتس اب
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;

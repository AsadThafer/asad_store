import { Link } from "react-router-dom";
import "./Product.css";
const Product = ({ product }) => {
  const dumpimage = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";
  const { name, oldprice, image, id, rating, newprice, onsale } = product;
  return (
    <div className="col padding-zero mb-5" key={id}>
      <div className="card h-100">
        {onsale && (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        )}
        <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
          <img
            className="card-img-top img-fluid imgcard"
            src={image ? image : dumpimage}
            alt={name ? name : "قريبا"}
            style={{
              height: "320px",
              width: "268px",
              objectFit: "cover",
              marginBottom: "1rem",
              maxWidth: "100%",
            }}
          />
        </Link>

        <div className="card-body p-4 cardbody">
          <div className="text-center">
            <h5 className="fw-bolder cardtitle">{name ? name : "قريبا"}</h5>
            {rating === 0 || null ? null : (
              <div className="d-flex justify-content-center small text-warning mb-2">
                {[...Array(rating)].map((i) => {
                  return <div className="bi-star-fill" key={i} />;
                })}
              </div>
            )}
            {oldprice ? (
              <div className="text-muted text-decoration-line-through">
                {oldprice} ₪
              </div>
            ) : null}
            {newprice ? `${newprice} ₪` : null}
          </div>
        </div>
        {/* Product actions*/}
        <div
          className="card-footer p-4 pt-0 border-top-0 bg-transparent"
          style={{ fontSize: "0.8rem" }}
        >
          <div className="text-center">
            <Link
              className="btn btn-outline-dark mt-auto"
              to={`/product/${id}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              التفاصيل
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

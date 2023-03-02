import { Link } from "react-router-dom";
const Product = ({ product }) => {
  const dumpimage = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";
  const { name, oldprice, image, id, rating, newprice, onsale } = product;
  return (
    <div className="col mb-5" key={id}>
      <div className="card h-100">
        {onsale && (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        )}

        {image === "" ? (
          <img className="card-img-top" src={dumpimage} alt={dumpimage} />
        ) : (
          <img className="card-img-top" src={image} alt={name} />
        )}

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{name}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              {[...Array(rating)].map((i) => {
                return <div className="bi-star-fill" key={i} />;
              })}
            </div>
            <div className="text-muted text-decoration-line-through">
              {oldprice} ₪
            </div>
            {newprice} ₪
          </div>
        </div>
        {/* Product actions*/}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <Link
              className="btn btn-outline-dark mt-auto"
              to={`/product/${id}`}
            >
              {" "}
              View Options
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

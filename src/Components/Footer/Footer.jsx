import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">
          جميع حقوق الطبع و النشر محفوظة
        </p>
        <p className="m-0 text-center text-white"> Asad's Store 2020 - {new Date().getFullYear()} ©</p>
        <div className="m-0 text-center text-white d-flex flex-row-reverse justify-content-center">
          <Link
            to="https://www.facebook.com/AsadGamerStore"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="bi bi-facebook"
              style={{ fontSize: "2rem", color: "white", margin: "0 1rem" }}
            ></i>
          </Link>
          <Link
            to="https://www.instagram.com/asads.store/"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="bi bi-instagram"
              style={{ fontSize: "2rem", color: "white", margin: "0 1rem" }}
            ></i>
          </Link>

          <Link
            to="https://wa.me/972595681131"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="bi bi-whatsapp"
              style={{ fontSize: "2rem", color: "white", margin: "0 1rem" }}
            ></i>
          </Link>
          <Link
            to="mailto:asadgamerstore@gmail.com "
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="bi bi-envelope"
              style={{ fontSize: "2rem", color: "white", margin: "0 1rem" }}
            ></i>
          </Link>
          <Link
            to="https://github.com/AsadThafer"
            target="_blank"
            rel="noreferrer"
          >
            <i
              class="bi bi-github"
              style={{ fontSize: "2rem", color: "white", margin: "0 1rem" }}
            ></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">
          Copyright © Asad's Store 2023
        </p>
        <div className="m-0 text-center text-white">
          <a
            href="https://www.facebook.com/AsadGamerStore"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="bi bi-facebook"
              style={{ fontSize: "2rem", color: "white" }}
            ></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-4">
      <div className="container text-center">
        <div className="row">
          {/* Brand Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">MyStore</h5>
            <p>Your one-stop shop for the best products online.</p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/ContactUs" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a href="https://facebook.com" className="text-light mx-2 fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" className="text-light mx-2 fs-4">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://instagram.com" className="text-light mx-2 fs-4">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="bg-light my-3" />
        <p className="mb-0">&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="bg-white border-top mt-5 py-4">
      <div className="container">
        <div className="row">
          {/* Brand */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold mb-3">MyStore</h5>
            <p className="text-secondary small mb-0">
              Your trusted destination for premium products at wholesale prices.
              Quality guaranteed with fast shipping worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="/" className="text-decoration-none text-secondary">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/cart" className="text-decoration-none text-secondary">
                  Cart
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-secondary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-secondary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase fw-semibold mb-3">Contact Us</h6>
            <ul className="list-unstyled text-secondary small mb-3">
              <li className="mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i>
                123 Business Street, City
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope-fill me-2"></i>
                info@mystore.com
              </li>
              <li>
                <i className="bi bi-phone-fill me-2"></i>
                +1 234 567 8900
              </li>
            </ul>

            {/* Social */}
            <div>
              <a href="#" className="text-secondary me-3">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-secondary me-3">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-secondary me-3">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-secondary">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className="text-center text-secondary small">
          &copy; {new Date().getFullYear()} MyStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <i className="bi bi-bag-check-fill text-2xl"></i>
              <h3 className="text-xl font-semibold">ShopEase</h3>
            </div>
            <p className="text-blue-100 text-sm">
              Your trusted e-commerce platform for quality products and great
              deals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li className="hover:text-white transition">
                <i className="bi bi-chevron-right mr-2"></i>Home
              </li>
              <li className="hover:text-white transition">
                <i className="bi bi-chevron-right mr-2"></i>Shop
              </li>
              <li className="hover:text-white transition">
                <i className="bi bi-chevron-right mr-2"></i>About
              </li>
              <li className="hover:text-white transition">
                <i className="bi bi-chevron-right mr-2"></i>Contact
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-blue-100">
              <li className="hover:text-white transition">
                <i className="bi bi-question-circle mr-2"></i>FAQ
              </li>
              <li className="hover:text-white transition">
                <i className="bi bi-arrow-repeat mr-2"></i>Returns
              </li>
              <li className="hover:text-white transition">
                <i className="bi bi-truck mr-2"></i>Shipping
              </li>
              <li className="hover:text-white transition">
                <i className="bi bi-shield-lock mr-2"></i>Privacy Policy
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 text-2xl">
              <i className="bi bi-facebook hover:text-blue-200 cursor-pointer transition"></i>
              <i className="bi bi-instagram hover:text-blue-200 cursor-pointer transition"></i>
              <i className="bi bi-twitter-x hover:text-blue-200 cursor-pointer transition"></i>
              <i className="bi bi-linkedin hover:text-blue-200 cursor-pointer transition"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-700 text-center py-4 text-sm text-blue-100">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

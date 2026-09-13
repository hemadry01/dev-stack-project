
import Logo from "../assets/logo-text.png";

const FooterSection = () => {
  return (
    <footer>
      <div className="w-full border-t border-gray-100  mt-24">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-6 py-8  lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img src={Logo} alt="Logo" className="w-auto" />

            <p className="mt-4 text-sm leading-6 text-gray-600">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-4 flex gap-4">
              <a
                href="/"
                className="text-sm text-gray-600 transition hover:text-black"
              >
                GitHub
              </a>

              <a
                href="/"
                className="text-sm text-gray-600 transition hover:text-black"
              >
                Twitter
              </a>

              <a
                href="/"
                className="text-sm text-gray-600 transition hover:text-black"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h2 className="mb-4 font-semibold text-gray-900">PRODUCT</h2>

            <div className="space-y-2 text-sm text-gray-600">
              <p>Home</p>
              <p>Technologies</p>
              <p>Projects</p>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="mb-4 font-semibold text-gray-900">COMPANY</h2>

            <div className="space-y-2 text-sm text-gray-600">
              <p>About</p>
              <p>Contact</p>
              <p>Careers</p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h2 className="mb-4 font-semibold text-gray-900">LEGAL</h2>

            <div className="space-y-2 text-sm text-gray-600">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between px-6 py-4 border-t border-gray-100 mt-4">
        <div>
          <p className="text-sm text-gray-600">
            © 2026 Dev Stack. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6 ">
          <p className="text-sm text-gray-600">Privacy</p>
          <p className="text-sm text-gray-600">Terms</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

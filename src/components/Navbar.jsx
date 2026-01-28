import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Projects", path: "/projects" },
    { name: "Certificate", path: "/certificate" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Brand */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-xl font-extrabold text-slate-800">
            Student Training
          </span>
          <span className="text-xs font-semibold text-blue-600 tracking-wide">
            Certification Program
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-semibold transition
                  ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                {link.name}

                {/* Active underline */}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-blue-600 rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition"
          >
            Enroll
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

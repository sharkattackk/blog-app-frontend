import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  const categories = [
    "Genetic Counselling",
    "Molecular Biology",
    "Animals",
  ];

  return (
    <nav className="
      sticky top-0 z-50
      w-full
      backdrop-blur-md
      bg-pale-blue/90
      border-b border-white/40
      shadow-sm
    ">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center space-x-16">
          <Link to="/" className="group">
            <span className="
              text-2xl font-extrabold tracking-wide
              text-gray-900
              group-hover:text-main-accent
              transition
            ">
              KANE
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-sm">
            <Link
              to="/"
              className="
                font-medium
                text-gray-700
                hover:text-main-accent
                transition
              "
            >
              Latest
            </Link>

            {categories.map((c) => (
              <Link
                key={c}
                to={`/category/${c.toLowerCase().replace(/\s+/g, "-")}`}
                className="
                  font-medium
                  text-gray-700
                  hover:text-main-accent
                  transition
                "
              >
                {c}
              </Link>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-6">

          {/* Socials */}
          <div className="hidden sm:flex items-center space-x-2">
            <SocialIcon
              url="https://www.instagram.com"
              style={{ height: 22, width: 22 }}
              bgColor="transparent"
              fgColor="#4F0C28"
            />
            <SocialIcon
              url="https://ca.linkedin.com"
              style={{ height: 22, width: 22 }}
              bgColor="transparent"
              fgColor="#4F0C28"
            />
            <SocialIcon
              url="https://www.facebook.com"
              style={{ height: 22, width: 22 }}
              bgColor="transparent"
              fgColor="#4F0C28"
            />
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-6 w-px bg-gray-300/60" />

          {/* Subscribe */}
          <button
            className="
              px-4 py-2
              text-sm font-semibold
              text-white
              bg-main-accent
              rounded-lg
              shadow
              hover:shadow-md
              hover:scale-[1.03]
              transition
            "
          >
            Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
}

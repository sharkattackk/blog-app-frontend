import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  const categories = [
    "Genetic Counselling",
    "Biology",
    "Genetics",
  ];

  return (
    <nav className="fixed top-0 z-50 w-full pr-10 pl-4 py-4">
      <div className="mx-auto px-8 py-4 flex items-center justify-between rounded-xl">
        <div className="flex items-center space-x-16">
          <Link to="/" className="group">
            <span className="
              text-2xl tracking-wide font-semibold text-white
            ">
              KANE
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-base text-white font-semibold">
            <div>
              Latest
            </div>

            {categories.map((c, idx) => (
              <div key={idx}>
                {c}
              </div>
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
              fgColor="white"
            />
            <SocialIcon
              url="https://ca.linkedin.com"
              style={{ height: 22, width: 22 }}
              bgColor="transparent"
              fgColor="white"
            />
            <SocialIcon
              url="https://www.facebook.com"
              style={{ height: 22, width: 22 }}
              bgColor="transparent"
              fgColor="white"
            />
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-6 w-px bg-white" />

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

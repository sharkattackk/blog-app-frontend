import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons'

export default function NavBar() {

  const categories = ["Genetic Councilling", "Molecular Biology", "Animals"]
  return (
    <nav className="w-full bg-white shadow-md px-6 flex justify-between items-center">
      <div className="flex flex-row space-x-24 items-center">
        <Link to="/">
          <div className="text-2xl font-bold text-dark-gray">
            KANE
          </div>
        </Link>
        <div className="flex flex-row items-center space-x-8 text-black text-sm">
          <div className="bg-gray-300 p-2 rounded-md cursor-pointer transition">
            Latest
          </div>
          {categories.map((c) => (
            <div className="hover:bg-gray-300 p-2 rounded-md cursor-pointer transition">
              {c}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row text-xs py-2 space-x-4 items-center">
        <div className="flex flex-row space-x-1">
          <SocialIcon url="https://www.instagram.com" style={{height: "24px", width: "24px"}} />
          <SocialIcon url="https://ca.linkedin.com" style={{height: "24px", width: "24px"}} />
          <SocialIcon url="https://www.facebook.com" style={{height: "24px", width: "24px"}} />
        </div>
        <div className="text-favourite-colour bg-favourite-colour/20 border border-favourite-colour/50 rounded-md py-2 px-4 hover:bg-favourite-colour/50 cursor-pointer transition">
          Subscribe
        </div>
      </div>
    </nav>
  );
}

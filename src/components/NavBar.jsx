import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavBar({ openModal }) {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-dark-gray"></h1>
      <div>
        <Link to="/">
            Home
        </Link>
      </div>
    </nav>
  );
}

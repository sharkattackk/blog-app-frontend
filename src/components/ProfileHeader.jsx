import { Link } from "react-router-dom";

export default function ProfileHeader() {
  return (
    <div className="w-1/4 mt-10 flex flex-col items-center justify-start space-y-4">
      <img src="minisa_kane.jpg" alt="Minisa Kaner" className="w-40 h-40 rounded-full mx-auto shadow-lg object-cover"/>

      <h2 className="text-xl font-bold text-dark-gray">Minisa Kane</h2>
      <div className="text-dark-gray/70">
        Lover • Fighter • UDT Navy Seal Diver  
      </div>

      <div className="text-dark-gray/70 text-center">
        Welcome to my personal blog where I investigate Molecular Biology and Genetic Councilling.
      </div>
      <Link to="/post">
          Post
      </Link>
    </div>
  );
}

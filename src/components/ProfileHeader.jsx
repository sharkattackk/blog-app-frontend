import { Link } from "react-router-dom";

export default function ProfileHeader() {
  return (
    <div className="relative w-full flex flex-col items-center">

      {/* Banner */}
      <div className="
        w-full h-48 
        bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
        shadow-inner
      " />

      {/* Floating Card */}
      <div className="
        max-w-[900px] w-full
        flex items-start space-x-6 px-8 py-6
        -mt-20
        bg-white
        rounded-md shadow-xl
        border border-white/30
        animate-fadeIn
      ">
        <img 
          src="minisa_kane.jpg" 
          alt="Minisa Kane" 
          className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
        />

        <div className="flex flex-col space-y-3">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
            Minisa Kane
          </h2>

          <p className="text-gray-600 italic">
            Lover • Fighter • UDT Navy Seal Diver
          </p>

          <p className="text-gray-700 leading-relaxed">
            Hi, I’m Minisa. Welcome to my personal blog where I explore 
            molecular biology, genetics, and the art of scientific storytelling.
          </p>

          <Link 
            to="/admin"
            className="
              inline-block mt-2 w-fit
              px-4 py-2 
              bg-indigo-600 hover:bg-indigo-700 
              text-white rounded-md shadow 
              transition
            "
          >
            Create Post
          </Link>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function ProfileHeader() {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-br from-main-accent via-main-accent/90 to-black" />
        <div className="absolute -top-32 -right-32 h-96 w-96 bg-pale-blue/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-96 w-96 bg-pale-blue/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-8 py-14">
        <div className="backdrop-blur-md bg-pale-blue/90 border border-white/40 rounded-2xl shadow-2xl
          p-10 md:p-14 grid md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center space-y-6">
            <span className="uppercase tracking-widest text-xs text-main-accent font-semibold">
              Investigative Genetic Biology Blog
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Discussing Interesting Things
              <br />
              <span className="text-main-accent">One Gene at a Time</span>
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed">
              Deep dives into genetics, molecular biology, and the hidden
              mechanisms that shape life — explained through research,
              storytelling, and curiosity.
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <Link
                to="/posts"
                className="
                  px-6 py-3
                  bg-main-accent
                  text-white font-semibold
                  rounded-lg
                  shadow-md
                  hover:scale-[1.03]
                  hover:shadow-lg
                  transition
                "
              >
                Explore Articles
              </Link>

              <Link
                to="/about"
                className="
                  px-6 py-3
                  border border-main-accent/40
                  text-main-accent font-semibold
                  rounded-lg
                  hover:bg-main-accent/10
                  transition
                "
              >
                About the Author
              </Link>
            </div>
          </div>

          {/* Right: Visual / Accent */}
          <div className="relative flex items-center justify-center">
            <div className="
              relative
              h-64 w-64 md:h-72 md:w-72
              rounded-full
              bg-main-accent
              flex items-center justify-center
              shadow-xl
            ">
              <div className="
                absolute inset-3
                rounded-full
                bg-pale-blue
                flex items-center justify-center
                text-main-accent
                text-6xl
                font-bold
              ">
                DNA
              </div>

              {/* Orbit ring */}
              <div className="
                absolute inset-0
                rounded-full
                border border-white/30
                animate-spin-slow
              " />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

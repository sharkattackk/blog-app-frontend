import { Link } from "react-router-dom";

const fields = [
  {
    title: "Genetics",
    image: "./yeth.png",
    path: "/category/travel",
  },
  {
    title: "Biology",
    image: "./yeth.png",
    path: "/category/biology",
  },
  {
    title: "Animals",
    image: "./yeth.png",
    path: "/category/animals",
  },
];

const FieldSection = () => {
  return (
    <section className="w-full py-10 bg-pale-blue/40">
      
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-8 mb-16 text-center">
        <p className="uppercase tracking-widest text-xs text-main-accent font-semibold mb-2">
          Explore the Blog
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900">
          Dive Into
        </h2>
      </div>

      {/* Fields Grid */}
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {fields.map((field) => (
          <Link
            key={field.title}
            to={field.path}
            className="
              group relative
              h-[420px]
              rounded-2xl
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              transition
            "
          >
            {/* Image */}
            <img
              src={field.image}
              alt={field.title}
              className="
                absolute inset-0
                w-full h-full object-cover
                scale-105
                group-hover:scale-110
                transition duration-700
              "
            />

            {/* Gradient Overlay */}
            <div className="
              absolute inset-0
              bg-gradient-to-t
              from-main-accent/90
              via-main-accent/30
              to-transparent
            " />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3 className="
                text-3xl font-bold text-white
                tracking-tight
                group-hover:translate-y-[-4px]
                transition
              ">
                {field.title}
              </h3>

              <span className="
                mt-2 inline-block
                text-sm text-white/80
                opacity-0
                group-hover:opacity-100
                transition
              ">
                Explore articles →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FieldSection;

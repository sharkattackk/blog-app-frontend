import { FaSadCry } from "react-icons/fa";
import { useAppContext } from "../AppContext";
import BlogPost from "./BlogPost";

export default function BlogList() {
  const { loading, posts } = useAppContext();

  // Empty State
  if (!loading && (!posts || posts.length === 0)) {
    return (
      <section className="w-full py-24 flex justify-center">
        <div className="
          max-w-md w-full
          bg-pale-blue
          border border-white/40
          rounded-2xl
          shadow-xl
          px-8 py-10
          flex flex-col items-center space-y-5
          text-center
        ">
          <FaSadCry className="text-4xl text-main-accent/60" />

          <h3 className="text-xl font-bold text-gray-800">
            No Posts Yet
          </h3>

          <p className="text-gray-600">
            Minisa hasn’t published any investigations yet.
            Check back soon for deep dives into genetics,
            biology, and life itself.
          </p>
        </div>
      </section>
    );
  }

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return (
    <section className="w-full py-20">
      
      {/* Section Header */}
      <div className="max-w-[850px] mx-auto px-4 mb-14">
        <p className="uppercase tracking-widest text-xs text-main-accent font-semibold mb-2">
          Research & Writing
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900">
          Latest Investigations
        </h2>
      </div>

      {/* Content */}
      <div className="w-full max-w-[850px] mx-auto px-4">
        {!loading ? (
          <div className="flex flex-col space-y-14">
            {sortedPosts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="space-y-10">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="
                  h-48
                  bg-pale-blue
                  rounded-2xl
                  border border-white/40
                  shadow-lg
                  overflow-hidden
                  relative
                "
              >
                {/* Skeleton shimmer */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-white/60
                  to-transparent
                  animate-pulse
                " />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import { FaSadCry } from "react-icons/fa";
import { useAppContext } from "../AppContext";
import BlogPost from "./BlogPost";

export default function BlogList() {
  const { loading, posts } = useAppContext();

  if (!loading && (!posts || posts.length === 0)) {
    return (
     <div className="h-full w-full flex flex-col items-center  ">
        <div className="text-md text-med-gray/60 flex flex-col space-y-4 items-center bg-white rounded-md shadow-lg border border-gray-2002 mt-24 px-4 py-2">
          <div className="text-gray-400">
            <FaSadCry />
          </div>
          <div>
            Minisa Hasn't Posted any blogs Yet
          </div>
        </div>
      </div>
    );
  }

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return (
    <div className="w-full h-full max-w-[850px] mx-auto px-4 py-10">
      {!loading ? (
        <div className="flex flex-col space-y-10">
          {sortedPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
      </div>
      ):(
        <div className=" h-full w-full bg-white rounded-md shadow-lg border border-gray-200  ">
          <div className="h-full w-full skeleton">
          </div>
        </div>
      )}
    </div>
  );
}

import { useAppContext } from "../AppContext";
import BlogPost from "./BlogPost";

export default function BlogList() {
  const { posts } = useAppContext();

  if (!posts || posts.length === 0) {
    return (
      <p className="text-gray-500 mt-10 text-center text-lg">
        No blog posts yet. Create your first one!
      </p>
    );
  }

  return (
    <div className="w-full max-w-[850px] mx-auto px-4 py-10">
      <div className="flex flex-col space-y-10">
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

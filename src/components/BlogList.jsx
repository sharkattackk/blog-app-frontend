import { useAppContext } from "../AppContext";
import BlogPost from "./BlogPost";

export default function BlogList() {

  const { posts } = useAppContext();
  if (posts.length === 0) {
    return (
      <p className="text-gray-500 mt-10">No blog posts yet. Create your first one!</p>
    );
  }


  return (
    <div className="w-full h-full space-y-6 overflow-hidden scrollable-div pr-2 py-4">
      <div className="flex flex-col space-y-2 h-full overflow-y-auto scrollable-div">
        {posts && posts.length > 0 ? posts.map((post, index) => (
            <BlogPost key={index} post={post} />
        )) : (
          <div className="text-black">
            Ill Nya Pas de Blog Post YEt
          </div>
        )}
      </div>
    </div>
  );
}

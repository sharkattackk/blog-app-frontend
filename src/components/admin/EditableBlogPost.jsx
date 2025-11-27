import { FaTrash } from "react-icons/fa";
import { deleteBlogPost } from "../../functions/functions";
import { useAppContext } from "../../AppContext";

export default function EditableBlogPost({ post }) {
    const { posts, setPosts } = useAppContext();

    const handleDelete = (postId) => {
        const newPosts = posts.filter((p) => p.id !== postId);
        setPosts(newPosts);
        deleteBlogPost(postId);
    }
  return (
    <div className="bg-white p-6 rounded-md shadow hover:shadow-lg transition">
        <div className="flex flex-row justify-between">
            <h3 className="text-base font-semibold text-dark-gray ">
                {post.title}
            </h3>
            <div onClick={() => {handleDelete(post.id)}} className="text-sm p-1 bg-red-700/20 text-red-700 border border-red-700/50 rounded-md hover:bg-red-600/60 transition cursor-pointer">
                <FaTrash className="text-xs"/>
            </div>
        </div>
        <p className="text-dark-gray/70 mt-2">{post.content}</p>
        
      <p className="text-sm text-dark-gray/60 mt-4">
        Posted on {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}

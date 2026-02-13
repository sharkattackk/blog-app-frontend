import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteBlogPost } from "../../functions/functions";
import { useAppContext } from "../../AppContext";
import { useAdminContext } from "../../AdminContext";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function EditableBlogPost({ post }) {
    const { posts, setPosts } = useAppContext();
    const { setOpenEditor } = useAdminContext();

    const handleDelete = (postId) => {
        const newPosts = posts.filter((p) => p.id !== postId);
        setPosts(newPosts);
        deleteBlogPost(postId);
    }
  return (
    <div className="flex flex-col bg-med-gray shadow-2xl p-6 rounded-md shadow hover:shadow-lg transition">
        <div className="flex flex-row justify-between">
            <h3 className="text-base font-semibold text-dark-gray ">
                {post.title}
            </h3>
            <div className="flex flex-row items-center space-x-2">
              <div onClick={() => {setOpenEditor(post)}} className="text-sm p-1 bg-blue-500 rounded-md hover:bg-blue-600/60 transition cursor-pointer">
                  <FaEdit className="text-xs"/>
              </div>
              <div onClick={() => {handleDelete(post.id)}} className="text-sm p-1 bg-red-700/20 text-red-700 border border-red-700/50 rounded-md hover:bg-red-600/60 transition cursor-pointer">
                  <FaTrash className="text-xs"/>
              </div>
            </div>
        </div>
        <div className="text-dark-gray/70 mt-2">
            <div
              className="text-dark-gray/70 mt-2"
              dangerouslySetInnerHTML={{ __html: post.post }}
            />
        </div>
        
      <div className="text-sm text-dark-gray/60 mt-4">
        Posted on {new Date().toLocaleDateString()}
      </div>
    </div>
  );
}

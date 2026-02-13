import { withAuthenticator } from "@aws-amplify/ui-react";
import { FaPlus } from "react-icons/fa";
import NewPostModal from "../../components/admin/NewPostModal";
import { useState } from "react";
import { useAppContext } from "../../AppContext";
import EditableBlogList from "../../components/admin/EditableBlogList";
import PostEditor from "../../components/admin/PostEditor";
import { useAdminContext } from "../../AdminContext";

const Admin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {openEditor, setOpenEditor} = useAdminContext();
  const { posts, setPosts } = useAppContext();

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const upsertPostLocally = (newPost) => {
    setPosts((prev) => 
    {
        const withoutOld = prev.filter(p => p.id !== newPost.id);
        return [...withoutOld, newPost]
    }
    )
  }

  return (
    <div className="h-screen flex flex-col p-6 mt-20 overflow-y-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 md:mb-0">
          Minisa's Dashboard
        </h1>
      </div>
      <button onClick={() => setOpenEditor({})} className="flex flex-row items-center space-x-2 rounded-md justify-center border border-med-gray w-full ">
        <FaPlus /> 
        <div>
            New Post
        </div>
          
      </button>

      {/* Posts List */}
      <div className=" rounded-xl shadow p-6 md:p-8 overflow-y-hidden h-full">
        {posts.length === 0 ? (
          <div className="text-gray-400 text-center py-20">
            No posts yet. Click “New Post” to add one.
          </div>
        ) : (
          <EditableBlogList />
        )}
      </div>

      {/* Modal */}
      {/* {isModalOpen && (
        <NewPostModal close={() => setIsModalOpen(false)} addPost={addPost} />
      )} */}
      {openEditor && (
        <PostEditor post={openEditor} close={() => setOpenEditor(null)} addPost={upsertPostLocally} />
      )}
    </div>
  );
};

export default withAuthenticator(Admin, { hideSignUp: true });

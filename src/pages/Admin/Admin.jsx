import { withAuthenticator } from "@aws-amplify/ui-react";
import { FaPlus } from "react-icons/fa";
import NewPostModal from "../../components/NewPostModal";
import { useState } from "react";
import { useAppContext } from "../../AppContext";
import EditableBlogList from "../../components/admin/EditableBlogList";

const Admin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {posts, setPosts} = useAppContext();

    const addPost = (newPost) => {
        setPosts([newPost, ...posts]);
    };
    
    return (
        <div className="mt-10 text-black">
            Hello Minisa, I looooove you
            <button onClick={() => setIsModalOpen(true)} className="flex flex-row  items-center  space-x-4 bg-favourite-colour/20 text-favourite-colour border border-favourite-colour/50 px-4 py-2 rounded-lg hover:bg-favourite-colour/60 transition">
                <FaPlus />
                <div>New Post</div>
                 
            </button>
            <div>
                <EditableBlogList />
            </div>
            {isModalOpen && (
                <NewPostModal 
                    close={() => setIsModalOpen(false)} 
                    addPost={addPost} 
                />
            )}
        </div>
    );
};

export default withAuthenticator(Admin, {hideSignUp: true});
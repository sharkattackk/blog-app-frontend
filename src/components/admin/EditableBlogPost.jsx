import { useAppContext } from "../../AppContext"
import BlogPost from "../BlogPost";

const EditableBlogPost = () => {
    const { posts } = useAppContext();

    return(
        <div>
            <div className="flex flex-col space-y-2 h-full overflow-y-auto scrollable-div">
                {posts.map((post, index) => (
                    <BlogPost key={index} post={post} />
                ))}
            </div>
        </div>
    )
}

export default EditableBlogPost
import { useAppContext } from "../../AppContext"
import EditableBlogPost from "./EditableBlogPost";

const EditableBlogList = () => {
    const { posts } = useAppContext();
    return(
        <div className="flex flex-col space-y-2 h-full min-h-0 overflow-y-auto scrollable-div">
            {posts.map((post, index) => (
                <EditableBlogPost key={index} post={post} />
            ))}
        </div>
    )
}

export default EditableBlogList
import ProfileHeader from './ProfileHeader'
import BlogList from './BlogList'

const BlogViewer = () => {
    return(
        <div className="h-full flex flex-col items-start overflow-hidden overflow-y-auto scrollable-div">
            <ProfileHeader />
            <BlogList />
        </div>
    )
}

export default BlogViewer
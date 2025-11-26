import ProfileHeader from './ProfileHeader'
import BlogList from './BlogList'

const BlogViewer = () => {
    return(
        <div className="h-full flex flex-row items-start px-4 overflow-hidden">
            <ProfileHeader />
            <BlogList />
        </div>
    )
}

export default BlogViewer
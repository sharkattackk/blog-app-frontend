import ProfileHeader from './ProfileHeader'
import BlogList from './BlogList'
import FieldSection from './FieldSection'

const BlogViewer = () => {
    return(
        <div className="h-full overflow-hidden overflow-y-auto scrollable-div pr-2">
            <ProfileHeader />
            <FieldSection />
            <BlogList />
        </div>
    )
}

export default BlogViewer
import ProfileHeader from './ProfileHeader'
import BlogList from './BlogList'
import FieldSection from './FieldSection'

const BlogViewer = () => {
    return(
        <div className="h-full flex flex-col items-start overflow-hidden overflow-y-auto scrollable-div">
            <ProfileHeader />
            <FieldSection />
            <BlogList />
        </div>
    )
}

export default BlogViewer
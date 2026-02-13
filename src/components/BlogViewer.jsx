import ProfileHeader from './ProfileHeader'
import BlogList from './BlogList'
import FieldSection from './FieldSection'
import { useAppContext } from '../AppContext'
import { useEffect, useRef } from 'react'

const BlogViewer = () => {
    const {setScrolled} = useAppContext();
    const scrollRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(scrollRef.current.scrollTop > 60);
        };

        const container = scrollRef.current;
        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, [setScrolled]);

    return(
        <div ref={scrollRef} className="h-full overflow-hidden overflow-y-auto scrollable-div p-2">
            <ProfileHeader />
            <FieldSection />
            <BlogList />
        </div>
    )
}

export default BlogViewer
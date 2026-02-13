export default function BlogPost({ post }) {

  const coverImage = post.cover_image ?? "/default-blog-banner.jpg";

  return (
    <article className="
      rounded-xl overflow-hidden shadow-md
      transition-all duration-300 hover:shadow-xl hover:-translate-y-1
    ">
      
      {/* Cover Image */}
      <div className="relative h-56 w-full">
        <img 
          src={coverImage} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="px-8 py-8">

        {/* Date / Read Time */}
        <div className="flex items-center space-x-3 text-sm text-gray-500 mb-2">
          <span>
            {new Date(post.created_at).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-400"></span>
          <span>{Math.max(1, Math.floor(post.post.length / 600))} min read</span>
        </div>

        {/* Title */}
        <h2 className="
          text-2xl font-bold text-gray-900 tracking-tight 
          hover:text-indigo-600 transition-colors cursor-pointer
        ">
          {post.title}
        </h2>

        {/* Subtitle Line */}
        <div className="mt-3 w-16 h-1 bg-indigo-500 rounded-full"></div>

        {/* Body */}
        <div className="mt-6 space-y-4 text-gray-700 text-lg leading-relaxed">
          <div
              className="text-dark-gray/70 mt-2"
              dangerouslySetInnerHTML={{ __html: post.post }}
            />
        </div>
      </div>

    </article>
  );
}

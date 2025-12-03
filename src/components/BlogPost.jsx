export default function BlogPost({ post }) {
  const paragraphs = post.post
    .split(/\n\s*\n/)        // split on blank lines
    .filter(Boolean);        // remove empty items

  return (
    <article className="
      bg-white
      rounded-md shadow-lg
      border border-gray-200
      p-10
      transition-all duration-300
      hover:shadow-2xl hover:-translate-y-1
    ">
      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-900">
        {post.title}
      </h1>

      {/* Date */}
      <p className="text-sm text-gray-500 mt-2">
        {new Date(post.created_at).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </p>

      {/* Content */}
      <div className="mt-6 space-y-4 text-gray-700 text-lg leading-relaxed">
        {paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </article>
  );
}

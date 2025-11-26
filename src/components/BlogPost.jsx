export default function BlogPost({ post }) {
  return (
    <div className="bg-white p-6 rounded-md shadow hover:shadow-lg transition">
      <h3 className="text-base font-semibold text-dark-gray ">{post.title}</h3>
      <p className="text-dark-gray/70 mt-2">{post.content}</p>

      <p className="text-sm text-dark-gray/60 mt-4">
        Posted on {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}

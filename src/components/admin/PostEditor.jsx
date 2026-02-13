import { useState } from "react";
import { submitBlogPost } from "../../functions/functions";
import { v4 as uuidv4 } from "uuid";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function PostEditor({ post = {}, close, addPost }) {
  const [title, setTitle] = useState(post.title || "");
  const [content, setContent] = useState(post.post || "");
  const [files, setFiles] = useState([]);

  // Handle file uploads (images / PDFs)
  const handleFileUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!title || !content) return;

    const postObj = {
      id: post.id ? post.id : uuidv4(),
      userId: 1,
      title,
      post: content,
      attachments: files, // You can handle upload logic here
      created_at: post.created_at ? post.created_at :  new Date().toISOString().slice(0, 19).replace("T", " "),
    };
    console.log(postObj);
    addPost(postObj);
    submitBlogPost(postObj);
    close();
  };
  console.log(files)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20 overflow-y-hidden z-50">
      <div className="bg-med-gray  w-full max-w-3xl rounded-xl shadow-xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 ">
          {post.id ? "Edit Post" : "New Post"}
        </h2>

        {/* Title Input */}
        <input
          className="w-full border border-gray-300  p-3 rounded mb-4 focus:ring-2 focus:ring-none outline-none"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Rich Text Editor */}
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="mb-4 bg-white max-h-[400px] rounded overflow-y-auto scrollable-div"
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ["bold", "italic", "underline", "strike"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image", "code-block"],
              ["clean"],
            ],
          }}
        />

        {/* File Uploads */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">
            Attach Files (images or PDFs)
          </label>
          <input
            type="file"
            multiple
            accept="image/*,.pdf"
            onChange={handleFileUpload}
            className="mb-2"
          />

          {/* File Previews */}
          {files.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-2">
              {files.map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
                >
                  <span className="text-sm truncate max-w-xs">{file.name}</span>
                  <button
                    onClick={() => removeFile(idx)}
                    className="text-red-500 hover:text-red-700 font-bold"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={close}
            className="px-6 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-main-accent text-white rounded hover:bg-purple-700 shadow transition"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

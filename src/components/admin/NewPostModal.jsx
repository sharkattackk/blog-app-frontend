import { useState } from "react";
import { submitBlogPost } from "../../functions/functions";
import { v4 as uuidv4} from "uuid";
import { fetchAuthSession } from "aws-amplify/auth";

export default function NewPostModal({ close, addPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title || !content) return;
    const postObj = {
      id: uuidv4(),
      userId: 1,
      title: title,
      post: content,
      created_at: new Date().toISOString().slice(0,19).replace('T', ' ')
    }
    addPost(postObj);
    submitBlogPost(postObj);
    close();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Create New Post</h2>

        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full border p-2 rounded mb-3 h-32"
          placeholder="Write your post..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <div className="flex justify-end space-x-3">
          <button
            onClick={close}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

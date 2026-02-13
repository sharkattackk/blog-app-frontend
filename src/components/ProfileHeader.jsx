import { useEffect, useState } from "react";
import { useAppContext } from "../AppContext";

export default function ProfileHeader() {

  const {latestBlogPost} = useAppContext();
  console.log(latestBlogPost)
  const slides = [
    "This blog is my way of exploring genetics through research, reflection, and curiosity.",
    "Genetics is often presented as complicated, technical, or distant from daily life, but it shapes who we are and our very personal experiences.",
    "I want to explain genetics in a way that feels clear and relevant, so more people can connect with its beauty. Whether you learn something new or see your studies in a new light, my goal is to make science feel personal and easy to understand beyond the textbook."
  ];

  const [current, setCurrent] = useState(0);

  // Auto cycle every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[85vh] rounded-xl overflow-hidden">

      {/* Background Image */}
      <img
        src="InsaneImg_ar.png"
        className="absolute inset-0 w-full h-full object-cover blur-sm"
        alt=""
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8">
        <div className="flex flex-row justify-between">
        <div className="flex flex-col max-w-4xl space-y-2 text-white">
          <div className="flex flex-row">
            <div className="px-3 py-1 rounded-full backdrop-blur-md bg-white/10 inline-block text-sm">
              Investigative Genetics Journal
            </div>
          </div>

          <div className="text-4xl md:text-5xl font-extrabold leading-tight">
            Making Genetics Human And Relevant
          </div>

          {/* Slide Text */}
          <div className="min-h-[100px]">
            {slides.map((text, index) => (
              <p
                key={index}
                className={`
                  transition-opacity duration-700 ease-in-out
                  text-lg leading-relaxed text-white/90
                  ${current === index ? "block" : "hidden"}
                `}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Dots */}
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`
                  h-2.5 w-2.5 rounded-full transition-all duration-300
                  ${current === index
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/70"}
                `}
              />
            ))}
          </div>

        </div>
        <div className="hidden lg:flex items-end">
          {latestBlogPost && (
            <div className="
              relative
              max-w-sm
              p-6
              rounded-2xl
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              text-white
              shadow-xl
              transition
              hover:bg-white/20
              hover:scale-[1.02]
              cursor-pointer
            ">
              <div className="text-xs uppercase tracking-widest text-white/70 mb-3">
                Latest Post
              </div>

              <div className="text-xl font-bold leading-snug mb-4">
                {latestBlogPost.title}
              </div>

              <div className="text-sm text-white/70 flex items-center space-x-2">
                <span>{latestBlogPost.readTime} 2 min read</span>
                <span className="h-1 w-1 rounded-full bg-white/60" />
                <span>New</span>
              </div>
            </div>
          )}
        </div>

        </div>
      </div>
    </div>
  );
}

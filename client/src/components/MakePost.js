import { useState } from "react";
import toast from "react-hot-toast";
import Welcome from "./Welcome";
import { useLocation } from "react-router-dom";

function MakePost({ dark }) {
  const [text, setText] = useState("");
  const location = useLocation();
  const currentSection = location.pathname.replace("/s/", "");


  const submitPost = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://rlogank.com/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          body: text
        }),
      });
      toast.success("Post successful!");
      setText("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      {/* <Welcome dark={dark} /> */}
      <form onSubmit={submitPost} className="flex w-full gap-3">
        <input
          className={
            dark
              ? "w-full rounded-md bg-slate-800 py-2 px-3.5 text-slate-100 transition"
              : "w-full rounded-md py-2 px-3.5 transition"
          }
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className={
            dark
              ? "inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-slate-100 shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              : "flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-slate-100 shadow-sm transition hover:bg-emerald-700 focus:outline-none  focus:ring-2 focus:ring-emerald-500"
          }
        >
          Post
        </button>
      </form>
    </>
  );
}

export default MakePost;

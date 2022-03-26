import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import EditPost from "./EditPost";

const ListPosts = ({ setUpdate, update, dark }) => {
  const [posts, setPosts] = useState([]);

  const deletePost = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      update ? setUpdate(false) : setUpdate(true);
      toast.error("Your old post says his goodbyes.", {
        icon: "😢",
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const getPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      const jsonData = await response.json();
      setPosts(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getPosts();
    console.log("updated");
  }, [update]);

  return (
    <>
      <div className="my-3 flex flex-col gap-3">
        {posts.map((post) => (
          <div
            key={post.post_id}
            className={
              dark
                ? "flex w-full justify-between rounded-md bg-slate-800 p-5 text-slate-100"
                : "flex w-full justify-between rounded-md bg-white p-5"
            }
          >
            <div className="pr-3">{post.body}</div>
            <div className="flex items-center gap-3 self-center text-3xl">
              <EditPost
                dark={dark}
                update={update}
                setUpdate={setUpdate}
                post={post}
              />
              <button
                onClick={() => deletePost(post.post_id)}
                className={
                  dark
                    ? "cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    : "cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                }
              >
                <FaTrash
                  className={
                    dark
                      ? "cursor-pointer rounded-md bg-slate-700 p-2 text-3xl transition hover:bg-opacity-75 active:bg-opacity-50"
                      : "cursor-pointer rounded-md bg-slate-900 bg-opacity-5 p-2 text-3xl transition hover:bg-opacity-10 active:bg-opacity-[15%]"
                  }
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListPosts;

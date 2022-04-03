import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Modal from "./Modal";

const EditPost = ({ post, setPost, dark }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && (
        <Modal
          dark={dark}
          post={post}
          setPost={setPost}
        />
      )}
      <button
        onClick={() => (modal ? setModal(false) : setModal(true))}
        className={
          dark
            ? "cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            : "cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        }
      >
        <FaEdit
          className={
            dark
              ? "cursor-pointer rounded-md bg-slate-700 hover:bg-opacity-75 active:bg-opacity-50 p-2 text-3xl transition "
              : "cursor-pointer rounded-md bg-slate-900 bg-opacity-5 hover:bg-opacity-10 active:bg-opacity-[15%] p-2 text-3xl transition"
          }
        />
      </button>
    </>
  );
};

export default EditPost;

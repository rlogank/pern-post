import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Modal from "./Modal";

const EditPost = ({ post, setPost, update, setUpdate, dark }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && (
        <Modal
          dark={dark}
          post={post}
          setPost={setPost}
          update={update}
          setUpdate={setUpdate}
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
              ? "cursor-pointer rounded-md bg-slate-700 p-2 text-3xl transition hover:bg-opacity-75 active:bg-opacity-50 "
              : "cursor-pointer rounded-md bg-slate-900 bg-opacity-5 p-2 text-3xl transition hover:bg-opacity-10 active:bg-opacity-[15%]"
          }
        />
      </button>
    </>
  );
};

export default EditPost;

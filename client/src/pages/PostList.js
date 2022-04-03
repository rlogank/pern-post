import ListPosts from "../components/ListPosts";
import MakePost from "../components/MakePost";
import { Toaster } from "react-hot-toast";
import Activity from "../components/Activity";
import { useLocation } from "react-router-dom";

const PostList = ({ dark, update, setUpdate }) => {
  return (
    <div className="mx-auto flex flex-col lg:flex-row w-full max-w-5xl gap-3 px-3">
      <div className="lg:w-2/5">
        <Activity dark={dark} />
      </div>
      <div
        className={
          dark
            ? "min-h-screen lg:w-3/4 transition"
            : "min-h-screen lg:w-3/4 text-gray-700 transition"
        }
      >
        <div className="mx-auto max-w-5xl">
          <MakePost dark={dark} update={update} setUpdate={setUpdate} />
          <ListPosts dark={dark} update={update} setUpdate={setUpdate} />
        </div>
      </div>
      {dark ? (
        <Toaster
          toastOptions={{
            style: {
              background: "#0F172A",
              color: "#F1F5F9",
            },
          }}
        />
      ) : (
        <Toaster />
      )}
    </div>
  );
};

export default PostList;

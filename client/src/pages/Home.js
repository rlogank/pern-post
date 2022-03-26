import ListPosts from "../components/ListPosts";
import MakePost from "../components/MakePost";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

//testing pipeline1
const Home = ({ dark, setDark, update, setUpdate }) => {
  return (
    <>
      <div
        className={
          dark
            ? "min-h-screen w-full bg-slate-700 transition"
            : "min-h-screen w-full bg-slate-100 text-neutral-600 transition"
        }
      >
        <Navbar dark={dark} setDark={setDark} />
        <div className="mx-auto max-w-md px-3">
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
    </>
  );
};

export default Home;

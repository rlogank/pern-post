import { Toaster } from "react-hot-toast";
import Activity from "../components/Activity";
import ListPosts from "../components/ListPosts";
import MakePost from "../components/MakePost";

const SectionWrapper = ({ sections, dark, update, setUpdate }) => {
  return (
    <div className="mx-auto flex w-full max-w-5xl gap-3 px-3">
      <div
        className={
          dark
            ? "min-h-screen w-3/4 transition"
            : "min-h-screen w-3/4 text-gray-700 transition"
        }
      >
        <div className="mx-auto max-w-5xl">
          {sections.map((s) => {
            return (
              <>
                <div>{s.title}</div>
                <MakePost dark={dark} update={update} setUpdate={setUpdate} />
                <ListPosts dark={dark} update={update} setUpdate={setUpdate} />
              </>
            );
          })}
        </div>
      </div>
      <div className="w-2/5">
        <Activity dark={dark} />
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

export default SectionWrapper;

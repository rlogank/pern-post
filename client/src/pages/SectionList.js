import { Toaster } from "react-hot-toast";
import { FaClock, FaUser } from "react-icons/fa";
import Activity from "../components/Activity";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Frontend",
    description: "",
    hereNow: 940,
    lastPost: "nice",
    lpTime: "2s",
    seen: false,
  },
  {
    title: "Backend",
    description: "",
    hereNow: 940,
    lastPost: "nice",
    lpTime: "2s",
    seen: false,
  },
  {
    title: "Devops",
    description: "",
    hereNow: 940,
    lastPost: "nice",
    lpTime: "2s",
    seen: false,
  },
  {
    title: "Misc",
    description: "",
    hereNow: 940,
    lastPost: "nice",
    lpTime: "2s",
    seen: false,
  },
];

const SectionList = ({ dark }) => {
  return (
    <>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-3 lg:flex-row">
        <div className="lg:w-2/5">
          <Activity sections={sections} dark={dark} />
        </div>
        <div
          className={
            dark
              ? "min-h-screen transition lg:w-3/4"
              : "min-h-screen text-gray-700 transition lg:w-3/4"
          }
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-3">
            {sections.map((s) => {
              return (
                <>
                  <div
                    className={
                      dark
                        ? "flex items-center justify-between rounded-md bg-slate-800 p-5 text-slate-100"
                        : "flex items-center justify-between rounded-md bg-white p-5"
                    }
                  >
                    <div className="flex items-center gap-3">
                      <Link
                        to={"/s/" + s.title.toLowerCase()}
                        className="font-semibold"
                      >
                        {s.title}
                      </Link>
                      <div className="flex items-center gap-1 text-[10px] text-slate-500">
                        <FaUser className="text-[10px]" />
                        {s.hereNow}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <h2 className="">{s.lastPost}</h2>
                      <div className="flex items-center gap-1 text-[10px] text-slate-500">
                        <FaClock className="text-[10px]" />
                        {s.lpTime}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
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
    </>
  );
};

export default SectionList;

import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = ({ dark, setDark }) => {
  return (
    <h1
      className={
        dark
          ? "mb-3 bg-slate-800 py-3 tracking-tight text-slate-100 transition"
          : "mb-3 bg-white py-3 tracking-tight transition"
      }
    >
      <div className="mx-auto flex max-w-md items-center justify-between px-3">
        <Link to="/" className="text-2xl font-extrabold">
          PERN Post
        </Link>
        {dark ? (
          <button className="rounded-md focus:ring-2 focus:ring-blue-500">
            <FaSun
              onClick={() => {
                dark ? setDark(false) : setDark(true);
              }}
              className="cursor-pointer rounded-md bg-slate-700 p-2 text-3xl transition hover:bg-opacity-75 focus:bg-red-500 active:bg-opacity-50"
            />
          </button>
        ) : (
          <button className="rounded-md focus:ring-2 focus:ring-emerald-500">
            <FaMoon
              onClick={() => {
                dark ? setDark(false) : setDark(true);
              }}
              className="cursor-pointer rounded-md bg-slate-900 bg-opacity-5 p-2 text-3xl transition hover:bg-opacity-10 active:bg-opacity-[15%]"
            />
          </button>
        )}
      </div>
    </h1>
  );
};

export default Navbar;

import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = ({ dark, setDark, setSlider, slider, setType }) => {
  const navButton =
    "bg-slate-900 bg-opacity-5 hover:bg-opacity-10 active:bg-opacity-[15%] transition py-2 px-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500";
  const navButtonDark =
    "bg-slate-700 hover:bg-opacity-75 active:bg-opacity-50 transition py-2 px-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";
  const iconButton =
    "bg-slate-900 bg-opacity-5 hover:bg-opacity-10 active:bg-opacity-[15%] transition p-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500";
  const iconButtonDark =
    "bg-slate-700 hover:bg-opacity-75 active:bg-opacity-50 transition p-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <h1
      className={
        dark
          ? "mb-3 bg-slate-800 py-3 tracking-tight text-slate-100 transition"
          : "mb-3 bg-white py-3 tracking-tight transition"
      }
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-3">
        <Link to="/" className="text-2xl font-extrabold">
          PWF
        </Link>
        <div className="flex gap-3">
          <button
            onClick={() => {
              setSlider(!slider)
              setType("Login")
            }}
            className={dark ? navButtonDark : navButton}
          >
            Log in
          </button>
          <button
            onClick={() => {
              setSlider(!slider)
              setType("Signup")
            }}
            className={dark ? navButtonDark : navButton}
          >
            Sign up
          </button>
          <button
            className={dark ? iconButtonDark : iconButton}
            onClick={() => {
              dark ? setDark(false) : setDark(true);
            }}
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </h1>
  );
};

export default Navbar;

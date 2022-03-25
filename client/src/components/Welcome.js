import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Welcome = ({ dark }) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {open && (
        <div
          className={
            dark
              ? "w-full justify-between rounded-md bg-slate-800 p-5 text-slate-100"
              : "w-full justify-between rounded-md bg-emerald-600 p-5 text-slate-100"
          }
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-bold leading-3">Welcome to PERN Post!</h2>
            <button className=" rounded-md focus:ring-2 focus:ring-slate-100">
              <FaTimes
                onClick={() => {
                  setOpen(false);
                }}
                className="m-0.5 flex cursor-pointer self-start text-slate-100"
              />
            </button>
          </div>
          <p>
            PERN stands for PostgreSQL, Express, React, and Node - which are
            what this application was made with.
          </p>
        </div>
      )}
    </>
  );
};

export default Welcome;

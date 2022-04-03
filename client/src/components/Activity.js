import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import {useLocation} from 'react-router-dom'

function capitalizeFirstLetter(string) {
  // -___-
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Activity = ({ dark, sections }) => {
  const location = useLocation()
    const [open, setOpen] = useState(true);
    return (
      <>
        {open && (
          <div
            className={
              dark
                ? "self-start w-full justify-between rounded-md bg-slate-800 p-5 text-slate-100"
                : "self-start w-full justify-between rounded-md bg-emerald-600 p-5 text-slate-100"
            }
          >
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-bold leading-3">{capitalizeFirstLetter(location.pathname.replace("/s/", ""))}</h2>
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
              Feel free to create/edit/delete posts, I just ask that you leave
              some posts behind!
            </p>
          </div>
        )}
      </>
    );
}
 
export default Activity;
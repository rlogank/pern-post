/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import toast from "react-hot-toast";

export default function Modal({ post, update, setUpdate, dark }) {
  const [text, setText] = useState(post.body);
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const updateText = async (e) => {
    e.preventDefault();
    try {
      await fetch(`/api/posts/${post.post_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: text }),
      });
      toast.success("Post updated!");
      setText("");
      update ? setUpdate(false) : setUpdate(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex min-h-screen w-full items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              className={
                dark
                  ? "fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity"
                  : "fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity"
              }
            />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={
                dark
                  ? "relative inline-block w-96 transform overflow-hidden rounded-md bg-slate-800 px-4 pt-5 pb-4 text-center align-bottom text-slate-100 shadow-xl transition-all sm:my-8 sm:p-6 sm:align-middle"
                  : "relative inline-block w-96 transform overflow-hidden rounded-md bg-white px-4 pt-5 pb-4 text-center align-bottom shadow-xl transition-all sm:my-8 sm:p-6 sm:align-middle"
              }
            >
              <div className="justify-center sm:flex sm:items-center">
                <div className="mt-3 w-full text-center sm:mt-0">
                  <Dialog.Title
                    as="h3"
                    className={
                      dark
                        ? "mb-8 text-lg font-medium leading-6 text-slate-100 sm:mb-6"
                        : "mb-8 text-lg font-medium leading-6 text-slate-900 sm:mb-6"
                    }
                  >
                    Edit post
                  </Dialog.Title>
                  <div className="mt-2 rounded-md">
                    <input
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      className={
                        dark
                          ? "w-full rounded-md bg-slate-900 py-2 px-3.5 text-slate-100 transition"
                          : "w-full rounded-md bg-slate-900 bg-opacity-5 py-2 px-3.5 transition"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 justify-center sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className={
                    dark
                      ? "inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-base font-medium text-slate-100 shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                      : "inline-flex w-full justify-center rounded-md bg-emerald-600 px-4 py-2 text-base font-medium text-slate-100 shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2  focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm"
                  }
                  onClick={(e) => {
                    updateText(e);
                    setOpen(false);
                  }}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className={
                    dark
                      ? "mt-3 inline-flex w-full items-center justify-center rounded-md bg-slate-700 px-4 py-2  text-base font-medium text-slate-100 shadow-sm hover:bg-opacity-75  focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-opacity-50 sm:mt-0 sm:w-auto sm:text-sm"
                      : "mt-3 inline-flex w-full items-center justify-center rounded-md bg-slate-900 bg-opacity-5 px-4  py-2 text-base font-medium text-slate-700 shadow-sm hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-emerald-500  active:bg-opacity-[15%] sm:mt-0 sm:w-auto sm:text-sm"
                  }
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

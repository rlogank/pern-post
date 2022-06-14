/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Login from "../user/Login";
import Signup from "../user/Signup";
import { FaTimes } from "react-icons/fa";

export default function SliderWrapper({ slider, setSlider, type, dark }) {
  return (
    <Transition.Root show={slider} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={setSlider}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300 sm:duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300 sm:duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <div
                  className={
                    dark
                      ? "flex h-full flex-col overflow-y-scroll bg-slate-800 py-6 text-gray-100 shadow-xl"
                      : "flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                  }
                >
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium">
                        {type}
                      </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className={
                            dark
                              ? "rounded-md p-3 text-sm transition hover:bg-slate-700 hover:bg-opacity-75 focus:outline-none focus:ring-0 active:bg-opacity-50"
                              : "rounded-md bg-slate-900 bg-opacity-0 p-3 text-sm transition hover:bg-opacity-10 focus:outline-none focus:ring-0 active:bg-opacity-[15%]"
                          }
                          onClick={() => setSlider(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <FaTimes />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    {type === "Login" && <Login />}
                    {type === "Signup" && <Signup />}
                    {/* /End replace */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

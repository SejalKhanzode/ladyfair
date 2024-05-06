import React from "react";

import { Link } from "react-router-dom";

const ServicesDiv = () => {
  return (
    <div className="bg-pink3">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
          <header className="">
            <h2 className="font-bold text-gray-900 sm:text-3xl capitalize lg:text-[40px]  text-center pb-8">
              Services we <span className="text-rose-600 ">offer</span> 
            </h2>

            <p className="mt-4 text-gray-500 text-center">
            Discover unparalleled beauty treatments and personalized services at Ladyfair. Experience luxury and transformation with every visit.
            </p>
          </header>

          <div className="mt-8">
            <p className="text-sm text-gray-500">
              {}
            </p>
          </div>

          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <Link to="/serviceview" className="group block overflow-hidden">
                <img
                  src={"https://images.pexels.com/photos/5069604/pexels-photo-5069604.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-lg font-bold px-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Facial
                  </h3>

                  <p className="mt-2 pb-3">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900 px-3">
                      {" "}
                      Rs: 999/
                    </span>
                  </p>
                  <button className="bg-pink1 w-full p-3 m-3 rounded-lg text-white font-semibold">Book Appointment</button>
                </div>
              </Link>
            </li>

            <li>
              <Link to="#" className="group block overflow-hidden">
                <img
                  src={"https://images.pexels.com/photos/5178023/pexels-photo-5178023.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-lg font-bold px-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Threading
                  </h3>

                  <p className="mt-2 pb-3">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900 px-3">
                      {" "}
                      Rs: 1500/
                    </span>
                  </p>
                </div>
                <button className="bg-pink1 w-full p-3 m-3 rounded-lg text-white font-semibold">Book Appointment</button>
              </Link>
            </li>

            <li>
              <Link to="#" className="group block overflow-hidden">
                <img
                  src={"https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=600"}  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-lg font-bold px-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Makeup
                  </h3>

                  <p className="mt-2 pb-3">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900 px-3">
                      {" "}
                      Rs: 1999/
                    </span>
                  </p>
                </div>
                <button className="bg-pink1 w-full p-3 m-3 rounded-lg text-white font-semibold">Book Appointment</button>
              </Link>
            </li>

            <li>
              <Link to="#" className="group block overflow-hidden">
                <img
                  src={"https://images.pexels.com/photos/2177016/pexels-photo-2177016.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-lg font-bold px-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Tattoo
                  </h3>

                  <p className="mt-2 pb-3">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900 px-3">
                      {" "}
                      Rs: 899/
                    </span>
                  </p>
                </div>
                <button className="bg-pink1 w-full p-3 m-3 rounded-lg text-white font-semibold">Book Appointment</button>
              </Link>
            </li>
          </ul>

          <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
            <li>
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded border border-gray-100 text-center leading-8"
              >
                1
              </a>
            </li>

            <li className="block size-8 rounded border-black bg-black text-center leading-8 text-white">
              2
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded border border-gray-100 text-center leading-8"
              >
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded border border-gray-100 text-center leading-8"
              >
                4
              </a>
            </li>

            <li>
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default ServicesDiv;

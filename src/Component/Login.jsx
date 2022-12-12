import React from "react";
import { ReactComponent as YourSvg } from "../image/mobile2.svg"


const Signup = () => {
  return (
    <div>
       
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24  flex flex-wrap items-center">
          <div class="lg:w-1/2 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            
            <YourSvg/>
          </div>
         
          <div class="xl:w-1/3 lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Login
            </h2>
            
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;

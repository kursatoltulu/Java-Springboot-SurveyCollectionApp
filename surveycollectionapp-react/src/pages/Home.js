import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
  

    <div className="flex min-h-screen flex-col item-center justify   py-24">


    <div className='px-80 pt-20'>
      <label for="countries" class="block mb-2 text-8xl  font-medium text-gray-900 dark:text-black"><span className="text-[#2563eb]">Hoşgeldiniz</span>, anket doldurmak ister misiniz?</label>
      <div class="group ">
        <button
          class=" shadow-2xl shadow-[#3b82f6] pt-10 mt-40 bg-white border border-[#3b82f6] text-[#2563eb] text-2xl rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          <span class="pr-1 mt-10 font-bold flex-1">Mevcut Anketler</span>
          <span>
            <svg
              class="fill-current h-11 w-11 transform group-hover:-rotate-180
              transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </span>
        </button>
        <ul
          class="pt-4 shadow-2xl shadow-[#3b82f6] bg-white border rounded-full transform scale-0 group-hover:scale-100  transition duration-150 block w-full p-2.5 "
        >
         
          <li class="bg-slate-100 rounded-full relative text-center px-3 py-2 hover:bg-[#d9e6fd]">
            <button to="./pages/makeSurvey" class="w-full text-center text-xl font-bold items-center outline-none focus:outline-none">
              <Link to="makeSurvey1" class=" pr-1 flex-1">Tuttuğunuz Futbol Takımı</Link>
            </button>
          </li>
          <li class="bg-slate-100 rounded-full relative text-center my-1 py-2 hover:bg-[#d9e6fd]">
            <button class="w-full text-center text-xl font-bold items-center outline-none focus:outline-none">
              <Link to="makeSurvey2"><span class=" pr-1 flex-1">Hayatınızdan Memnun Musunuz ?</span></Link>
            </button>
          </li>
          
         
        </ul>
      </div>


    </div>
    
    </div>
  )
}

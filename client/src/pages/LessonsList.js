


import { getCategories } from '../store/actions/actionCreator';
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState, useRef } from 'react';

import ScheduleList from '../components/ScheduleList';



export default function LessonsList() {

  const dispatch = useDispatch()
  const {
    category: {
      categories, error, loading
    }
  } = useSelector((state) => state)

  console.log(categories);

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  if (categories.length) {
    return (
      <div className='pt-24 px-6 max-w-screen-xl mx-auto dark:bg-gray-900 border border-yellow-400 '>
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"> Mata Pelajaran </h5>

        <div className="grid grid-flow-col gap-2 overflow-y-scroll justify-start max-w-screen-xl  dark:bg-gray-900 border-red-400" >
          <ScheduleList />
          <ScheduleList />
          <ScheduleList />
          <ScheduleList />
          <ScheduleList />
        </div>

        <section style={{ listStyle: "none", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr)" }} className=" h-auto min-h-screen pt-10 mx-auto max-w-screen-xl  p-2   border-white grid  box-border dark:bg-gray-900">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"> Lihat Nilai </h5>

          {/* <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"> */}
          {categories.map(each => {
            return (
              <LessonCard innerHTML={each.name} src={each.imgUrl} />
            )
          })}

        </section>

      </div>
      // <div style={{ listStyle: "none", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr)" }} className=" max-w-screen-xl  p-2  border border-white grid gap-4 box-border ">




    )
  }
}



function LessonCard(props) {
  const { innerHTML, src } = props

  return (

    <div id="toast-default" class="flex h-max items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
        {/* <img src={src} /> */}
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path></svg>
        {/* <span class="sr-only">Fire icon</span> */}
      </div>
      <div class="ml-3 text-sm font-normal"> {innerHTML} </div>
      <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
        </svg>
      </button>
    </div>

  )
}
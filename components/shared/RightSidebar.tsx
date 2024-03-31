import Link from 'next/link';
import React from 'react'

const hotQuestions = [
  {id: 1, title: 'How to create a custom hook in React?'},
  {id: 2, title: 'How to use React Router?'},
  {id: 3, title: 'How to use React Context?'},
  {id: 4, title: 'How to use React Query?'},
  {id: 5, title: 'How to use React Query?'},
];

const RightSidebar = () => {
  return (
   <section className='background-light900_dark200 light-border sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 
   pt-36 shadow-light-300 dark:shadow-none max-xl:hidden'>
      <div>
        <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-[30px]'>
          {hotQuestions.map((question) => (
            <Link
            href={`/questions/${question.id}`}
            key={question.id}
            className='flex cursor-pointer items-center justify-between gap-7'
            >

            </Link>
          )}
        </div>
      </div>
      <div className='mt-16'>

      </div>
   </section>
  )
}

export default RightSidebar
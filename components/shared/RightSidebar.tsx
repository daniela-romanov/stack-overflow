import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import RenderTag from './RenderTag';

const hotQuestions = [
  {id: 1, title: 'How to create a custom hook in React?'},
  {id: 2, title: 'How to use React Router?'},
  {id: 3, title: 'How to use React Context?'},
  {id: 4, title: 'How to use React Context?'},
  {id: 5, title: 'How to use React Query?'},
];

const popularTags = [
  {id: 1, name: 'React', totalQuestions: 5},
  {id: 2, name: 'JavaScript', totalQuestions: 10}, 
  {id: 3, name: 'Router', totalQuestions: 3},
  {id: 4, name: 'Context', totalQuestions: 2},
  {id: 5, name: 'React Query', totalQuestions: 4},
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
              <p className='body-medium text-dark500_light700'>{question.title}</p>
              <Image
              src="/assets/icons/chevron-right.svg"
              alt="chevron right"
              width={20}
              height={20}
              className='invert-colors'
              />
            </Link>
          ))}
        </div>
      </div>
      <div className='mt-16'>
      <h3 className='h3-bold text-dark200_light900'>Popular Tags</h3>
            <div className='mt-7 flex flex-col gap-4'>
              {popularTags.map((tag) => (
                  <RenderTag 
                    key={tag.id.toString()} // Convert tag.id to a string
                    _id={tag.id.toString()} // Convert tag.id to a string
                    name={tag.name}
                    totalQuestions={tag.totalQuestions}
                    showCount

                  />))
              }
          
            </div>
      </div>
   </section>
  )
}

export default RightSidebar
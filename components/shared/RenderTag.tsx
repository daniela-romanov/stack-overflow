import Link from 'next/link';
import React from 'react'

interface Props {
  _id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

const RenderTag = ({_id, name, totalQuestions, showCount}: Props) => {
  return (
    <Link 
    href={`/tags/${_id}`} className='flex justify-between gap-2'
    />
  )
}

export default RenderTag
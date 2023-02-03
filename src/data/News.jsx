import React from 'react'
import { Link } from "react-router-dom"

import * as Icon from "@heroicons/react/20/solid"

const newsContent = [
  {
    id: 3,
    type: 'acad',
    title: 'Obtained Ph.D. from University Grenoble-Alpes',
    date: 'December 9th, 2022',
    content: <><q>Learning sub-grid dynamics in idealized turbulent systems</q>.</>,
    res: [
      ['docs', 'Thesis', '#']
    ]
  },
  {
    id: 2,
    type: 'spub',
    title: <>New paper accepted in <i>Journal of Advances in Modeling Earth Systems</i></>,
    date: 'September  27th, 2022',
    content: <>Our paper <q><i>A posteriori</i> learning for quasi-geostrophic turbulence parametrization</q> has been accepted for publication.</>,
    res: [
      ['docs', 'Preprint', 'https://arxiv.org/pdf/2204.03911'],
      ['code', 'Code', '#']
    ]
  },
  {
    id: 1,
    type: 'spub',
    title: <>New paper accepted in <i>Physical Review Fluids</i></>,
    date: 'February  1st, 2021',
    content: <>Our paper <q>Physical invariance in neural networks for subgrid-scale scalar flux modeling</q> has been accepted for publication.</>,
    res: [
      ['docs', 'Preprint', 'https://arxiv.org/pdf/2010.04663'],
      ['code', 'Code', '#']
    ]
  },
  {
    id: 0,
    type: 'acad',
    title: 'Started Ph.D. program at University Grenoble-Alpes',
    date: 'October 1st, 2019',
    content: <><q>Subgrid modeling using machine learning in fluid dynamics</q> with G. Balarac — LEGI, J. Le Sommer — IGE and R. Fablet — IMT Atlantique.</>,
    res: []
  }
]

function PostIcon({ type, className }) {
  const iconTypeMap = {
    'acad': <Icon.AcademicCapIcon className={className} />,
    'spub': <Icon.BookOpenIcon className={className} />,
    'docs': <Icon.DocumentArrowDownIcon className={className} />,
    'code': <Icon.CodeBracketSquareIcon className={className} />
  }

  return (
    iconTypeMap[type]
  )
}

export default function News() {
  return (
    <article>
      <ol className="relative mx-8 my-8 border-l border-gray-400 dark:border-gray-300">
      {newsContent.map((news) => (
        <li key={news.id} className="mb-10 ml-6">
          <span className="
            absolute flex 
            items-center justify-center 
            w-6 h-6
            rounded-full
            -left-3
            bg-blue-100 dark:bg-blue-900 
            ring-8 ring-white dark:ring-gray-800 "
          >
            <PostIcon type={news.type} className="w-4 h-4 text-blue-800 dark:text-blue-300" />
          </span>
          <h1 className="mb-1 text-lg uppercase font-semibold">{news.title}</h1>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{news.date}</time>
          <p className="mb-4 text-sm font-normal">{news.content}</p>
          {news.res.map(([type, title, url]) => (
            <a 
              key={title}
              href={url}
              className="
                inline-flex items-center focus:z-10 focus:outline-none
                px-4 py-2 mr-2 
                text-sm font-medium hover:text-blue-700 dark:hover:text-white focus:text-blue-700
                rounded-lg border border-gray-200 dark:border-gray-600 
                hover:bg-gray-100 dark:hover:bg-gray-700
                focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 "
            >
              <PostIcon type={type} className="w-4 h-4 mr-2" />
              {title}
            </a>
          ))}
        </li>
      ))}
      </ol>
      <ul className="flex justify-center my-12">
        <li>
          <Link 
            to="/" 
            className="px-3 py-2 uppercase text-xs hover:text-blue-700 dark:hover:text-white"
          >
            Prev
          </Link>
        </li>
        <li>
          <Link 
            to="/" 
            className="px-3 py-2 font-bold text-xs text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
          >
            1
          </Link>
        </li>
        <li>
          <Link 
            to="/" 
            className="px-3 py-2 uppercase text-xs hover:text-blue-700 dark:hover:text-white"
          >
            Next
          </Link>
        </li>
      </ul>
    </article>
  )
}

import React from 'react'
import { Link } from "react-router-dom"

import { AcademicCapIcon, BookOpenIcon, DocumentArrowDownIcon, CodeBracketSquareIcon } from "@heroicons/react/20/solid"

export default function News() {
  return (
    <article>
      <ol className="relative mx-8 my-8 border-l border-gray-400 dark:border-gray-300">                  
        <li className="mb-10 ml-6">
          <span className="circle"><AcademicCapIcon className="w-4 h-4 text-blue-800 dark:text-blue-300" /></span>
          <h1 className="mb-1 text-lg uppercase font-semibold">Obtained Ph.D. from University Grenoble-Alpes</h1>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 9th, 2022</time>
          <p className="mb-4 text-sm font-normal"><q>Learning sub-grid dynamics in idealized turbulent systems</q>.</p>
          <a 
            href="#" 
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-600 btn-base"
          >
            <DocumentArrowDownIcon className="w-4 h-4 mr-2" />
            Thesis
          </a>
        </li>
        <li className="mb-10 ml-6">
          <span className="circle"><BookOpenIcon className="w-4 h-4 text-blue-800 dark:text-blue-300" /></span>
          <h1 className="mb-1 text-lg uppercase font-semibold">New paper accepted in <i>Journal of Advances in Modeling Earth Systems</i></h1>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September  27th, 2022</time>
          <p className="mb-4 text-sm font-normal">Our paper <q><i>A posteriori</i> learning for quasi-geostrophic turbulence parametrization</q> has been accepted for publication.</p>
          <a 
            href="https://arxiv.org/pdf/2204.03911" 
            className="inline-flex items-center px-4 py-2 mr-2 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-600 btn-base"
          >
            <DocumentArrowDownIcon className="w-4 h-4 mr-2" />
            Preprint
          </a>
          <a 
            href="#" 
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-600 btn-base"
          >
            <CodeBracketSquareIcon className="w-4 h-4 mr-2" />
            Code
          </a>
        </li>
        <li className="mb-10 ml-6">
          <span className="circle"><BookOpenIcon className="w-4 h-4 text-blue-800 dark:text-blue-300" /></span>
          <h1 className="mb-1 text-lg uppercase font-semibold">New paper accepted in <i>Physical Review Fluids</i></h1>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February  1st, 2021</time>
          <p className="mb-4 text-sm font-normal">Our paper <q>Physical invariance in neural networks for subgrid-scale scalar flux modeling</q> has been accepted for publication.</p>
          <a 
            href="https://arxiv.org/pdf/2010.04663" 
            className="inline-flex items-center px-4 py-2 mr-2 text-sm font-medium border rounded-lg border-gray-200 dark:border-gray-600 btn-base"
          >
            <DocumentArrowDownIcon className="w-4 h-4 mr-2" />
            Preprint
          </a>
          <a 
            href="#" 
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-600 btn-base"
          >
            <CodeBracketSquareIcon className="w-4 h-4 mr-2" />
            Code
          </a>
        </li>
        <li className="ml-6">
          <span className="circle"><AcademicCapIcon className="w-4 h-4 text-blue-800 dark:text-blue-300" /></span>
          <h1 className="mb-1 text-lg uppercase font-semibold">Started Ph.D. program at University Grenoble-Alpes</h1>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 1st, 2019</time>
          <p className="text-sm font-normal"><q>Subgrid modeling using machine learning in fluid dynamics</q> with G. Balarac — LEGI, J. Le Sommer — IGE and R. Fablet — IMT Atlantique.</p>
        </li>
      </ol>
      <ul className="flex justify-center my-12">
        <li>
          <Link 
            to="/" 
            className="px-3 py-2 ml-0 leading-tight uppercase text-xs rounded-l-lg border border-gray-300 dark:border-gray-700 btn-base"
          >
            Prev
          </Link>
        </li>
        <li>
          <Link 
            to="/" 
            className="px-3 py-2 leading-tight text-xs border border-gray-300 dark:border-gray-700 btn-base"
          >
            1
          </Link>
        </li>
        <li>
          <Link 
            to="/" 
            className="px-3 py-2 leading-tight uppercase text-xs rounded-r-lg border border-gray-300 dark:border-gray-700 btn-base"
          >
            Next
          </Link>
        </li>
      </ul>
    </article>
  )
}

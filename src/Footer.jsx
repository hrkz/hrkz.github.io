import React from 'react'
import { Link } from "react-router-dom"

import { GithubIcon, TwitterIcon } from "./Home"

export default function Footer() {
  return (
    <footer className="relative mt-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 py-2 md:justify-items-center">
        <div>
          <h5 className="mb-6 text-sm font-semibold uppercase">About</h5>
          <ul>
            <li className="mb-4">
              <Link 
                to="about#contact"
                className="hover:underline"
              >
                Contact
              </Link>
            </li>
            <li className="mb-4">
              <Link 
                to="about#cv" 
                className="hover:underline"
              >
                CV
              </Link>
            </li>
            <li>
              <Link 
                to="about#climbing" 
                className="hover:underline"
              >
                Climbing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase">Research</h2>
          <ul>
            <li className="mb-4">
              <Link 
                to="research#publications" 
                className="hover:underline"
              >
                Publications
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="research#talks" 
                className="hover:underline"
              >
                Talks
              </Link>
            </li>
            <li>
              <Link
                to="research#teaching" 
                className="hover:underline"
              >
                Teaching
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 text-sm font-semibold uppercase">Projects</h5>
          <ul>
            <li className="mb-4">
              <Link 
                to="projects#logic" 
                className="hover:underline"
              >
                Logic
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="projects#matter" 
                className="hover:underline"
              >
                Matter
              </Link>
            </li>
            <li>
              <Link 
                to="projects#ideal" 
                className="hover:underline"
              >
                Ideal
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 text-sm font-semibold uppercase">Blog</h5>
          <ul>
            <li className="mb-4">
              <Link
                to="post/latest" 
                className="hover:underline"
              >
                Latest post
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="post/random" 
                className="hover:underline"
              >
                Random post
              </Link>
            </li>
            <li className="mb-4">
              <a
                href="https://github.com/hrkz/hrkz.github.io"
                className="hover:underline"
              >
                Repo
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="py-2 my-4 border-gray-400 dark:border-gray-300" />
      <div className="md:flex md:justify-between">
        <span className="md:text-center text-sm">
          © 2024 Hugo Frezat. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 md:justify-center md:mt-0">
          <a 
            href="https://github.com/hrkz/"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <GithubIcon />
          </a>
          <a 
            href="#" 
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}

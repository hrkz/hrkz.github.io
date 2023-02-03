import React from 'react'
import { Link } from "react-router-dom"

import { Social } from "./Home"

export default function Footer() {
  return (
    <footer className="relative mt-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 py-2 md:justify-items-center">
      {[
        ['About', [['Contact', '/about#contact'], ['CV', '/about#cv'], ['Climbing', '/about#climbing']]],
        ['Research', [['Publications', '/research#publications'], ['Talks', '/research#talks'], ['Teaching', '/research#teaching']]],
        ['Projects', [['Logic', '/projects#logic'], ['Matter', '/projects#matter'], ['Ideal', '/projects#ideal']]],
        ['Blog', [['Latest post', '/blog#latest'], ['Random post', '/blog#random'], ['Repo', '/blog#repo']]],
      ].map(([menu, sub]) => (
        <div key={menu}>
          <h5 className="mb-6 text-sm font-semibold uppercase">{menu}</h5>
          <ul>
            {sub.map(([title, url]) => (
              <li key={title} className="mb-4">
                <Link 
                  to={url}
                  className="hover:underline"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
      <hr className="py-2 my-4 border-gray-400 dark:border-gray-300" />
      <div className="md:flex md:justify-between">
        <span className="md:text-center text-sm">
          © 2023 Hugo Frezat. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 md:justify-center md:mt-0">
          <Social name="GitHub" url="https://github.com/hrkz/" />
          <Social name="Twitter" url="#" />
        </div>
      </div>
    </footer>
  )
}

import React from 'react'
import { Link, useLocation } from "react-router-dom"

import { GithubIcon, TwitterIcon } from "./Home"
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid"

export default function Header() {
  const location = useLocation();
  
  const [navOpen, setNavOpen] = React.useState(false);
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  React.useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);
  
  return (
    <header className="relative px-2 mb-16 border-b border-gray-400 dark:border-gray-300">
      <div className="flex flex-wrap min-w-full px-4">
        <div className="flex w-full justify-between md:w-auto md:static md:block md:justify-start">
          <Link 
            to="/" 
            className="inline-block py-2 mr-4 font-bold uppercase text-sm whitespace-nowrap"
          >
            hrkz
          </Link>
          <button
            className="block md:hidden cursor-pointer reading-none px-3 border border-solid border-transparent"
            type="button"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="block relative w-6 h-px rounded-sm bg-gray-600 dark:bg-gray-300"></span>
            <span className="block relative w-6 h-px rounded-sm bg-gray-600 dark:bg-gray-300 mt-1"></span>
            <span className="block relative w-6 h-px rounded-sm bg-gray-600 dark:bg-gray-300 mt-1"></span>
          </button>
        </div>
        <nav 
          className={`
            flex-grow md:flex items-center 
            ${ navOpen 
              ? "flex" 
              : "hidden"
            }
          `}
        >
          <ul className="flex flex-col md:flex-row md:ml-auto list-none">
            <li 
              className={`
                nav-item
                ${ location.pathname === '/about' 
                ? "font-bold text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white" 
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }
            `}>
              <Link 
                to="about" 
                className="flex items-center px-3 py-2 text-sm"
              >
                About
              </Link>
            </li>
            <li 
              className={`
                nav-item
                ${ location.pathname === '/research' 
                ? "font-bold text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white" 
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }
            `}>
              <Link 
                to="research" 
                className="flex items-center px-3 py-2 text-sm"
              >
                Research
              </Link>
            </li>
            <li 
              className={`
                nav-item
                ${ location.pathname === '/projects' 
                  ? "font-bold text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white" 
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }
            `}>
              <Link 
                to="projects" 
                className="flex items-center px-3 py-2 text-sm"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <a 
                href="https://github.com/hrkz/"
                className="flex items-center px-3 py-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <GithubIcon />
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#"
                className="flex items-center px-3 py-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <TwitterIcon />
              </a>
            </li>
            <li className="nav-item">
              <button
                id="theme-toggle"
                className="px-3 my-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border-l border-gray-900 dark:border-white"
                type="button"
                onClick={toggleTheme}
              >
                { theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" /> }
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

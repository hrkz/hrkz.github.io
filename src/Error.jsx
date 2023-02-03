import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <main className="
      mx-auto max-w-screen-sm h-full min-h-screen
      py-8 px-4 lg:py-16 lg:px-6
      text-center
      text-gray-900 dark:text-white "
    >
      <h1 className="mb-4 tracking-tight text-7xl font-extrabold">404</h1>
      <p className="mb-4 tracking-tight text-3xl lg:text-4xl font-bold">Page not found.</p>
      <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">Sorry, you're on the wrong way. You'll find more to explore on the home page.</p>
      <Link 
        to='/' 
        className="
          inline-flex rounded-lg 
          px-5 py-2.5 my-4 
          bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 
          focus:ring-2 focus:outline-none focus:ring-gray-400 
          text-sm text-center font-bold "
      >
        Back to Homepage
      </Link>
    </main>
  )
}

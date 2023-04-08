import React from 'react'

function Newsletter() {
  return (
   <>
     <div className="container mx-auto py-10 px-10 lg:px-0">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            ipsum eu nunc commodo posuere et sit amet ligula.
          </p>
        </div>
        <div className="mt-10 lg:mt-0 w-full md:w-1/2">
          <form className="flex lg:justify-center">
            <div className="flex w-full max-w-md items-center space-x-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="email"
                placeholder="Email"
              />
              <button className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:ring-offset-1 dark:hover:bg-indigo-700 dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-indigo-400 disabled:pointer-events-none dark:focus:ring-offset-gray-900 bg-indigo-600 dark:bg-indigo-600 text-white hover:bg-indigo-700 h-10 py-2 px-4">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
   </>
  )
}

export default Newsletter
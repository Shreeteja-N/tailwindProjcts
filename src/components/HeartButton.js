import React, { useState } from 'react'

function HeartButton() {

    const [liked,setLiked]=useState(false)

    
  const toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <div className= "flex justify-center ">
      <button onClick={toggleLike} className={`
        p-2 rounded-full hover:bg-gray-200 focus:outline-none 
        ${liked ? 'bg-red-500 text-white' : 'text-gray-500 border border-gray-300'}
      `} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
      <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318c.165-1.193.52-2.318 1.174-3.377.577-1.059 1.25-2.048 2.063-3.037l4.034-4.034a4.004 4.004 0 0 1 5.656 0l4.034 4.034c.813.989 1.484 1.978 2.063 3.037.654 1.059 1.009 2.184 1.174 3.377a16.76 16.76 0 0 1 -1.174 3.378c-.397.501-.794.910-1.212 1.247-1.404.836-3.138 1.531-4.974 2.063-1.836.531-3.87.96-5.904 1.288-2.034.328-4.068.491-6.102.491a16.76 16.76 0 0 1 -3.378-1.174z"
          />
    </svg>
    </button>
    </div>
  )
}

export default HeartButton

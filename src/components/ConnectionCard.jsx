import React from 'react'
import { Link } from 'react-router-dom'

const ConnectionCard = ({ connection }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = connection

  return (
    <div className='group flex max-w-150 items-center gap-4 p-4 px-10 rounded-2xl
    bg-white/5 border border-white/10 backdrop-blur-md
    hover:bg-white/10 hover:border-white/20
    transition-all duration-300 shadow-md hover:shadow-xl'>

      {/* Avatar */}
      <div className='relative'>
        <img
          src={photoUrl}
          alt="profile"
          className='w-16 h-16 rounded-full object-cover ring-2 ring-gray-700 group-hover:ring-indigo-400 transition'
        />

        {/* online indicator (optional static style) */}
        <span className='absolute bottom-1 right-1 w-3 h-3 bg-green-400 border-2 border-black rounded-full'></span>
      </div>

      {/* Info */}
      <div className='flex flex-col'>
        <h2 className='text-white font-semibold text-base'>
          {firstName} {lastName}
        </h2>

        {age && gender && (
          <p className='text-xs text-gray-400'>
            {age} • {gender}
          </p>
        )}

        <p className='text-sm text-gray-500 mt-1 line-clamp-2 max-w-md'>
          {about || "No additional details available"}
        </p>

        {/* subtle label instead of buttons */}
        <span className='mt-2 text-xs text-indigo-500'>
          Connected
        </span>
      </div>
      <Link to={"/chat/"+_id}>Chat</Link>
    </div>
  )
}

export default ConnectionCard
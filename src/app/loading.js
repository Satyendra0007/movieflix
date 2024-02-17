import React from 'react'

export default function loading() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="rounded-md h-12 w-12 border-4 border-t-4 border-yellow-500 animate-spin absolute"></div>
    </div>
  )
}

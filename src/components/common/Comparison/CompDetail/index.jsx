import React from 'react'

const CompDetail = ({title}) => {
  return (
    <>
        <div className="flex justify-center items-center rounded-sm p-2 text-center md:text-lg xl:text-xl w-32 sm:w-36 md:w-44 xl:w-48 h-16 hover:bg-primary-100 transition duration-300 ease-in-out">{title}</div>
    </>
  )
}

export default CompDetail
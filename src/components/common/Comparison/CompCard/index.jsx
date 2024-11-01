import React from 'react'

const CompCard = ({title}) => {
  return (
    <>
        <div className="flex justify-center items-center p-2 rounded-sm md:text-lg xl:text-xl bg-primary-300 w-[100px] sm:w-36 md:w-44 xl:w-48 h-16">{title}</div>
    </>
  )
}

export default CompCard
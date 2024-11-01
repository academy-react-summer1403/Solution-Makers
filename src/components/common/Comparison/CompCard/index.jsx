import React from 'react'

const CompCard = ({title}) => {
  return (
    <>
        <div className="p-2 text-center md:text-lg xl:text-xl bg-primary-100 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48">{title}</div>
    </>
  )
}

export default CompCard
import React from 'react'

type HeaderProps = {
  name: string
}

const index = ({name}: HeaderProps) => {
  return (
    <div>
      <h1 className='text-2xl font-semibold text-gray-700'>{ name}</h1>
    </div>
  )
}

export default index;
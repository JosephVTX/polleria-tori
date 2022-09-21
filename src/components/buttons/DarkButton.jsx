import React from 'react'

export const DarkButton = ({content}) => {
  return (
    <>
        <button className="font-ThunderhousePro bg-black text-white px-[60px] py-[20px] rounded-[40px] text-[24px] text-bold tracking-[2px]">
              {content}
        </button>
    </>
  )
}

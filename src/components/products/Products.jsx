import React from "react";

export const Products = () => {
  return (
    <div className="w-[90%] m-auto">
        <div className="grid grid-cols-1 smm:grid-cols-2 xl:px-40 xl:grid-cols-4  items-center justify-items-center gap-2">
      <div className="overflow-hidden h-[300px] rounded-md ">
        <img className="w-[300px] h-full" src="https://images.squarespace-cdn.com/content/v1/604f63fbcbfeea1a501c8b6b/1653759484275-Z4M504VJDEH90OB2SKP5/image-asset.jpeg" />
      </div>
      <div  className="overflow-hidden  h-[300px] rounded-md">
        <img className="w-[300px] h-full" src="https://images.squarespace-cdn.com/content/v1/604f63fbcbfeea1a501c8b6b/1653500993564-KOW7JHJA4C5LAB7RM0Q4/image-asset.jpeg" />
      </div>
      <div className="overflow-hidden h-[300px] rounded-md"> 
        <img className="w-[300px] h-full"  src="https://images.squarespace-cdn.com/content/v1/604f63fbcbfeea1a501c8b6b/1653328034158-6SRHK1XM6QL776MX6Z9W/image-asset.jpeg" />
      </div>
      <div  className="overflow-hidden  h-[300px] rounded-md">
        <img className="w-[300px]" src="https://images.squarespace-cdn.com/content/v1/604f63fbcbfeea1a501c8b6b/1653235252866-7PLX81XMIP5NIJZ24ORP/image-asset.jpeg" />
      </div>
    </div>
    </div>
  );
};

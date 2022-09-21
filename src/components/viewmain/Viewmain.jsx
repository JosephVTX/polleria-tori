import React from "react";
import { DarkButton } from "../buttons/DarkButton";
import chickenLogo from "./img/chicken_logo.png";


export const Viewmain = ({ contactArr }) => {

    
  return (
    <div>
      <div className="bg-pollo bg-cover bg-center font-ThunderhousePro h-[900px] w-full   p-3 flex items-center justify-center flex-col gap-[20px]">
        <img className="w-[500px]" src={chickenLogo} />

        {contactArr.map((e, i) => (
          <div key={i}>
            <DarkButton content={e}/>
          </div>
        ))}
      </div>

      <img className="w-full px-10" src="https://images.squarespace-cdn.com/content/v1/604f63fbcbfeea1a501c8b6b/1618275862241-8QPSZ1QQLA90MSRJZXFL/TRES+PLATOS.png?format=1000w" />
    </div>
  );
};

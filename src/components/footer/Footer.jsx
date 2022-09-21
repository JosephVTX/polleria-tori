import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="font-antique-olive-condensed font-light mt-[20px] p-[30px] w-full bg-[#F5D395] flex justify-between items-center">
        <div className="details">
          <div className="restaurant">
            <h2 className="font-bold py-[2px] text-[20px]">
              TORI MIRAFLORES RESTAURANTE
            </h2>
            <p className="py-[2px]">
              Lunes a Sabados de 12:30 P.M. a 10.30 P.M.
            </p>
            <p className="py-[2px]">Dirección los Alisos 2456</p>
          </div>

          <div className="delivery">
            <h2 className="font-bold py-[2px] text-[20px]">TORI DELIVERY</h2>
            <p className="py-[2px]">
              Lunes a Sábado de 12:00 P.M. a 10:00 P.M.
            </p>
            <p className="py-[2px]">
              Domingos y Feriados de 11:30 A.M. a 10:00 P.M.
            </p>
            <p className="py-[2px] mt-[10px]">
              {"PIDE LLAMANDO AL: (01) 500 - 6188"}
            </p>
          </div>

          <div className="atencion">
            <h2 className="font-bold py-[2px] text-[20px]">
              ATENCIÓN AL CLIENTE
            </h2>
            <p className="py-[2px]">{"TELÉFONO: 986 592 177"}</p>
          </div>
        </div>

        <div className="book-claimer h-[150px] w-[200px]">

            <img className="h-full w-full" src="https://images.squarespace-cdn.com/content/v1/604f63fbcbfeea1a501c8b6b/51b2faf5-cc54-4c03-b566-89dde8e4627a/libro+rojor+transparente.png?format=300w"/>
        </div>
      </footer>
    </>
  );
};

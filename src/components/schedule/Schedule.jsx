import React from "react";

export const Schedule = () => {
  return (
    <div className="w-[90%] m-auto mt-[60px] mq-1380:flex justify-between text-[#C94427] mq-1080:justify-between px-[200px]">
      <div>
        <h2 className="text-[60px]  font-ThunderhousePro ">Conoce nuestros horarios</h2>
      </div>

      <div className="py-6 font-antique-olive-condensed text-[30px]">
        <h2 className="font-bold">RESTAURANTE</h2>
        <p className="mb-4">Lunes a Domingo de 12:30 P.M a 10:30 P.M.</p>
        <h2 className="font-bold">DELIVERY</h2>
        <p>Lunes a Sábado de 12:00 P.M a 10:30 P.M.</p>
        <p>Domingos y Feriados de 11:30 A.M. a 10:00 P.M.</p>
      </div>
    </div>
  );
};

import React from 'react'
import { DarkButton } from '../buttons/DarkButton'

export const Delivery = () => {
  return (
    <div>

        <h2 className='font-ThunderhousePro text-center tracking-widest text-[60px]'>

            POR DELIVERY 

            <br />

            DESCUBRE TODO LO QUE TENEMOS PARA TI

        </h2>

        <p className='px-2 text-center mt-4 font-antique-olive-condensed text-[26px]'>POLLO A LA BRASA, PAPAS FRITAS 100%, CHAUFITA, NUESTRA ENSALADA CLÁSICA Y NUESTRAS YA FAMOSAS SALSAS MT.</p>


        <div className="buttons flex justify-center pt-10 gap-4">

            <DarkButton content={"LA CARTA"}/>
            <DarkButton content={"PROMOS"}/>
        </div>


        <img className='mt-10' src="https://images.squarespace-cdn.com/content/v1/604f63fbcbfeea1a501c8b6b/1615852157678-UCVE4LEQ03SCT92P29EJ/edit+mesa+familia+cenital+manos.jpg?format=2500w" alt="" />
    </div>
  )
}

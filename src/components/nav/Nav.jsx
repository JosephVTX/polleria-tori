import React, {useState} from 'react'
import menu_icon from "./img/menu_icon.svg"
import close_icon from "./img/close_icon.svg"
export const Nav = ({menuArr}) => {


  let [menuOpen, setMenuOpen] = useState(true)
  

  
  const toggleMenu = () => setMenuOpen(pe => !pe)
  return (
    <>
        <nav className={`nav h-[100px]  font-antique-olive-condensed lg:flex relative lg:justify-end bg-[#E2AC26] lg:h-[120px] items-center`}>

            <img className='block lg:hidden h-[80px]  left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] ' src="https://images.squarespace-cdn.com/content/v1/604f63fbcbfeea1a501c8b6b/1616606622243-ARYES93KR5NF1YZEGNJM/logo?format=1000w"/>
            <img className='hidden lg:block h-[80px] absolute lg:left-[50%] lg:translate-x-[-50%] z-[1000]' src="https://images.squarespace-cdn.com/content/v1/604f63fbcbfeea1a501c8b6b/1615830557138-G9XTCBQ8JKFUZP89Y6OG/LOGO+2+ROJO.png"/>
            <img onClick={toggleMenu} src={menu_icon} className="h-[30px] absolute translate-y-[-50%] top-[50%] left-[30px] lg:hidden" />
            
            <ul className={`transition-transform duration-500 ${menuOpen ? 'translate-x-[-100%]': ''} lg:translate-x-0 z-[100]  lg:flex  top-0 w-full bg-[#E2AC26] lg:static lg:h-max h-screen fixed text-[30px]  lg:text-[26px] lg:justify-evenly lg:w-[40%]`}>
            <img onClick={toggleMenu} src={close_icon} className="lg:hidden absolute h-[30px] top-[15px] right-[15px]"/>
                {menuArr.map((e, i)=>{

                    return(
                        <div key={i}>
                            <li><a className={`flex h-[80px] lg:h-[60px] text-[#C94427]  items-center justify-center`} href="#">{e}</a></li>
                        </div>
                    )
                })}
            </ul>
        </nav>
    </>
  )
}



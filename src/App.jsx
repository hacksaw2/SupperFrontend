import { useState } from 'react'
import './App.css'
import HamburgerSvg from '../Svgs/HamburgerSvg'
import Cross from '../Svgs/Cross'
import AppSvg from '../Svgs/AppSvg'

function App() {
  const [hamburger, setHamburger] = useState(false)
  const [hamIcon, setHamIcon] = useState(false)
const [cross, setCross] = useState(false)
  const sideNav = ()=>{

    setHamburger(!hamburger)

    setHamIcon(!hamIcon)

    setCross(!cross)

  }

  return (
    <>
     <div className="x ">



<div className="navbar h-16 bg-red-500 p-2 ">

  <ul className='flex '>

<li className='w-[20vw]'><button onClick={sideNav} className=' lg:hidden transition-all delay-200 duration-500 ease-in-out ' >
            <div className="hamIcon "  style= { {display : cross ? 'block': 'none'}} ><HamburgerSvg/></div>
            <div className="cross" style= { {display : cross ? 'none': 'block'}}><Cross/></div>
</button>
</li>

<li className='lg:w-[50vw] hidden  lg:flex  gap-12 text-lg mr-10'>
  <div>Home</div>
  <div>About</div>
  <div>Contact</div>
</li>

<li className='w-[80vw] lg:w-[50vw] h-12 flex justify-end items-center font-bold font-serif text-lg mr-2 '>Supper<AppSvg/></li>


</ul>

</div>




      
      <div className="side nav lg:hidden" >


<ul  style= { {display : hamburger ? 'none': 'block'}} className=' w-[100vw ] p-1' >
  <li className='border-b-1'>Home</li>
  <li className='border-b-1'>About</li>
  <li className=''></li>
</ul>


      </div>

     
      
      
      
      
      
      
      
      </div>
    </>
  )
}

export default App

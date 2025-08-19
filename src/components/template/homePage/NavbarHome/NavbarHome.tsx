import React from 'react'
import { Link } from 'react-router-dom'
import BtnTheme from '../../../modules/BtnTheme/BtnTheme'



const NavbarHome:React.FC = () =>{
  return (
    <section className="block bg-bg-home dark:bg-bg-dark border-b border-b-text dark:border-b-text-dark">
        <div className="container">
            <div className="flex justify-between items-center py-4">
                <Link to='/' className='block font-danaBlack lg:text-3xl md:text-2xl text-lg select-none dark:text-text-dark'>کــــــــבنــــــگار</Link>
                <div className="flex justify-between items-center gap-x-4">
                    <BtnTheme/>
                    <Link to='/Login' className='btn_primary'>شروع کنید</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NavbarHome
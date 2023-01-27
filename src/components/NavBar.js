import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">EcommerceDieguidev</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end md:hidden">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
        <ul className='hidden md:flex md:gap-4 pr-12'>
          <li>Kitchen</li>
          <li>Celular</li>
          <li>Tecnology</li>
        </ul>
        <CartWidget />
      </div>
    </nav>
    // <div className='h-11 w-screen bg-slate-600 flex flex-'>
    //   {/* <h1>Ecommerce-Dieguidev</h1>

    //   <ul className='flex md:'>
    //     <li>Kitchen</li>
    //     <li>Celular</li>
    //     <li>Tecnology</li>
    //     <li> <CartWidget /> </li>
    //   </ul> */}

    // </div>
  );
};

export default Navbar;
import React from 'react';
import Container from './Container';

const Navbar = () => {
    return (

    <div className='py-4 bg-white'>
          <Container>
            <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-2xl font-bold text-black'>CS — Ticket System</h1>
            </div>

            <div>
                <ul className='flex justify-between gap-[20px] items-center text-black text-[20px]'>
                    <li className='cursor-pointer'>Home</li>
                    <li  className='cursor-pointer'>FAQ</li>
                    <li className='cursor-pointer'>Changelog</li>
                    <li className='cursor-pointer'>Blog</li>
                    <li className='cursor-pointer'>Download</li>
                    <li className='cursor-pointer'>Contact</li>
                    <button className='px-5 py-3 bg-linear-to-r from-[#6b35e5] to-[#9d60f2] text-xl text-white font-semibold rounded-lg cursor-pointer'>+ New Ticket</button>
                </ul>

            </div>
        </div>

        </Container>


    </div>
      
        
    );
};

export default Navbar;
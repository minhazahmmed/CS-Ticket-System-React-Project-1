import React from 'react';
import Container from './Container';

const Card = ({inProgressCount, resolvedCount}) => {
    return (
        <Container>
             <div className='flex flex-col md:flex-row justify-between text-center items-center mt-[50px] mb-[50px] gap-8 '>
                <div className='bg-linear-to-r from-[#642fe3] to-[#8d52ee] p-[40px] w-full md:w-[50%] rounded-lg'>
                    <p className='text-[24px]'>In-Progress</p>
                    <h1 className='font-semibold text-[60px] '>{inProgressCount}</h1>
                </div>

                <div className='bg-linear-to-r from-[#54cf68] to-[#01827a] p-[40px] w-full md:w-[50%] rounded-lg'>
                    <p className='text-[24px]'>Resolved</p>
                    <h1 className='font-semibold text-[60px] '>{resolvedCount}</h1>
                </div>
            </div>
        </Container>
    );
};

export default Card;

import React from 'react';

const Issue = ({issue}) => {
    const {id, title, description, customer, priority, status, createDate} = issue;
    return (
        <div className='bg-white p-4 gap-3 mb-2 rounded-lg shadow cursor-pointer text-black'>
            <div className='flex justify-between'>
                <h1 className='font-semibold'>{title}</h1>
                <p className={`font-semibold px-3 py-1 rounded-lg ${issue.status=="Open" ? 'bg-green-200 text-gray-600' : 'bg-yellow-200 text-gray-600'}`} >{status}</p>
            </div>

            <p className='my-2 text-gray-500'>{description}</p>

            <div className='flex justify-between text-sm'>
                <div className='flex gap-2'>
                    <p className='text-gray-500'>#{id}</p>
                    <p className={`font-semibold ${issue.priority=='HIGH' ? 'text-red-600' : issue.priority=='MEDIUM' ? 'text-yellow-600' : 'text-green-500'}`}>{priority}</p>
                </div>

                <div className='flex gap-2'>
                    <p className='text-gray-500'>{customer}</p>
                    <p className='text-gray-500'>📆 {createDate}</p>
                </div>
            </div>
        </div>
    );
};

export default Issue;

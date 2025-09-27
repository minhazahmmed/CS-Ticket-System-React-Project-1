import React from 'react';

const Status = ({inProgress, resolved, onComplete}) => {
    return (
        <div>
           <div className='bg-white p-4 mb-5'> 
                <h1 className='text-black font-semibold text-[24px] mb-2'>Task Status</h1>
                <div>
                    {inProgress.map(task => (
                        <div key={task.id} className=" border p-2 rounded mb-2">
                            <p className='text-black font-semibold text-[20px] mb-2'>{task.title}</p>
                            <button 
                                className="bg-green-600 text-white px-3 py-2 rounded w-full" 
                                onClick={() => onComplete(task.id)}
                            >
                                Complete
                            </button>
                        </div>
                    ))}
                </div>
           </div>

           <div className='bg-white p-4'>
                <h1 className='text-black font-semibold text-[24px] mb-2'>Resolved Task</h1>
                <div>
                    {resolved.map(task => (
                        <div key={task.id} className="border p-2 rounded mb-2 bg-green-50">
                            <p className='text-black font-semibold text-[20px] mb-2'>{task.title}</p>
                            <span className="text-sm text-gray-600">Resolved</span>
                        </div>
                    ))}
                </div>
           </div>
        </div>
    );
};

export default Status;

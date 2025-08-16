import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex bg-black h-screen' style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className='w-64 text-[#555555]'>
            <div className='flex flex-col justify-between h-full p-4 pt-5'>
            <div className='pt-5'>
                <h2 className='text-2xl font-bold text-white'>Expensify</h2>
                <p className='mt-2 text-sm italic text-white'>Your personalized tracker</p>
            </div>
            <div className='mb-5 flex flex-col space-y-4'>
                <button className='text-white bg-[#582688] border border-solid border-white p-2 rounded'>Income</button>
                <button className='text-white bg-[#582688] border border-solid border-white p-2 rounded'>Expense</button>
                <button className='text-white bg-[#582688] border border-solid border-white p-2 rounded'>Analysis</button>
            </div>
            <div>
                <button className='text-white bg-[#582688] border border-solid border-white p-2 rounded w-full'>Profile</button>
            </div>
            </div>
            
        </div>
        <div className='flex-1 bg-[#141414]'>
            <h1 className='text-white font-bold text-3xl pt-6 pl-6'>Accounting Dashboard</h1>
            <div className='pl-6 flex pt-2'>
                <button className='text-gray-400 pr-2'>Income</button>
                <h1 className='text-white'>|</h1>
                <button className='text-gray-400 pl-2'>Expense</button>
            </div>
            <hr  className='text-gray-800 mt-3'/>
            <div className='grid grid-cols-3 p-6 gap-2 place-items-center'>
                <div className='bg-black border border-solid border-black text-white p-4 rounded max-w-xs w-full'>
                    <h2 className='text-l font-bold'>Income</h2><br />
                    <h1 className='text-2xl font-bold'>$5.5678</h1>
                    <p className='italic text-xs'>Latest: 2025-09-22</p>
                </div>
                <div className='bg-black border border-solid border-black text-white font-semibold p-4 rounded max-w-xs w-full'>
                    <h2 className='text-l font-bold'>Expense</h2><br />
                    <h1 className='text-2xl font-bold'>$5.5678</h1>
                    <p className='italic text-xs'>Latest: 2025-09-22</p>
                </div>
                <div className='bg-black border border-solid border-black text-white font-semibold p-4 rounded max-w-xs w-full'>
                    <h2 className='text-l font-bold'>Income</h2><br />
                    <h1 className='text-2xl font-bold'>$5.5678</h1>
                    <p className='italic text-xs'>Latest: 2025-09-22</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Dashboard

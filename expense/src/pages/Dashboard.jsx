import React, { useState } from 'react'

const Dashboard = () => {
    const [transaction,setTransaction]=useState([{title:"",date:"",status:"",amount:0}])
    const [showForm,setShowForm]=useState(false)
    const [formData,setFormData]=useState([{title:"",data:"",status:"",amount:""}])

    const handleAddTransaction=()=>{
        setTransaction([...transaction,formData])
        setFormData({title:"",data:"",status:"",amount:""})
        setShowForm(false)
    }

    const handleDelete=(index)=>{
        setTransaction(transaction.filter((_,i)=>i!==index))
    }

  return (
    <div className='flex bg-black h-screen' style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className='w-64 text-[#555555]'>
            <div className='flex flex-col justify-between h-full p-4 pt-5'>
            <div className='pt-5'>
                <h2 className='text-2xl font-bold text-white'>Expensify</h2>
                <p className='mt-2 text-sm italic text-white'>Your personalized tracker</p>
            </div>
            <div className='mb-5 flex flex-col space-y-4'>
                <button className='text-white bg-[#582688] border border-solid border-white p-2 rounded'>Home</button>
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
            <hr  className='text-gray-800 mt-3'/>
            <div className='bg-black text-white m-6'>
                <table className='table-auto border-collapse border border-white border-solid w-full text-left '>
                    <thead>
                        <tr>    
                            <th className='border border-white border-solid px-2 py-2'>Title</th>
                            <th className='border border-white border-solid px-2 py-2'>Date</th>
                            <th className='border border-white border-solid px-2 py-2'>Status</th>
                            <th className='border border-white border-solid px-2 py-2'>Amount</th>
                            <th className="border border-white border-solid px-2 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transaction.map((ele,idx)=>(
                            <tr key={idx}>
                                <td className='border border-solid px-2 py-2'>{ele.title}</td>
                                <td className='border border-solid px-2 py-2'>{ele.date}</td>
                                <td className='border border-solid px-2 py-2'>{ele.status}</td>
                                <td className='border border-solid px-2 py-2'>{ele.amount}</td>
                                <td className='border border-solid px-2 py-2'>
                                    <button onClick={() => handleDelete(idx)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800">Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <div>
                    <button className='text-white bg-[#582688] border border-solid border-white px-6 py-2 mt-4 rounded ' onClick={()=>setShowForm(!showForm)}>+ADD</button>
                </div>
                {showForm && (
                    <div>
                        <input 
                        type="text"
                        placeholder='title'
                        value={formData.title}
                        onChange={(e)=>setFormData({...formData,title:e.target.value})} />
                        <input 
                        type="date"
                        placeholder='date'
                        value={formData.date}
                        onChange={(e)=>setFormData({...formData,date:e.target.value})} />
                        <select value={formData.status} onChange={(e)=>setFormData({...formData,status:e.target.value})}>
                            <option value="">Select</option>
                            <option value="Paid">Paid</option>
                            <option value="Pending">Pending</option>
                        </select>
                        <input 
                        type="number"
                        placeholder='Amount'
                        value={formData.amount}
                        onChange={(e)=>setFormData({...formData,amount:e.target.value})} />
                        <button onClick={handleAddTransaction}>Save</button>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Dashboard

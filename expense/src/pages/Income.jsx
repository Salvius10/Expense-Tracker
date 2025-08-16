import React, { useState } from 'react'

const Income = () => {
    const [income,setIncome]=useState([])
    const [formData,setFormData]=useState({source:"",amount:0,date:""})
    const [showForm,setShowForm]=useState(false)
    
    const handleAddIncome=()=>{
        setIncome([...income,formData])
        setFormData({source:"",amount:0,date:""})
        setShowForm(false)
    }
    const handleDelete=(index)=>{
        setIncome(income.filter((ele,i)=>i!==index))
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
            <h1 className='text-white font-bold text-3xl pt-6 pl-6'>Income Accounts</h1><br />
            <hr  className='text-gray-800 mt-3'/>
            <div className='flex justify-center mt-4'>
                <div className='bg-black border border-solid text-white max-w-s text-center p-6 px-30'>
                    <p className='text-l'>Income</p><br />
                    <h1 className='text-3xl font-bold'>{income.reduce((acc,ele)=>acc+Number(ele.amount),0)}</h1>
                    <p className='italic text-xs'>Latest: 16-08-2025</p>
                </div>
            </div>
            <div className='m-6'>
                <table className='border-collapse w-full bg-black text-white mt-4'>
                    <thead>
                        <tr>
                            <td  className='border border-solid px-2 py-2'>Source</td>
                            <td  className='border border-solid px-2 py-2'>Amount</td>
                            <td  className='border border-solid px-2 py-2'>Date</td>
                            <td  className='border border-solid px-2 py-2'>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {income.map((ele,idx)=>(
                            <tr key={idx}>
                                <td className='border border-solid px-2 py-2'>{ele.source}</td>
                                <td className='border border-solid px-2 py-2'>{ele.amount}</td>
                                <td className='border border-solid px-2 py-2'>{ele.date}</td>
                                <td className='border border-solid px-2 py-2'>
                                    <button onClick={() => handleDelete(idx)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800">Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <button className='text-white bg-[#582688] border border-solid border-white px-6 py-2 mt-4 rounded ' onClick={()=>setShowForm(!showForm)}>ADD+</button>
                {showForm && (
                    <div className='bg-black text-white'>
                        <input 
                        type="text"
                        placeholder='Source'
                        value={formData.source}
                        onChange={(e)=>setFormData({...formData,source:e.target.value})} />
                        <input 
                        type="number"
                        placeholder='Amount'
                        value={formData.amount}
                        onChange={(e)=>setFormData({...formData,amount:e.target.value})} />
                        <input 
                        type="date"
                        placeholder='Date'
                        value={formData.date}
                        onChange={(e)=>setFormData({...formData,date:e.target.value})} />
                        <button onClick={handleAddIncome} className='text-white bg-[#582688] border border-solid border-white px-6 py-2 mt-4 rounded'>Save</button>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Income

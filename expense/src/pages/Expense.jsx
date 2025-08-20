import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Expense = () => {
  const { transactions, setTransactions } = useContext(TransactionContext);
  const [formData, setFormData] = useState({ title: "", amount: "", date: "" });

  const handleAddExpense = () => {
    if (!formData.title || !formData.amount) return;

    const newExpense = { ...formData, amount: Number(formData.amount), type: "expense" };
    setTransactions([...transactions, newExpense]);
    setFormData({ title: "", amount: "", date: "" });
  };

  return (
    <div className="flex-1 bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Expense</h1>

      {/* Form */}
      <div className="space-x-2 mb-6 ">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="p-2 rounded text-white"
        />
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="p-2 rounded text-black"
        />
        <input
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          className="p-2 rounded text-black"
        />
        <button
          onClick={handleAddExpense}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-800"
        >
          Add Expense
        </button>
      </div>

      {/* List */}
      <h2 className="text-xl font-bold mb-4">Expense List</h2>
      <ul className="space-y-2">
        {transactions.filter((t) => t.type === "expense").map((t, idx) => (
          <li key={idx} className="bg-[#141414] p-3 rounded">
            {t.title} — ${t.amount} ({t.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expense;

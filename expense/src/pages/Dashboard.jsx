import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Dashboard = () => {
  const { transactions } = useContext(TransactionContext);

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="flex-1 bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Accounting Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-[#141414] p-6 rounded-xl">
          <h2 className="text-lg font-bold">Income</h2>
          <p className="text-2xl font-bold">${totalIncome}</p>
        </div>
        <div className="bg-[#141414] p-6 rounded-xl">
          <h2 className="text-lg font-bold">Expense</h2>
          <p className="text-2xl font-bold">${totalExpense}</p>
        </div>
        <div className="bg-[#141414] p-6 rounded-xl">
          <h2 className="text-lg font-bold">Balance</h2>
          <p className="text-2xl font-bold">${balance}</p>
        </div>
      </div>

      {/* Transactions Table */}
      <h2 className="text-xl font-bold mb-4">All Transactions</h2>
      <table className="table-auto border-collapse border border-gray-600 w-full">
        <thead>
          <tr>
            <th className="border border-gray-600 px-4 py-2">Title</th>
            <th className="border border-gray-600 px-4 py-2">Date</th>
            <th className="border border-gray-600 px-4 py-2">Type</th>
            <th className="border border-gray-600 px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, idx) => (
            <tr key={idx}>
              <td className="border border-gray-600 px-4 py-2">{t.title}</td>
              <td className="border border-gray-600 px-4 py-2">{t.date}</td>
              <td className="border border-gray-600 px-4 py-2 capitalize">
                {t.type}
              </td>
              <td className="border border-gray-600 px-4 py-2">${t.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

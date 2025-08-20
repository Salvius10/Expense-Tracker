import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TransactionProvider } from "./context/TransactionContext";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Expense from "./pages/Expense";

function App() {
  return (
    <TransactionProvider>
      <Router>
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expense" element={<Expense />} />
          </Routes>
        </div>
      </Router>
    </TransactionProvider>
  );
}

export default App;

import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-64 bg-black h-screen p-4">
      <h1 className="text-white text-2xl font-bold">Expensify</h1>
      <p className="text-gray-400">Your personalized tracker</p>

      <div className="flex flex-col gap-4 mt-6">
        <Link to="/">
          <button className="bg-purple-600 text-white p-2 rounded-lg">Home</button>
        </Link>
        <Link to="/income">
          <button className="bg-purple-600 text-white p-2 rounded-lg">Income</button>
        </Link>
        <Link to="/expense">
          <button className="bg-purple-600 text-white p-2 rounded-lg">Expense</button>
        </Link>
        <Link to="/analysis">
          <button className="bg-purple-600 text-white p-2 rounded-lg">Analysis</button>
        </Link>
        <Link to="/profile">
          <button className="bg-purple-600 text-white p-2 rounded-lg">Profile</button>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar

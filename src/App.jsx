import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux" 
import Auth from "./pages/page-authentication/Auth"
import DashboardPage from "./pages/page-dashboard/DashboardPage"
import TransactionHistoryPage from "./pages/page-transaction-history/TransactionHistoryPage"
import IncomeHistoryPage from "./pages/page-income-history/IncomeHistoryPage"
import ExpenseHistoryPage from "./pages/page-expense-history/ExpenseHistoryPage"
import ProfilePage from "./pages/page-profile/ProfilePage"

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Auth />}/>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/transaction-history" element={<TransactionHistoryPage />}/>
          <Route path="/income-history" element={<IncomeHistoryPage />}/>
          <Route path="/expense-history" element={<ExpenseHistoryPage />}/>
          <Route path="/profile" element={<ProfilePage />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App

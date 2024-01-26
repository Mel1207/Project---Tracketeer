import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Auth from "./pages/page-authentication/Auth"
import DashboardPage from "./pages/page-dashboard/DashboardPage"
import TransactionHistoryPage from "./pages/page-transaction-history/TransactionHistoryPage"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import IncomeHistoryPage from "./pages/page-income-history/IncomeHistoryPage"
import ExpenseHistoryPage from "./pages/page-expense-history/ExpenseHistoryPage"
import ProfilePage from "./pages/page-profile/ProfilePage"


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Sidebar />
        <main>
          <div className="container">
            <Routes>
              <Route path="/" exact element={<Auth />}/>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/transaction-history" element={<TransactionHistoryPage />}/>
              <Route path="/income-history" element={<IncomeHistoryPage />}/>
              <Route path="/expense-history" element={<ExpenseHistoryPage />}/>
              <Route path="/profile" element={<ProfilePage />}/>
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App

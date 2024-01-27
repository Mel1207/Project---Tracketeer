import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Auth from "./pages/page-authentication/Auth"
import DashboardPage from "./pages/page-dashboard/DashboardPage"
import TransactionHistoryPage from "./pages/page-transaction-history/TransactionHistoryPage"
import IncomeHistoryPage from "./pages/page-income-history/IncomeHistoryPage"
import ExpenseHistoryPage from "./pages/page-expense-history/ExpenseHistoryPage"
import ProfilePage from "./pages/page-profile/ProfilePage"
// import Modal from './components/Modal'


function App() {
  return (
    <Router>
      {/* <Modal modalTitle='New Transaction'>
        <div className="form-group">
          <p>Transaction</p>
          <input type="text" placeholder='Enter Transaction' />
        </div>
        <div className="form-group">
          <p>Type</p>
          <select id="transaction-type">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="form-group">
          <p>Amount</p>
          <input type="number" placeholder='0.00' />
        </div>
      </Modal> */}
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

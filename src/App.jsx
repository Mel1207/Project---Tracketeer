import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux" 
import Auth from "./pages/page-authentication/Auth"
import DashboardPage from "./pages/page-dashboard/DashboardPage"
import TransactionHistoryPage from "./pages/page-transaction-history/TransactionHistoryPage"
import IncomeHistoryPage from "./pages/page-income-history/IncomeHistoryPage"
import ExpenseHistoryPage from "./pages/page-expense-history/ExpenseHistoryPage"
import ProfilePage from "./pages/page-profile/ProfilePage"
import Modal from "./components/Modal"
import iconLogOut from './assets/logout.png'
import { modalLogOutClose } from "./features/modalSlice"
import { useLogOut } from "./hooks/useLogOut"

function App() {
  const logOutState = useSelector(state => state.modal.isLogOut)
  const dispatch = useDispatch()
  const { logOut } = useLogOut()


  const handleLogOut = () => {
    dispatch(modalLogOutClose())
    logOut()
  }

  return (
    <>
      {logOutState && (
        <Modal modalTitle='Confirm Logout'>
          <div className="logout-content">
            <img src={iconLogOut} alt="Log out" />
            <p>Are you sure you want to log out ?</p>
          </div>
          <div className="modal-footer">
            <button className='btn btn-secondary' type='button' onClick={() => dispatch(modalLogOutClose())}>Cancel</button>
            <button className='btn btn-primary' onClick={handleLogOut}>Confirm</button>
          </div>
        </Modal>
      )}
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
    </>
    
  )
}

export default App

import ExpenseCard from "./components/ExpenseCard"
import HeaderGreet from "./components/HeaderGreet"
import IncomeCard from "./components/IncomeCard"
import Modal from "./components/Modal"
import Navbar from "./components/Navbar"
import SavingsCard from "./components/SavingsCard"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Navbar />
      {/* <Modal /> */}
      <main>
        <div className="container">
          <HeaderGreet />
          <div className="card-grid">
            <SavingsCard />
            <ExpenseCard />
            <IncomeCard />
          </div>

          <div className="tables">
            <div className="table-transaction">
              
            </div>
            <div className="table-notification">

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

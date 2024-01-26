import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Auth from "./pages/page-authentication/Auth"
import DashboardPage from "./pages/page-dashboard/DashboardPage"


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />}/>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App

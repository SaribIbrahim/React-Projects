import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Transactions from "./pages/Transactions/Transactions.jsx"
import Support from "./pages/Support/Support.jsx"
import SignUp from "./pages/Auth/SignUp.jsx"
import SignIn from "./pages/Auth/SignIn.jsx"
import EmailVerification from "./pages/Auth/EmailVerification.jsx"

function App() {
   

  const router =createBrowserRouter([{
    path:"/",
    element:<Dashboard/>,
  },
  {
    path:"/transactions",
    element:<Transactions/>,
  },
  {
    path:"/support",
    element:<Support/>,
  },
  {
    path:"/signup",
    element:<SignUp/>,
  },
  {
    path:"/signin",
    element:<SignIn/>,
  },
  {
    path:"/email-verification",
    element:<EmailVerification/>,
  },
])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

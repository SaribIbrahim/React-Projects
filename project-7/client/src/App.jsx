import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Transactions from "./pages/Transactions/Transactions.jsx"
import Support from "./pages/Support/Support.jsx"
import SignUp from "./pages/Auth/SignUp.jsx"
import SignIn from "./pages/Auth/SignIn.jsx"
import EmailVerification from "./pages/Auth/EmailVerification.jsx"
import RegistrationSucess from "./pages/Auth/RegistrationSucess.jsx"
import ForgotPaaword from "./pages/Auth/ForgotPaaword.jsx"
import ForgotPasswordSent from "./pages/Auth/ForgotPasswordSent.jsx"
import ResetPasswordSuccess from "./pages/Auth/ResetPasswordSuccess.jsx"
import ResetPassword from "./pages/Auth/ResetPassword.jsx"
import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"



function App() {
   
  const queryClient = new QueryClient();
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
    path:"/email-verification/:email",
    element:<EmailVerification/>,
  },
  {
    path:"/email-verify/:token",
    element:<RegistrationSucess/>,
  },
  {
    path:"/forgot-password",
    element:<ForgotPaaword/>,
  },
  {
    path:"/forgot-password-sent/:email",
    element:<ForgotPasswordSent/>,
  },
  {
    path:"/reset-password-success",
    element:<ResetPasswordSuccess/>,
  },
  {
    path:"/forgot-password-verify/:token",
    element:<ResetPassword/>,
  },
])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <ReactQueryDevtools initialIsOpen={false} /> 
    </QueryClientProvider>
  )
}

export default App

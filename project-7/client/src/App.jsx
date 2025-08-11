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
import ProtectedRoute from "./components/Auth/ProtectedRoute.jsx"
import AlreadySignInRoute from "./components/Auth/AlreadySignInRoute.jsx"



function App() {
   
  const queryClient = new QueryClient();
  const router =createBrowserRouter([{
    path:"/",
    element:<ProtectedRoute><Dashboard/></ProtectedRoute>,
  },
  {
    path:"/transactions",
    element:<ProtectedRoute><Transactions/></ProtectedRoute>,
  },
  {
    path:"/support",
    element:<ProtectedRoute><Support/></ProtectedRoute>,
  },
  {
    path:"/signup",
    element:<AlreadySignInRoute><SignUp/></AlreadySignInRoute>,
  },
  {
    path:"/signin",
    element:<AlreadySignInRoute><SignIn/></AlreadySignInRoute>,
  },
  {
    path:"/email-verification/:email",
    element:<AlreadySignInRoute><EmailVerification/></AlreadySignInRoute>,
  },
  {
    path:"/email-verify/:token",
    element:<AlreadySignInRoute><RegistrationSucess/></AlreadySignInRoute>,
  },
  {
    path:"/forgot-password",
    element:<AlreadySignInRoute><ForgotPaaword/></AlreadySignInRoute>,
  },
  {
    path:"/forgot-password-sent/:email",
    element:<AlreadySignInRoute><ForgotPasswordSent/></AlreadySignInRoute>,
  },
  {
    path:"/reset-password-success",
    element:<AlreadySignInRoute><ResetPasswordSuccess/></AlreadySignInRoute>,
  },
  {
    path:"/forgot-password-verify/:token",
    element:<AlreadySignInRoute><ResetPassword/></AlreadySignInRoute>,
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

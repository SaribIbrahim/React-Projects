import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'
import { theme } from './theme/index.js'
import './index.css'
import App from './App.jsx'
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import AuthProvider from './Provider/AuthProvider.jsx'
import { CookiesProvider } from 'react-cookie'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </AuthProvider>
    </CookiesProvider>
  </StrictMode>
)

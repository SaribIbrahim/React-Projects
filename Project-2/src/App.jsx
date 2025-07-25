
import './App.css'
import ContactHeader from './Components/ContentHeader/ContactHeader'
import ContactForm from './Components/ContactForm/ContactForm'
import Navigation from './Components/Navigation/Navigation'
import { useState } from 'react'
import FormSuccess from './Components/FormSuccess/FormSuccess'


function App() {
  const [formData, setFormData] = useState([])

  return (

  
    <>  
     <Navigation />
     <ContactHeader />
     <ContactForm setFormData={setFormData} />
    </>
  )
}

export default App

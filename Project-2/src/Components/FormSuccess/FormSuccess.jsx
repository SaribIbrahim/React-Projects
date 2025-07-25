import React from 'react'

function FormSuccess({name, email, message}) {
  return (
    <>
    <h2>Thank you for your submission, {name}!</h2>
    <p>A confirmation email has been sent to {email}.</p>
    <p>Your message: {message}</p>
    </>
  )
}

export default FormSuccess
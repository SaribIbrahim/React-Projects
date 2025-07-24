import React from 'react'
import './ContactForm.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { IoCall, IoMail } from "react-icons/io5";


function ContactForm() {
    return (
        <section className='containerr'>
            <div className="form-wrapper">
                <div className='contact-form'>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                    <Button text="VIA CALL" icon={<IoCall fontSize="24px" />} />
                </div>
                <Button isOutline={true} text="VIA EMAIL" icon={<IoMail fontSize="24px" />} />
                <form className='form' >
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input type="text" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="message">Text</label>
                        <textarea type="message" />
                    </div>
                    <div className="button-wrapper">
                        <Button text="Submit Button" />
                    </div>
                </form>
            </div>
            <div className='contact-img'>
                    <img src="/images/Hero.svg" alt="" />
             </div>
        </section>
    )
}

export default ContactForm
import React from 'react'
import './ContactForm.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { IoCall, IoMail } from "react-icons/io5";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Link,useNavigate} from "react-router-dom"
import FormSuccess from '../FormSuccess/FormSuccess';



function ContactForm({setFormData}) {
    
    const navigate = useNavigate();


    const {handleBlur,handleChange,handleSubmit,handleReset,errors,values,touched}=useFormik({
        initialValues:{
            name:"",
            email:"",
            message:""
        },
        validationSchema:Yup.object({
            name:Yup.string().trim().required("Name is required").min(3,"Name must be at least 3 characters"),
            email:Yup.string().email("Invalid email format").required("Email is required").trim(),
            message:Yup.string().trim().required("Message is required")
        }),
        onSubmit:(val,{resetForm})=>{
            setFormData((prevData)=>[...prevData,val]);
            resetForm();
             navigate("/form-success", { state: val }); 
        }
    })
    
    return (
        <section className='containerr'>
            <div className="form-wrapper">
                <div className='contact-form'>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                    <Button text="VIA CALL" icon={<IoCall fontSize="24px" />} />
                </div>
                <Button isOutline={true} text="VIA EMAIL" icon={<IoMail fontSize="24px" />} />
                <form className='form' onSubmit={handleSubmit} onReset={handleReset} >
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.name} name="name" />
                    </div>
                    <div className="error" style={{color:"red"}}>{touched.name && errors.name ? errors.name : null}</div>
                    <div className="form-control">
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" onChange={handleChange} onBlur={handleBlur} value={values.email} name="email" />
                    </div>
                    <div className="error" style={{color:"red"}}>{touched.email && errors.email ? errors.email : null}</div>
                    <div className="form-control">
                        <label htmlFor="message">Text</label>
                        <textarea type="message" onChange={handleChange} onBlur={handleBlur} value={values.message} name="message" />
                    </div>
                    <div className="error" style={{color:"red"}}>{touched.message && errors.message ? errors.message : null}</div>
                    <div className="button-wrapper " style={{marginBottom:"8px"}}>
                        <Button text="Submit Button" type="submit"/>
                    </div>
                </form>
            </div>
            <div className='contact-img' >
                    <img src="/images/Hero.svg" alt="" />
             </div>
        </section>
    )
}

export default ContactForm
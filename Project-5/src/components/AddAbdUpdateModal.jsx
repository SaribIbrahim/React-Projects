
import Modal from './Modal'
import { useFormik } from "formik"
import * as Yup from "yup"
import { addDoc, collection, updateDoc, doc } from "firebase/firestore"
import { db } from "../config/firebase.js"
import { toast } from 'react-toastify'


export default function AddAbdUpdateModal({ isOpen, onClose, isUpdate, contact }) {

    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts")
            await addDoc(contactRef, contact)
            toast.success("Contact Added")
        }
        catch (error) {
            console.log(error);

        }
    }

    const updateContact = async (contact, id) => {
        try {
            const contactRef = doc(db, "contacts", id)
            await updateDoc(contactRef, contact)
            toast.success("Contact Updated")
        }
        catch (error) {
            console.log(error);

        }
    }

    const { handleChange, handleSubmit, handleBlur, values, errors, touched, resetForm } = useFormik({
        initialValues: isUpdate ? {
            name: contact.name,
            email: contact.email
        } : {
            name: "",
            email: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Name is required")
                .min(3, "At least 3 characters are required"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Email is required")
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
            resetForm(); // this resets the form fields
            onClose();   // this closes the modal
        }


    })


    return (
        <div><Modal isOpen={isOpen} onClose={onClose}>
            <form className=' flex flex-col gap-4' onSubmit={handleSubmit}  >
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" >Enter Name</label>
                    <input type="text" name='name' className='h-10 border px-3' onChange={handleChange} onBlur={handleBlur} value={values.name} />
                    {touched.name && errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Enter Email</label>
                    <input type="email" name='email' className='h-10 border px-3' onChange={handleChange} onBlur={handleBlur} value={values.email} />
                    {touched.email && errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <button className='self-end border bg-orange px-3 py-1.5' type='submit'>{isUpdate ? "Update" : "Add"} Contact</button>
            </form>
        </Modal></div>
    )
}


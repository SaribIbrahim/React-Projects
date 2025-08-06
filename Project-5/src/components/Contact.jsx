import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { db } from '../config/firebase';
import { deleteDoc, doc } from 'firebase/firestore';
import AddAbdUpdateModal from './AddAbdUpdateModal';
import useCustom from '../hooks/Custom.js'
import { toast } from 'react-toastify';
import "./Contact.css"


function Contact({ contact }) {

  const{isOpen,onClose,onOpen}=useCustom()

  const deleteContact = async (id) => {
    try {
      const contactRef = doc(db, "contacts", id)
      await deleteDoc(contactRef)
      toast.success("Contact Deleted")
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div key={contact.id} className="bg-yellow flex justify-between items-center p-2 rounded-lg mb-3 card">
        <div className="flex gap-1">
          <HiOutlineUserCircle className="text-4xl text-orange" />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine onClick={onOpen} className='cursor-pointer' />
          <IoMdTrash onClick={() => deleteContact(contact.id)} className="text-orange cursor-pointer" />
        </div>
      </div>
      <AddAbdUpdateModal isUpdate isOpen={isOpen} onClose={onClose} contact={contact}/>

    </>

  )
}

export default Contact

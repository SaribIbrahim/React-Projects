import Navbar from "./components/Navbar";
import "./App.css";
import { IoSearch } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import Contact from "./components/Contact";
import AddAbdUpdateModal from "./components/AddAbdUpdateModal";
import useCustom from "./hooks/Custom.js";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import NotFoundContact from "./components/NotFoundContact.jsx";

function App() {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useCustom();

  const getData = async () => {
      const contactsRef = collection(db, "contacts");
      onSnapshot(contactsRef, (snapShot) => {
        try {
          const contactLists = snapShot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          });
          setContacts(contactLists);
        } 
        catch (error) {
          console.log("Inner error:", error);
        }
      });
  };

  const filterContacts=(e)=>{
    const value=e.target.value;

    const contactsRef = collection(db, "contacts");
      onSnapshot(contactsRef, (snapShot) => {
        try {
          const contactLists = snapShot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          });
          const filteredContacts=contactLists.filter((contact)=>contact.name.toLowerCase().includes(value.toLowerCase()))
          setContacts(filteredContacts);
        } 
        catch (error) {
          console.log("Inner error:", error);
        }
      });


  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="m-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2 mb-4">
          <div className="flex relative items-center flex-grow ml-3">
            <input onChange={filterContacts}
              type="text"
              className="bg-transparent border-white rounded-md border h-10 flex-grow text-white pl-9"
              placeholder="Search Contact"
            />
            <IoSearch className="absolute text-white text-3xl ml-1" />
          </div>
          <FaCirclePlus
            className="text-4xl text-white cursor-pointer"
            onClick={onOpen}
          />
        </div>
        <div>
          {contacts.length<=0?(<NotFoundContact/>):( contacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          )))}
        </div>
      </div>
      <AddAbdUpdateModal isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-center"/>
    </>
  );
}

export default App;

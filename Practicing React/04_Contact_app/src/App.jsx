import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import useDisclosure from "./hooks/useDisclosure";
import NotFoundContact from "./components/NotFoundContact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  // 1. Loading State
  const [isLoading, setIsLoading] = useState(true);

  // 2. CONTACTS STATE (The list we show on screen)
  const [contact, setContact] = useState([]);
  
  // 3. NEW: MASTER CONTACTS STATE (The backup list of ALL data)
  const [allContacts, setAllContacts] = useState([]); 

  const [updateContact, setUpdateContact] = useState(null);

  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    const contactRef = collection(db, "bt24sem3");

    const unsubscribe = onSnapshot(contactRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Update BOTH lists when data arrives
      setContact(contactList);     // Updates the UI
      setAllContacts(contactList); // Updates the Backup
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  // 4. FIXED Search Logic (No Firebase Calls!)
  const filterContacts = (e) => {
    const value = e.target.value;

    // If search is empty, reset to the Master List
    if (value === "") {
      setContact(allContacts);
      return;
    }

    // Filter from the Master List (allContacts)
    const filteredContacts = allContacts.filter((contact) =>
      contact.Name.toLowerCase().includes(value.toLowerCase())
    );

    // Update the UI List
    setContact(filteredContacts);
  };

  const onOpenAdd = () => {
    setUpdateContact(null);
    onOpen();
  };

  const onOpenEdit = (contact) => {
    setUpdateContact(contact);
    onOpen();
  };

  return (
    // CHANGE 1: added 'h-screen flex flex-col'
    <div className="m-auto max-w-92.5 px-4 h-screen flex flex-col">
      <Navbar />
      <SearchBar filterContacts={filterContacts} onOpen={onOpenAdd} />

      {/* CHANGE 2: added 'flex-grow overflow-y-auto' */}
      <div className="mt-4 flex flex-col gap-3 grow overflow-y-auto no-scrollbar">
        {isLoading ? (
          <div className="mt-10 text-center text-xl text-white">Loading...</div>
        ) : contact.length <= 0 ? (
          <NotFoundContact />
        ) : (
          contact.map((dataList) => (
            <ContactCard
              key={dataList.id}
              contact={dataList}
              onEdit={onOpenEdit}
            />
          ))
        )}
      </div>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isUpdate={!!updateContact}
        contact={updateContact}
      />
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default App;
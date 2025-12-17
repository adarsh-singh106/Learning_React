import React from "react";
import { IoIosContact } from "react-icons/io";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify"; // 1. Import Toast

const ContactCard = ({ contact, onEdit }) => {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "bt24sem3", id));
      toast.success("Contact Deleted Successfully"); // 2. Add Toast
    } catch (error) {
      console.log(error);
      toast.error("Error Deleting Contact");
    }
  };

  return (
    <div className="mt-4 flex justify-between items-center rounded-lg bg-yellow-600 p-2">
      <div className="flex items-center gap-1.5">
        <IoIosContact className="text-4xl text-orange-700" />
        <div className="text-white">
          <h2 className="font-medium">{contact.Name}</h2>
          <p className="text-sm">{contact.Email}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-2xl">
        <FaEdit 
          onClick={() => onEdit(contact)} 
          className="cursor-pointer" 
        />
        <FaTrashAlt
          onClick={() => deleteContact(contact.id)}
          className="cursor-pointer text-violet-800"
        />
      </div>
    </div>
  );
};

export default ContactCard;
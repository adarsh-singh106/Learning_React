import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik"; // 1. Import ErrorMessage
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify"; // 2. Import Toast
import * as Yup from "yup"; // 3. Import Yup

// 4. Define Validation Schema
const contactSchemaValidation = Yup.object().shape({
  Name: Yup.string().required("Name is Required"),
  Email: Yup.string().email("Invalid Email").required("Email is Required"),
});

const Modal = ({ onClose, isOpen, isUpdate, contact }) => {
  const handleSubmit = async (values) => {
    try {
      const contactRef = collection(db, "bt24sem3");

      if (isUpdate) {
        const contactDoc = doc(db, "bt24sem3", contact.id);
        await updateDoc(contactDoc, values);
        toast.success("Contact Updated Successfully"); // 5. Success Toast
      } else {
        await addDoc(contactRef, values);
        toast.success("Contact Added Successfully"); // 5. Success Toast
      }
      
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur">
      <div className="relative z-50 m-auto min-h-50 w-full max-w-[80%] rounded-lg bg-white p-4 shadow-lg md:max-w-md">
        <div className="flex justify-end">
          <AiOutlineClose
            onClick={onClose}
            className="cursor-pointer self-end text-2xl"
          />
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <Formik
            initialValues={
              isUpdate
                ? { Name: contact.Name, Email: contact.Email }
                : { Name: "", Email: "" }
            }
            validationSchema={contactSchemaValidation} // 6. Connect Schema
            enableReinitialize
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label htmlFor="Name" className="font-medium">
                  Name
                </label>
                <Field
                  name="Name"
                  className="h-10 rounded-md border border-gray-400 pl-2"
                  type="text"
                  placeholder="Enter Name"
                />
                {/* 7. Error Message UI */}
                <div className="text-xs text-red-500">
                  <ErrorMessage name="Name" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="Email" className="font-medium">
                  Email
                </label>
                <Field
                  name="Email"
                  className="h-10 rounded-md border border-gray-400 pl-2"
                  type="email"
                  placeholder="Enter Email"
                />
                {/* 7. Error Message UI */}
                <div className="text-xs text-red-500">
                  <ErrorMessage name="Email" />
                </div>
              </div>
              
              <button
                type="submit"
                className="mt-2 self-end rounded-md bg-orange-500 px-3 py-1.5 text-white"
              >
                {isUpdate ? "Update" : "Add"} Contact
              </button>
            </Form>
          </Formik>
        </div>
      </div>

      <div
        onClick={onClose}
        className="absolute inset-0 z-40 bg-black/40"
      />
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
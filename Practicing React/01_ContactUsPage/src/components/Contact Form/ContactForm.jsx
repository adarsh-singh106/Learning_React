import Button from "../Button/Button"
import styles from "./ContactForm.module.css"
import { MdOutlineMessage, MdEmail } from "react-icons/md"
import { IoIosCall } from "react-icons/io"
import { useState } from "react"

const ContactForm = () => {
  // 1. Setup the initial state properly
  const initialData = {
    name: "",
    email: "",
    text: ""
  }

  const [data, setData] = useState(initialData)

  const viaCall = () => console.log("Via Call Clicked")
  const viaMessage = () => console.log("Via Message Clicked")
  const viaEmail = () => console.log("Via Email Clicked")

  // 2. Handle Input Changes
  // This function runs every time you type a letter
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    // Update only the specific field being typed in, keep the rest
    setData((prev) => ({
      ...prev,
      [name]: value, 
    }));
  }

  // 3. Handle Form Submission
  const onSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    console.log(event)
    // Now 'data' holds the actual current values of the form
    console.log("Form Submitted:", data);
    alert(`Submitted!\nName: ${data.name}\nEmail: ${data.email}\nText: ${data.text}`);
    setData({
      name: "",
      email: "",
      text: ""
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.box1}>
          <Button
            doThis={viaMessage} // Assuming your Button maps this to onClick
            className={styles.b1}
            show_icon={<MdOutlineMessage />}
            text_title="Via Support Chat"
          />
          <Button
            doThis={viaCall}
            className={styles.b2}
            show_icon={<IoIosCall />}
            text_title="Via Call"
          />
          <Button
            doThis={viaEmail}
            className={styles.b3}
            show_icon={<MdEmail />}
            text_title="Via Email Form"
          />
        </div>

        {/* 4. Connect onSubmit to the form */}
        <form onSubmit={onSubmit} className={styles.box2}>
          
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name" 
              value={data.name}            // Connects to State
              onChange={handleInputChange} // Updates State on type
            />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={data.email} 
              onChange={handleInputChange} 
            />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea 
              name="text" 
              rows="4" 
              style={{ width: '100%' }} 
              value={data.text} 
              onChange={handleInputChange} 
            />
          </div>

          <div style={{display: "flex", justifyContent: "end"}}>
            {/* 5. Ensure button triggers submit */}
            {/* If your Button component doesn't accept type="submit", wrap it or use a standard button */}
            <Button text_title="Submit" /> 
          </div>
        </form>
      </div>

      <div className={styles.support}>
        <img src="images/servicing image.svg" alt="Customer Support" />
      </div>
    </div>
  )
}

export default ContactForm
// Button.js
import styles from './Button.module.css'

// 1. Add className to the props destructuring
const Button = ({ show_icon, text_title, className ,doThis}) => {
    return (
        // 2. Combine the internal module class with the passed external class
        <button type="submit" className={`${styles.button} ${className}`} onClick={doThis}>
            {show_icon}  {text_title}
        </button>
    )
}

export default Button
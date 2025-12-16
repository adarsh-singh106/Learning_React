import styles from './Header.module.css';

// Receive both functions
const Header = ({ searchFilter, categoryFilter }) => {
    return (
        <div className={styles.main_container}>
            <div className={styles.head1}>
                <img src="/Foody Zone.svg" alt="logo" />
                <input 
                   onChange={searchFilter} 
                   placeholder="Search Food..." 
                />
            </div>

            <div className={styles.head2}>
                {/* Use arrow functions to pass the specific string */}
                <button onClick={() => categoryFilter("all")}>All</button>
                <button onClick={() => categoryFilter("breakfast")}>Breakfast</button>
                <button onClick={() => categoryFilter("lunch")}>Lunch</button>
                <button onClick={() => categoryFilter("dinner")}>Dinner</button>
            </div>
        </div>
    )
}

export default Header;
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.head1}>
                <img src="Foody Zone.svg" alt="logo" />
                <input type="search" placeholder="Search Food..." />
            </div>
            <div className={styles.head2}>
                <a href="">All</a>
                <a href="">Breakfast</a>
                <a href="">Lunch</a>
                <a href="">Dinner</a>
            </div>


        </div>
    )
}

export default Header
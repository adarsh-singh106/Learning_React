import FoodCard from '../FoodCard/FoodCard';
import styles from './Food.module.css';

// 1. Receive all the data via Props
const Food = ({ data, loading, error, BASE_URL }) => {

  if (loading) return <div className={styles.loader}>Loading...</div>;
  if (error) return <div className={styles.main}>Error: {error} ❌</div>;

  return (
    <div className={styles.mainContainer}>
        {/* We don't need the header here anymore, it's in App.jsx! */}
        
        <div className={styles.foodCardsContainer}>
            {data?.map((food) => (
                <FoodCard
                    key={food.name}
                    name={food.name}
                    // Use the BASE_URL passed from App.jsx
                    image={BASE_URL + food.image}
                    price={food.price}
                    text={food.text}
                />
            ))}
        </div>
    </div>
  );
}

export default Food;
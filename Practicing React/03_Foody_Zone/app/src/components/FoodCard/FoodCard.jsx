import styles from './FoodCard.module.css';

const FoodCard = ({ name, image, text, price }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} />
      </div>
      
      <div className={styles.foodContent}>
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>{text}</p>
        </div>
        
        <div className={styles.btnWrapper}>
             <button className={styles.priceBtn}>${price.toFixed(2)}</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
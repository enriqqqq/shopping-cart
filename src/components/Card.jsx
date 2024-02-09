import { useState } from 'react';
import { useCart } from '../CartContext.jsx';
import propTypes from 'prop-types';
import styles from './Card.module.css';

function Card({ id, title, price, description, category, image }) {
    const [amount, setAmount] = useState(0);
    const { addToCart } = useCart();

    const increment = (e) => {
        e.preventDefault();
        setAmount(amount + 1);
    }

    const decrement = (e) => {
        e.preventDefault();
        if (amount > 0) {
            setAmount(amount - 1);
        }
    }

    return (
        <div className={styles.card_container}>
            <div className={styles.image_container}>
                <img src={image} alt={title} className={styles.image} />
            </div>
            <div className={styles.info_container}>
                <div>
                    <h2>{title}</h2>
                    <p>{category}</p>
                </div>
                <p>${price}</p>
                <p className={styles.desc}>{description}</p>
            </div>
            <form className={styles.form_container}>
                <button onClick={(e) => {
                    e.preventDefault();
                    if(amount > 0) addToCart({id, title, price, amount, image})
                }}>
                    Add to Cart
                </button>
                <div className={styles.number_input_container}>
                    <button className={styles.dec_inc_btn} onClick={decrement}>-</button>
                    <input 
                        type="number" 
                        className={styles.input_number}
                        value={amount}
                        onChange={(e) => setAmount(parseInt(e.target.value))}
                    />
                    <button className={styles.dec_inc_btn} onClick={increment}>+</button>
                </div>
            </form>
        </div>
    )
}

Card.propTypes = {
    id: propTypes.number,
    title: propTypes.string,
    price: propTypes.number,
    description: propTypes.string,
    category: propTypes.string,
    image: propTypes.string,
    addToCart: propTypes.func,
}

export default Card;

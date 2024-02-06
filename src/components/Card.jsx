import propTypes from 'prop-types';
import styles from './Card.module.css';

function Card({ title, price, description, category, image }) {
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
            <button>Add to Cart</button>
        </div>
    )
}

Card.propTypes = {
    id: propTypes.number,
    title: propTypes.string,
    price: propTypes.number,
    description: propTypes.string,
    category: propTypes.string,
    image: propTypes.string
}

export default Card;

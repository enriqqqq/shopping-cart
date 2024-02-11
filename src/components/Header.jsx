import { useCart } from '../useCart';
import styles from './Header.module.css';
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {

    const { cart, setShowCart } = useCart();

    const calculateTotalAmount = (cart) => {
        return cart.reduce((acc, item) => {
            return acc + item.amount;
        }, 0);
    }

    return (
        <header className={styles.header}>
            <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                <h1>Shop</h1>
            </Link>
            <div className={styles.right_group}>
                <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}> Home</Link>
                <Link to="/shop" style={{textDecoration: 'none', color: 'inherit'}}>Shop</Link>
                <div className={styles.cart_icon_wrapper}>
                    <p className={styles.cart_counter}>{calculateTotalAmount(cart)}</p>
                    <FaShoppingCart size="2.5em" className={styles.icon} onClick={() => {setShowCart(true)}}/>
                </div>
                <MdAccountCircle size="2.5em" />
            </div>
        </header>
    )
}

export default Header;
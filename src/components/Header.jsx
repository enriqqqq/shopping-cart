import { useCart } from '../useCart';
import styles from './Header.module.css';
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {

    const { setShowCart } = useCart();

    return (
        <header className={styles.header}>
            <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                <h1>Shop</h1>
            </Link>
            <div className={styles.right_group}>
                <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}> Home</Link>
                <Link to="/shop" style={{textDecoration: 'none', color: 'inherit'}}>Shop</Link>
                <FaShoppingCart size="2.5em" className={styles.icon} onClick={() => {
                    console.log('triggered');
                    setShowCart(true)}}/>
                <MdAccountCircle size="2.5em" />
            </div>
        </header>
    )
}

export default Header;
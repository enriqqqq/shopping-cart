import styles from './Header.module.css';
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
    return (
        <header className={styles.header}>
            <h1>Shop</h1>
            <div className={styles.right_group}>
                <MdAccountCircle size="3em" />
                <FaShoppingCart size="3em" />
            </div>
        </header>
    )
}

export default Header;
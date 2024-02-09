import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Cart from '../components/Cart';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
    const { showCart } = useCart();

    return (
        <div className={styles.root}>
            {showCart && <Cart />}
            <Header />
            <div className={styles.body}>
                <div className={styles.left}>
                    <div>
                        <p>Welcome to</p>
                        <h1>Home Page</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo elementum neque, in efficitur odio. Etiam accumsan quam vitae nibh facilisis, quis fermentum leo ullamcorper. Nunc in pellentesque enim. Sed vel varius neque, et interdum sem. Donec felis felis, consectetur vitae feugiat et, tempor ac tellus. Suspendisse porta justo augue, vitae eleifend nulla consequat vel. Ut dictum tellus ipsum, vitae eleifend turpis egestas quis. Nulla tristique posuere est laoreet pellentesque. Mauris a convallis est, nec tempus ipsum. Aenean pellentesque justo sit amet rutrum hendrerit.</p>
                    <Link to={'/shop'}>
                        <button>Explore</button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <Carousel />
                </div>
            </div>
            <h1 className={styles.footer}>Footer</h1>
        </div>
    )
}

export default Home;
import { useCart } from "../useCart";
import styles from "./Cart.module.css";
import { IoMdClose } from "react-icons/io";

function Cart() {
    const { 
        cart, 
        showCart, 
        setShowCart, 
        clearCart, 
        incrementAmount, 
        decrementAmount, 
        removeItem 
    } = useCart();
    
    return (
        <>
            <div className={`${styles.overlay} ${!showCart && styles.overlay_closed}`} onClick={() => {setShowCart(false)}}></div>
            <div className={`${styles.modal} ${!showCart && styles.closed_modal }`}>
                <div className={styles.modal_header}>
                    <div>
                        <h2>Cart</h2>
                        <p>{cart.length} Items</p>
                    </div>
                    <IoMdClose size="1.5em" className={styles.icon} onClick={() => {setShowCart(false)}}/>
                </div>
                <ul className={styles.list}>
                    {
                        cart.map((item, index) => {
                            return (
                                <li className={styles.cart_item} key={`cart-item-${index}`}>
                                    <div className={styles.image_container}>
                                        <img className={styles.image} src={item.image} alt={item.title} />
                                    </div>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>Price: ${(item.price * item.amount).toFixed(2)}</p>

                                        <div className={styles.btn_group}>
                                            <div className={styles.num_input}>
                                                <button className={styles.dec_inc_btn} onClick={() => decrementAmount(item.id)}>-</button>
                                                <input type="number" value={item.amount} className={styles.input} readOnly/>
                                                <button className={styles.dec_inc_btn} onClick={() => incrementAmount(item.id)}>+</button>
                                            </div>
                                            <button className={styles.remove_btn} onClick={() => {removeItem(item.id)}}>Remove</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={styles.clear_ctn}>
                    <p className={styles.clear_btn} onClick={clearCart}>Clear</p>
                </div>
                <button className={styles.checkout_btn}>Checkout</button>
            </div>
        </>
    )
}

export default Cart;
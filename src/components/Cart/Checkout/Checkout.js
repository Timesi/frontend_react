import React from 'react';
import ReactDOM from 'react-dom';
import classes from "./Checkout.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CarContext from '../../../store/cart-context';
import { useContext } from 'react';
import CheckoutItem from './CheckoutItem/CheckoutItem';

const checkoutRoot = document.getElementById('checkout-root');

const Checkout = (props) => {

    const ctx = useContext(CarContext);

    return ReactDOM.createPortal(
        <div className={classes.Checkout}>
            <div className={classes.Close}>
                <FontAwesomeIcon 
                    onClick={() => props.onHide()}
                    icon={faXmark}
                />
            </div>

            <div className={classes.MealDesc}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>
                        餐品详情
                    </h2>
                </header>
                    
                <div className={classes.Meals}>
                    {ctx.items.map(item => <CheckoutItem key={item.id} meal={item} />)}
                </div>

                <footer className={classes.Footer}>
                    <p className={classes.TotlePrice}>{ctx.totalPrice}</p>
                </footer>
            </div>
        </div>, checkoutRoot);
}
 
export default Checkout;
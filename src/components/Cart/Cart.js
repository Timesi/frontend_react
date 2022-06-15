import React, {useContext} from 'react';
import classes from './Cart.module.css';
import iconImg from '../../asset/bag.png'
import CarContext from '../../store/cart-context';
import CartDetails from './CartDetails/CartDetails';
import { useState } from 'react';
import Checkout from './Checkout/Checkout';

const Cart = () => {

    const ctx = useContext(CarContext);

    // 添加一个state来设置详情是否显示
    const [showDetails, setShowDetails] = useState(false);

    // 添加一个state来设置结账页面是否显示
    const [showCheckout, setShowCheckOut] = useState(false);

    // 添加显示详情页的函数
    const toggleDetailsHandler = () => {
        if (ctx.totalAmount === 0) {
            setShowDetails(false);
            return;
        }
        setShowDetails(prevState => !prevState);
    }

    const showCheckoutHandler = () => {
        if (ctx.totalAmount === 0) return;
        setShowCheckOut(true);
    }

    // 添加关闭结账页的函数
    const hidedCheckoutHandler = () => {
        setShowCheckOut(false);
    }

    return ( 
        <div className={classes.Cart} onClick={toggleDetailsHandler}>

            {showCheckout && <Checkout onHide={hidedCheckoutHandler} />}

            {showDetails && <CartDetails />}

            <div className={classes.Icon}>
                <img src={iconImg} />
                {ctx.totalAmount === 0 ? null : 
                    <span className={classes.TotalAmount}>
                        {ctx.totalAmount}
                    </span>
                }
            </div>

             {ctx.totalAmount === 0 ? 
                <p className={classes.NoMeal}>未选购商品</p>:
                <p className={classes.Price}>{ctx.totalPrice}</p>
             }

            <button 
                onClick = {showCheckoutHandler} 
                className={`${classes.Button} 
                ${ctx.totalAmount === 0 ? 
                classes.Disabled : ''}`}
            >
                去结算
            </button>
        </div>
     );
}
 
export default Cart;
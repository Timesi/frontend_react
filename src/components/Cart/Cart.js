import React, {useContext, useEffect} from 'react';
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

    // 在组件每次重新渲染的时候检查商品的总数量是否为零，数量为零时，修改showDetails为false
    // 默认情况下，useEffect()中的函数会在组件渲染完成后调用，并且是每次渲染完成后
    // 在useEffect()可以传递第二个参数
    // 第二个参数是一个数组，在数组中可以指定Effect的依赖项
    // 指定后，只有当依赖项发生变化时，Effect才会被触发
    // 通常会将Effect中使用的所有局部变量都设置为依赖项
    // setState方法可以不设置到数组中
    // 如果依赖项设置为空数组，则只会在组件初始化的时候触发一次，不设置依赖项是每次都执行
    useEffect(() => {
        if (ctx.totalAmount === 0){
            setShowDetails(false);
            setShowCheckOut(false);
        }
    }, [ctx, setShowDetails, setShowCheckOut]);


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
import React, { useContext } from 'react'
import classes from './Counter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import CarContext from '../../../store/cart-context';

// 引入FontAwesome
//      安装依赖
//           npm i --save @fortawesome/fontawesome-svg-core
//           npm i --save @fortawesome/free-solid-svg-icons
//           npm i --save @fortawesome/free-regular-svg-icons
//           npm i --save @fortawesome/react-fontawesome@latest
//      引入组件
//           import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//      引入图标
//          import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//      使用组件
//           <FontAwesomeIcon icon={faPlus}/>

// 计数器组件
const Counter = (props) => {

    const ctx = useContext(CarContext);

    const addButtonHandler = () => {
        ctx.addItem(props.meal);
    }

    const subButtonHandler = () => {
        ctx.removeItem(props.meal);
    }

    return ( 
        <div className={classes.Counter}>
            {
                (props.meal.amount && props.meal.amount !== 0) ? (
                    <React.Fragment>
                        <button 
                            className={classes.Sub} 
                            onClick={subButtonHandler}>
                            <FontAwesomeIcon icon={faMinus}/>
                        </button>
                        <span className={classes.count}>{props.meal.amount}</span>
                    </React.Fragment>

                ) : null
            }
            
            <button 
                className={classes.Add} 
                onClick={addButtonHandler}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
     );
}
 
export default Counter;
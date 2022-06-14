import React from 'react';
import classes from './Meal.module.css'
import Counter from './../../UI/Counter/Counter';

// 食物

const Meal = () => {
    return ( 
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src='/img/meals/1.png' />
            </div>
            <div>
                <h2 className={classes.Title}>商品名称</h2>
                <p className={classes.Desc}>配料配料配料配料配料配料配料配料配料配料</p>
                <div className={classes.PriceWrap}>
                    <span className={classes.Price}>12</span>
                    <Counter amount={1}/>
                </div>
            </div>
        </div>
     );
}
 
export default Meal;
import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Confirm.module.css';

const Confirm = (props) => {
    return ( 
        <Backdrop
            onClick={props.cancelHandler} 
            className={classes.ConfirmOuter}>
            <div className={classes.Confirm}>
                <p className={classes.ConfirmText} >{props.ConfirmText}</p>
                <div>
                    <button 
                        onClick={(e) => {props.onCancel(e)}}
                        className={classes.Cancel}
                    >
                        取消
                    </button>
                    <button 
                        onClick={() => {props.onOk()}}
                        className={classes.Ok}
                    >
                        确认
                    </button>
                </div>
            </div>
        </Backdrop>
     );
}
 
export default Confirm;
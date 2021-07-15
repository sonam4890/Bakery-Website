import React from 'react';
import styles from './Form.module.css';

const Form = (props) => {

    return (
        <div className={styles.Register}>
            <div className={styles.head}>{props.err?.data?.message || 'Please login!'}</div>
                <form method='post' action='/login' className={styles.Form}>
                    {Object.keys(props.label).map((el) => (
                        <div className={styles.Inp} key={el}>
                        {el} <input type={el==='username'? 'text': 'password'} placeholder={el==='username'? 'username': 'password'} className={styles.Input} onChange={(e) => props.changeHandler(e, el)}></input>
                    </div>
                    ))}  
                    <div>
                      <button className={styles.Button} onClick = {props.login}>Login</button>
                      <button className={styles.Button} onClick = {props.signUp}>New User</button>
                    </div>  
                </form>
            </div>
    )
}

export default Form;

{/*  */}
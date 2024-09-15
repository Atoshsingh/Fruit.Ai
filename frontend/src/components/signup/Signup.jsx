import React, { useEffect } from 'react'
import styles from "./Signup.module.css";
import pintrest from '../../assets/logos/pints.png';
import facebook from "../../assets/logos/fb.png";
import instagram from "../../assets/logos/inst.png";
import linkedin from "../../assets/logos/lnkd.png";
import scan from "../../assets/logos/scan.png";
import { NavLink, useNavigate } from 'react-router-dom';
const Signup = () => {
    const nav = useNavigate();
    useEffect(()=>{
        const t = JSON.parse(localStorage.getItem("token"))
        if(t){
            nav("/")
        }
    },[])
    return (
        <div className={styles.mainDiv}>
            <div className={styles.innerDiv}>
                <h1>Register</h1>
            
                    <p className={styles.paraText}>By singing in you are agreering<br/>
                        our <span className={styles.span}>Term and privacy policy</span>
                    </p>

                <div className={styles.options}>
                    {/* <button className={styles.optionButtons}>Login</button> */}
                    <div className={styles.optionButtons}><NavLink className={({ isActive }) => isActive ? `${styles.links} ${styles.active}` : styles.links} to='/login'>login</NavLink></div>
                    <div className={styles.optionButtons}><NavLink className={({ isActive }) => isActive ? `${styles.links} ${styles.active}` : styles.links} to='/signup'>Register</NavLink> </div>
                    {/* <button className={styles.optionButtons}>Register</button> */}
                </div>
                <form className={styles.forms}>
                    <input type="text" className={styles.inputs} placeholder='Name'/>
                    <input type="text" className={styles.inputs} placeholder='Email Address'/>
                    <input type="text" className={styles.inputs} placeholder='Password'/>
                    <div className={styles.checkboxDiv}><label for="checkbox" className={styles.checkboxText}>
                        <input type="checkbox" id='checkbox' className={styles.checkbox}/>
                        Remember Password</label>
                        <button>Forget password</button>
                    </div>
                    <button className={styles.mainSubmit}>Register</button>
                </form>
                    <p>Or connect with</p>
                    <div className={styles.iconsBox}>
                        <div><img src={instagram} /></div>
                        <div><img src={facebook} /></div>
                        <div><img src={linkedin} /></div>
                        <div><img src={pintrest} /></div>
                    </div>
                    <div className={styles.scan}> <img className={styles.scanImage} src={scan} /></div>
            </div>
        </div>
    )
}

export default Signup
import React, { useEffect, useState } from 'react';
import styles from "./Login.module.css";
import pintrest from '../../assets/logos/pints.png';
import facebook from "../../assets/logos/fb.png";
import instagram from "../../assets/logos/inst.png";
import linkedin from "../../assets/logos/lnkd.png";
import scan from "../../assets/logos/scan.png";
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nevigate = useNavigate();
    useEffect(()=>{
        const t = JSON.parse(localStorage.getItem("token"))
        if(t){
            nevigate("/")
        }
    },[])
    const handleSubmit = (event) => {
        event.preventDefault();
        const e = email;
        const p = password;
        
        if(e=="tosh@gmail.com" && p =="12345"){
            const token = true;
            localStorage.setItem('token',JSON.stringify(token))
            nevigate("/")
        }
        else{
            alert("wrong credential")
            nevigate("/login")
        }
        localStorage.setItem()
        
    
    };

    return (
        <div className={styles.mainDiv}>
            <div className={styles.innerDiv}>
                <h1>Login</h1>
            
                <p className={styles.paraText}>By signing in you are agreeing<br/>
                    to our <span className={styles.span}>Terms and Privacy Policy</span>
                </p>

                <div className={styles.options}>
                    <div className={styles.optionButtons}>
                        <NavLink 
                            className={({ isActive }) => isActive ? `${styles.links} ${styles.active}` : styles.links} 
                            to='/login'
                        >
                            Login
                        </NavLink>
                    </div>
                    <div className={styles.optionButtons}>
                        <NavLink 
                            className={({ isActive }) => isActive ? `${styles.links} ${styles.active}` : styles.links} 
                            to='/signup'
                        >
                            Register
                        </NavLink> 
                    </div>
                </div>

                <form className={styles.forms} onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)} 
                        className={styles.inputs} 
                        placeholder='Email Address'
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(event) => setPassword(event.target.value)} 
                        className={styles.inputs} 
                        placeholder='Password'
                    />
                    <div className={styles.checkboxDiv}>
                        <label className={styles.checkboxText}>
                            <input type="checkbox" id='checkbox' className={styles.checkbox}/>
                            Remember Password
                        </label>
                        <button type="button">Forget password</button>
                    </div>
                    <button type="submit" className={styles.mainSubmit}>Login</button>
                </form>

                <p>Or connect with</p>
                <div className={styles.iconsBox}>
                    <div><img src={instagram} alt="Instagram" /></div>
                    <div><img src={facebook} alt="Facebook" /></div>
                    <div><img src={linkedin} alt="LinkedIn" /></div>
                    <div><img src={pintrest} alt="Pinterest" /></div>
                </div>
                <div className={styles.scan}> 
                    <img className={styles.scanImage} src={scan} alt="Scan" />
                </div>
            </div>
        </div>
    );
};

export default Login;

import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styles from "./Home.module.css";
import { NavLink } from 'react-router-dom';
import trans from "../../assets/logos/trans.png"
const Home = () => {
  const nav = useNavigate();
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("token"))
        if(!token){
            nav("/login")
        }
    },[])

    function logout(){
      localStorage.removeItem("token");
      nav("/login")
    }
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.innerDiv}>

          <div className={styles.content}>
            <h1 >Fruit.Ai</h1>
            <h3>"Be Healthy!"</h3>
          </div>

          <div className={styles.boxs}>
            <div className={styles.box}>
              <div className={styles.box1}><NavLink className={styles.textOption1} to='/chat'>Chat.</NavLink></div>
              <div className={styles.box2}></div>
            </div>

            <div className={styles.box}>
              <div onClick={logout} className={styles.box3}  >LogOut</div>
              <div className={styles.box4}><NavLink to="/translator"><img className={styles.image} src={trans}/></NavLink></div>
            </div>

            <div className={styles.box}>
              <div className={styles.box5}> <NavLink className={styles.textOption2} to='/faq'>FaQs</NavLink></div>
              <div className={styles.box6}> <NavLink className={styles.textOption3}  to='/about'>About</NavLink></div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
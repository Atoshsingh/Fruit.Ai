import React, { useEffect } from 'react'
import styles from "./About.module.css";
import { useNavigate } from 'react-router-dom';
const About = () => {
  const nav = useNavigate();
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("token"))
        if(!token){
            nav("/login")
        }
    },[])
    console.log("hello world ")
  return (
    <div className={styles.mainDiv}> 
    <div className={styles.innerDiv}>
     <div className={styles.content}>
      <h1>Fruit.Ai</h1>
      <p className={styles.para}>
      Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our Al-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
      </p>
     </div>
      <button className={styles.btn}>ABOUT</button>
    </div>
     </div>
  )
}

export default About
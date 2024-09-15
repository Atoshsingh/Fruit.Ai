
import deleted from '../../assets/fruitsPic/delete.png';
import update from '../../assets/fruitsPic/update.png';
import styles from "./FaQ.module.css";
import { ToastContainer, toast } from 'react-toastify';
const Card = ({ image, name, description }) => {
  return (
    <div className={styles.mainCard}>
      <div className={styles.first}>
        <div className={styles.image}><img className={styles.imageCss} src={image} /> </div>
        <div className={styles.name}></div>
      </div>
      <div className={styles.second}>
        <div className={styles.heading}>{name}</div>
        <div className={styles.content}>{description}</div>
      </div>
      <div className={styles.third}>
        <img className={styles.btns} src={deleted} />
        <img className={styles.btns} src={update} />
      </div>
    </div>
  )
}

export default Card
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import cakelogo from '../public/cakelogo.jpg'

const Header = () => {
    return <div className= {styles.header}>
       <Image src={cakelogo}  alt="" height="100px" width= "150px"  />
       <ul className= {styles.primaryheader}>
         <li className={styles.mainmenu}>
            <a>Disney Cake&#9662;</a>
            <ul className={styles.submenu}>
              <li><a href="#">Recipe</a></li>
              <li><a href="#">Steps</a></li>
            </ul>
         </li>
         <li className={styles.mainmenu}>
           <a>Birthday Cake&#9662;</a>
           <ul className={styles.submenu}>
              <li><a href="#">Ingredient</a></li>
              <li><a href="#">Flavors</a></li>
            </ul>
         </li>
         <li className={styles.mainmenu}>
           <a>Theme Cake&#9662;</a>
           <ul className={styles.submenu}>
              <li><a href="#">Combo</a></li>
              <li><a href="#">Signature</a></li>
            </ul>
          </li>
       </ul>
    </div>
}

export default Header;
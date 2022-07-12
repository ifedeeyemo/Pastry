import Image from "next/image";
import styles from "../styles/Product.module.css";


export default function Product({product}){
    return  <div className={styles.card}> 
      <Image src={product.productUrl} alt="" width="250px" height="150px"/>
      <h3>{product.title}</h3>
        
        <button><h3>{product.price}</h3></button>  
    </div>
     
      
}
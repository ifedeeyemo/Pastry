
import Product from "./Product"
import styles from "../styles/Home.module.css"

export default function ProductList({products}){
  return <>
        <div className={styles.main}><h1>This is all about flour pastries</h1>
        <p>Coming soon</p>
        </div>
        <div className={styles.primary}>{products.map(prod => <Product product={prod} key={prod.title}/>)}</div>
        
     </>
}
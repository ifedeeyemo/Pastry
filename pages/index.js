import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProductList from '../components/ProductList';

export default function Home({products}) {
  return  <div>
 
        <ProductList products ={products}/>
        
      </div>
        
     
        
      
  
}

export async function getStaticProps (context){
   return {
    props: {
      products: productList
    }
   }
}

export const productList = [{
  title:"Product A",
  description: "This is the first ",
  productUrl: "/20_cartoon_character.jpg",
  price: "$25.00 CAD"
},
{
  title:"Product B",
  description: "This is the second ",
  productUrl: "/Cosmetic_Cake.jpg",
  price: "$35.00 CAD"
},
{
  title:"Product c",
  description: "This is the third",
  productUrl: "/Bflames_cake.jpg",
  price: "$45.00 CAD"
},
{
  title:"Product d",
  description: "This is the fourth",
  productUrl: "/HBD_cake.jpg",
  price: "$15.00 CAD"
},
{
  title:"Product e",
  description: "This is the fifth",
  productUrl: "/Nigeria_Navy_Shirt_Cake.jpg",
  price: "$10.00 CAD"
},
{
  title:"Product f",
  description: "This is the sixtt",
  productUrl: "/Bakery_Style_Vanilla_Spong.jpg",
  price: "$30.00 CAD"
},
{
  title:"Product g",
  description: "This is the sevent",
  productUrl: "/Red_And_White_cake.jpg",
  price: "$50.00 CAD"
},
{
  title:"Product h",
  description: "This is the eighth ",
  productUrl: "/Spiral_Birthday_cake.jpg",
  price: "$65.00 CAD"
},
{
  title:"Product i",
  description: "This is the nineth ",
  productUrl: "/Traditional_Wedding_Birthday_Cakes.jpg",
  price: "$40.00 CAD"
}]
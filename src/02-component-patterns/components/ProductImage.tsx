import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import noProduct from "../assets/no-image.jpg";

import styles from '../styles/styles.module.css'
export const ProductImg = ({img=''}) =>{

    const {product} = useContext(ProductContext)
    let imgToShow : string;
    if(img){
      imgToShow = img;
    }else if( product.img){
      imgToShow = product.img;
    }else{
      imgToShow = noProduct
    }
  
    return(
      <img className={styles.productImg}  src={imgToShow}  alt="Cofee" /> 
    )
  }
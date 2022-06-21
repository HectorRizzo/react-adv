import { ReactElement } from "react";

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[]
}

export interface Product {
    id: number,
    title: string,
    img?: string,
  }

export interface ProductContextProps{
  counter : number;
  increaseBy : (value:number) => void;
  product : Product;
  
}


// interface ProductButtonProps {
//   increaseBy: (number : number) => void,
//   counter: number,
// }

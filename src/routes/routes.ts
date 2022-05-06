import { lazy,LazyExoticComponent } from "react";
import { LazyPage1 } from "../route/LazyPage1";
import { LazyPage2 } from "../route/LazyPage2";
import { LazyPage3 } from "../route/LazyPage3";

//defino tipo
type JSXComponent = () => JSX.Element

interface Route{
    to: string;
    path: string;
    Component: LazyExoticComponent< JSXComponent> | JSXComponent;
    name: string;
    
}

//lazyload
const Lazy1= lazy( () => import(/* webpackChunkName: "LazyPage1" */ '../route/LazyPage1'))
const Lazy2= lazy( () => import(/* webpackChunkName: "LazyPage2" */ '../route/LazyPage2'))
const Lazy3= lazy( () => import(/* webpackChunkName: "LazyPage3" */ '../route/LazyPage3'))


export const routes : Route[] = [
    {
        to: '/lazy1',
        path:'lazy1',
        Component: Lazy1,
        name: 'Lazy-1'
    }
,
    {
        to: '/lazy2',
        path:'lazy2',
        Component: Lazy2,
        name: 'Lazy-2'
    }
,
    {
        to: '/lazy3',
        path:'lazy3',
        Component: Lazy3,
        name: 'Lazy-3'
    }
]


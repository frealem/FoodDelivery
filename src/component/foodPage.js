import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getById } from "../component/foodService";
import classes from './foodPage.module.css'
import { Tags } from "./Tags";
import { Starcomponent } from "./starcomponent";
import {Price} from "./whole_price"
export const FoodPage=()=>{
    const[food,setFood]=useState({});
    const{id}=useParams();

    useEffect(()=>{
        getById(id).then(setFood);
    },[id])
    return(
        <div>{
            food && <div className={classes.container}>
             <div className={classes.image}>  <img src={`/images/${food.imageUrl}`} alt={food.name}/>
             </div>
             <div className={classes.containerRight}>
             <div className={classes.name}>
                {food.name}
             </div> 
            
             <div className={classes.tag}>
                {food.tags &&(
                    <Tags
                    tags={food.tags.map(tag=>({name:tag}))}
                    forFoodPage={true}
                    />
                )}
             </div>
             
             <div className={classes.star}>
             <Starcomponent stars={food.stars}/>
             </div>
             <div className={classes.origin}>
                <span>Origin &nbsp;</span><strong>{food.origins}</strong>
             </div> 
             <div className={classes.cookTime}>
                <span><i class="fa-regular fa-clock"></i>Time for cooking {food.name}</span>&nbsp;<strong>{food.cookTime}min</strong>
             </div>
             <div className={classes.price}>
             <Price price={food.price}/>
             </div>
             <button className={classes.cartBtn}>To Cart</button>
             </div></div>
        }</div>
    )
}

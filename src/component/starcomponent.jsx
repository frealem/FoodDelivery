import classes from './starcomponent.module.css';
import React from 'react';
export const  Starcomponent=({stars,size})=>{
    const styles={
        width:size+'px',
        height:size+'px',
        marginRight:size/6+'px',
    };
function Star({number}){
    const halfNumber=number-0.5; 
    return stars>=number ?(
        <i class="fa-solid fa-star fa-2xs" style={styles}></i>
    ):
    stars>=halfNumber?(
        <i class="fa-solid fa-star-half-stroke fa-2xs" style={styles}></i>
    ):
    <i class="fa-regular fa-star fa-2xs" style={styles}></i>
}
return(
    <div className={classes.rating}>
        {[1,2,3,4,5].map(number=>(
            <Star key={number} number={number} />
        ))}
    </div>
)}

/*export default function Starcomponent({stars,size})
Take the number as props {number}  and if the data(stars) in food.js is < 50% of number that means
the {number} props is 5 how 12345

 {[1,2,3,4,5].map(number=>(
            <Star key={number} number={number} />
        ))}
        
        array use this ({number} prop as key again number)list stars 
*/
import {Starcomponent} from './starcomponent'
import classes from './thumb.module.css'
import {Link} from 'react-router-dom'
import { Price } from './whole_price'
export const Thumbnail=({foods})=>{
    return <div className={classes.list} >{foods.map(food=>(
        <li key={food.id}>
            <Link to={`/food/${food.id}`}>
                <img alt={food.name} src={`/images/${food.imageUrl}`} className='image' />
            <div className={classes.content}>
                <div className={classes.name}><strong>{food.name}</strong></div>
                  <span className={`${classes.favorite}  ${food.favorite ? '' : classes.not}`}><i class="fa-solid fa-heart fa-sm"></i></span>  
            <div className={classes.stars}>
            
                <Starcomponent stars={food.stars}/>

                <div className={classes.ItemFooter}>
                    <div className={classes.origins}>
                        {food.origins.map(origin=>(<span key={origin}>{origin}</span>))}
                    </div>
                    <div className={classes.cooking_time}>
                        <span style={{color:"coral"}}><i class="fa-regular fa-clock"></i></span>
                        {food.cookTime}
                    </div>
                    <div className={classes.foodPrice}><Price price={food.price}/></div>
                </div>
            </div>
            </div>
            </Link>
        </li>
    ))}</div>
}
/* <Starcomponent stars={food.stars}/> take a data stars from food.js and call as component or use stars to Starcomponent as parameter
stars= which is props in the component food.stars the data

{food.origins.map(origin=>(<span key={origin}>{origin}</span>))} can be {food.origin}
*/


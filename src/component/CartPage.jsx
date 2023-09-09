import classes from './CartPage.module.css';
import { useCart } from './useCart';
import Title from './title';
import { Link } from 'react-router-dom';
import { Price } from './whole_price';
export const CartPage=()=>{
    const {cart,removeFromCart,changeQuantity}=useCart();
    return(<><Title title="Cart Page" margin="1.5rem 0 0 2.5rem"/>
    
    {
        cart && cart.items.length >0 &&
        <div className={classes.container}>
            <ul className={classes.list}>
                {cart.items.map(item=><li key={item.food.id}>
                    <div>
                        <img alt={item.food.name}
                            src={`/images/${item.food.imageUrl}`}              
                        />
                    </div>
                    <div>
                        <Link to={`/food/${item.food.id}`}>{item.food.name}</Link>
                    </div>
                    <div>
                        <select value={item.quantity} 
                        onChange={e=>changeQuantity(item,Number(e.target.value))}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>

                        </select>
                    </div>
                    <div>
                        <Price price={item.price}/>
                    </div>
                    <div><button className={classes.removebutton} onClick={()=>removeFromCart(item.food.id)}>remove</button>
                    </div>
 
                </li>)}
            </ul>
            <div className={classes.checkout}>
                <div>
                    <div className={classes.foods_count}><span>Count:</span>{cart.totalCount}</div>
                    <div className={classes.total_price}><span>TotalPrice:</span>
                        <Price price={cart.totalPrice}/>
                    </div>
                    <div class='checkOut'><button>CHECKOUT</button></div>
                    </div>
            </div>
        </div>
    }
    </>)
}

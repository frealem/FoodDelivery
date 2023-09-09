import {Link} from 'react-router-dom';
import classes from './header.module.css';
import React from 'react';

export default function Header(){
const user={
    name:'frealem',
}
const cart={
    totalCount:10,
}
const logout=()=>{}
return(
    <div className={classes.header}>
    
    <div className={classes.container}>
    <Link to='/' className={classes.logo}>Runner Delivery</Link>
    <nav className='nav'><ul className='navul'>{
        user ? (
    <li className={classes.menuContainer}>
<Link to='/profile'>{user.name}</Link>
<div className={classes.menu}>
<Link to='/profile'>Profile</Link>
<Link to='/orders'>Orders</Link>
<a onClick={logout}>LogOut</a></div>
    </li>)
    :(<Link to='/login'>Login</Link>)}
    
    <li ><Link to='/cart' className='count'>Cart &nbsp;
    {cart.totalCount>0 && <span >{cart.totalCount}</span>}</Link></li>
    </ul></nav>
    </div>
</div>)
}
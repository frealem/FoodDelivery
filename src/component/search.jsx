import { useParams,useNavigate } from 'react-router-dom';

import { useState } from 'react';
import classes from './search.module.css';
import React from 'react';
export const Search=()=>{
const [term,setTerm]=useState('');
const navigate=useNavigate();
const {searchTerm}=useParams();

const search=async=>{
    term ? navigate('/search/'+ term):navigate('/')
};

return(<div className={classes.searchContainer}>
    <input
        type='text'
        placeholder='search foods'
        onChange={e=>setTerm(e.target.value)}
        onKeyUp={e=>e.key==='Enter' && search()}
        defaultValue={searchTerm}
    />
    <button className={classes.searchButton} onClick={search}>Search</button>
</div>)

}
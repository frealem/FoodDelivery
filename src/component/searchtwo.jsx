import React  ,{useState} from "react";
import {useParams,useNavigate} from 'react-router-dom';

export const SearchBar=()=>{
  const[term,setTerm]=useState('');
  const {searchTerm}=useParams();
  const {navigate}=useNavigate();
const search=async()=>{
    if(term){
         // Perform API call to fetch search results
      const response = await fetch('https://api.example.com/search?term=${term}');
      const data = await response.json();

      // Display search results on the page
      console.log(data);

      // Navigate to search results page
      navigate('/search/${term}');
    } else {
      // Navigate to homepage
      navigate('/');
    }
  
    }
}
}
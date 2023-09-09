import {React,useEffect,useReducer} from 'react'
import { getAll, getAllTags, search ,getAllTag} from './foodService';
import { Thumbnail } from './thumb';
import { useParams } from 'react-router-dom';
import { Search } from './search';
import {Tags} from './Tags';

const initialState={foods:[],tags:[]};


const reducer=(state,action)=>{
    switch(action.type){
        case 'foodLoad':
            return{...state,foods:action.payload};
            case 'TagsLoad':
                return{...state,tags:action.payload};
            default:
    return state;
    }
}
export const HomePage=()=>{
    
    const [state,dispatch]=useReducer(reducer,initialState);
    const{foods ,tags}=state;
    const {searchTerm,tag}=useParams();
    
    useEffect(()=>{
        getAllTags().then(tags=>dispatch({type:'TagsLoad',payload:tags}))
        const loadFoods=tag
        ? getAllTag(tag):searchTerm
        ? search(searchTerm):getAll();
        loadFoods.then(foods=>dispatch({type:'foodLoad',payload:foods}))
       
    },[]);
    return(<div className="home1">
    <Search/>
    <Tags tags={tags}/>
       <Thumbnail foods={foods}/> 
    </div>)
}
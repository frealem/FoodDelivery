import React from 'react';
import Header from './component/Header';
import  {Routers} from './component/routers';
import { Search } from './component/search';
import FoodPage from './component/foodPage';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routers/>
     
    </div>
  );
}

export default App;

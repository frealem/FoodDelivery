import { Route,Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import {FoodPage} from "./foodPage"
import { CartPage } from "./CartPage"

export const Routers=()=>{
    return(<div className=''><Routes>
        <Route path="/" element={<HomePage/>} />
      <Route path="/search/:searchTerm" element={<HomePage />} />
      <Route path="/tag/:tag" element={<HomePage />} />
      <Route path="/food/:id" element={<FoodPage />} />
    </Routes></div>)
}

//
//<Route path="/CartPage" element={<CartPage />} />
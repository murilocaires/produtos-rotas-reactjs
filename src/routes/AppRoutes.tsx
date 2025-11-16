import   {Routes, Route}   from "react-router"
import {Home} from "../pages/Home.tsx"
import {Products} from "../pages/Products.tsx"
import {NotFound} from "../pages/NotFound.tsx"
import {Datails} from "../pages/Datails.tsx"
import { Layout } from "../components/Layout/index.tsx"




export function AppRoutes(){
    return (
        <Routes>

            <Route path="/"  element={<Layout/>}>
                <Route path="/"  index element={<Home/>}/>
                <Route path="products" element ={<Products/>}/>
                <Route path="details/:id" element ={<Datails/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}



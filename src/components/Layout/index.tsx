import "./style.css"
import { Outlet } from "react-router"


export function Layout(){
    return(
        <div>
            <header className="user">
                <p>Olá, Murilo!</p>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>    
                <span>@todos os direitos reservados</span> 
            </footer>
        </div>

    )

}

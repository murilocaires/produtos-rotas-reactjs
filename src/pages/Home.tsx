import {useNavigate} from 'react-router'


export  function Home(){

    const navigate = useNavigate();

    function productOpen(){
        navigate("/products")
    }


    return (

        <div>
           <h1>Página Home</h1>
           <nav>
            <a href="/products">Produtos</a>
            <a href="/products?category=jogos">Categorias</a>
            <button type="button" onClick={productOpen}>Ver produtos</button>
           </nav>

        </div>

    )
}

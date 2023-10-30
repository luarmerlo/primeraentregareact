

import { CartWidget } from "./CartWidget";



export const NavBar = () => {
    return (
        <header>
            <nav>
                <div>
                    <h1>Ecommerce2</h1>   
                </div>
                    <ul>
                        <li><a href="">mp3</a></li>
                        <li><a href="">cd</a></li>
                        <li><a href="">vynilos</a></li>
                    </ul>
          <CartWidget/>
            </nav>
        </header>
    )
};


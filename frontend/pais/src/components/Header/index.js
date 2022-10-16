import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/adicionarcontinente">Adicionar Continente</Link></li>
                        <li><Link to="/listarcontinente">Listar Continente</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
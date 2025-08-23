import './Header.scss';
import { CiSearch } from "react-icons/ci";

export default function Header(){
    return (
        <header className="container-header">
            <article className="header-head">
                <h1>Shelone</h1>
                <ul className='nav-bar'>
                    <li>Início</li>
                    <li>Serviços</li>
                    <li>Planos</li>
                    <li>Depoimentos</li>
                </ul>
            </article>
            <article className="header-main">
                <div>
                    <input type="text" />
                    <CiSearch className='icon'/>
                </div>
                <button>Agendamento</button>
            </article>
        </header>
    )
}
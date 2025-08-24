import './Header.scss';
import { CiSearch } from "react-icons/ci";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

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
                <button>Agendamento</button>
                <div className="mobile">
                    <HiMiniBars3BottomRight />
                </div>
            </article>
        </header>
    )
}
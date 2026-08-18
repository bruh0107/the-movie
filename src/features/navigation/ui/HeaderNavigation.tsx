import { Link } from "react-router-dom";

const HeaderNavigation = () => {
    return (
        <nav className="flex justify-between text-xl w-2/5">
            <Link to="/">Главная</Link>
            <Link to="/catalog/movies">Фильмы</Link>
            <Link to="/catalog/tv">Сериалы</Link>
            <Link to="/top">Топ-250</Link>
            <a href="">Скоро</a>
        </nav>
    );
};

export default HeaderNavigation;
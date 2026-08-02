import { Link } from "react-router-dom";

const HeaderNavigation = () => {
    return (
        <nav className="flex justify-between text-xl w-2/5">
            <Link to="/">Главная</Link>
            <Link to="/movies">Фильмы</Link>
            <a href="">Сериалы</a>
            <a href="">Актеры</a>
            <a href="">Случайный фильм</a>
        </nav>
    );
};

export default HeaderNavigation;
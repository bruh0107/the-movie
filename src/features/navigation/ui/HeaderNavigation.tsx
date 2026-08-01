import { Link } from "react-router-dom";

const HeaderNavigation = () => {
    return (
        <nav className="flex justify-between text-xl w-2/5">
            <Link to="/">Главная</Link>
            <a href="">Фильмы</a>
            <a href="">Сериалы</a>
            <a href="">Актеры</a>
            <a href="">Случайный фильм</a>
        </nav>
    );
};

export default HeaderNavigation;
import React from 'react';
import {Link} from 'react-router';
const Navigation = () => {
    return (
        <div className="nav">
            <div className="nav__link"><Link to='/'>Главная</Link></div>
            <div className="nav__link"><Link to='/children'>Мои дети</Link></div>
            <div className="nav__link"><Link to='/child_tests'>Анализы</Link></div>
            <div className="nav__link"><Link to='/med_examinations'>Осмотры</Link></div>
            <div className="nav__link"><Link to='/products'>Продукты</Link></div>
        </div>
    );
};
export default Navigation;
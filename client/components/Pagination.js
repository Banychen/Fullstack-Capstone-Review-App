import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Pagination.css';

function Pagination(props) {
    const location = useLocation();
    const { restaurants } = useSelector((state) => state);
    const totalPage = Math.ceil(restaurants.length / props.itemPerPage);
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const getNavContent = () => {
        let content = [];
        for (let i = 1; i <= totalPage; i++) {
            content.push(
                <Link
                    // onClick={handleClick}
                    className={({ isActive }) =>
                        isActive ? 'selected' : undefined
                    }
                    to={`/home/${i}`}
                    key={i}
                >
                    {i}
                </Link>
            );
        }
        return content;
    };
    return <div className="Page-Wrapper">{getNavContent()}</div>;
}
export default Pagination;

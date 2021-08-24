import React from 'react';
import { Link } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {

    return (
        <>
            <ul className={s.list}>
                <li>
                    <Link to={'/users'} className={s.list__item}>Users</Link>
                </li>
                <li>
                    <Link to={'/imageFull'} className={s.list__item}>Album</Link>
                </li>
            </ul>
        </>
    )
}

export default Navigation;
